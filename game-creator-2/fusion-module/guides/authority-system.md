---
description: Understanding Photon Fusion's authority model in Game Creator 2
---

# Authority System

## Overview

Authority determines which peer controls a networked object. Understanding authority is essential for proper multiplayer game logic, preventing conflicts, and ensuring secure gameplay.

---

## Authority Types

### Input Authority

The peer that provides input for an object.

| Characteristic | Description |
|----------------|-------------|
| **Who Has It** | The player controlling this character/object |
| **What It Can Do** | Send input commands, request actions |
| **Typical Use** | Player characters, vehicles player is driving |

### State Authority

The peer responsible for the authoritative state of an object.

| Characteristic | Description |
|----------------|-------------|
| **Who Has It** | Host/Server, or owner in Shared Mode |
| **What It Can Do** | Modify networked properties, make final decisions |
| **Typical Use** | Game logic, physics, spawning |

### Proxy

A remote representation of an object controlled by another peer.

| Characteristic | Description |
|----------------|-------------|
| **Who Has It** | All other peers viewing the object |
| **What It Can Do** | Display state, play animations/effects |
| **Typical Use** | Rendering other players, showing world state |

---

## Authority Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Authority Flow                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Player A (Local)                Player B (Remote)          │
│   ┌─────────────────┐            ┌─────────────────┐        │
│   │ Input Authority │            │     Proxy       │        │
│   │ State Authority │            │  (No Authority) │        │
│   └────────┬────────┘            └────────┬────────┘        │
│            │                               │                 │
│            │ Player A presses "Attack"     │                 │
│            ▼                               │                 │
│   ┌─────────────────┐                      │                 │
│   │ Process Attack  │                      │                 │
│   │ (Has Authority) │                      │                 │
│   └────────┬────────┘                      │                 │
│            │                               │                 │
│            │ Networked State Update        │                 │
│            ├───────────────────────────────┤                 │
│            │                               ▼                 │
│            │                      ┌─────────────────┐        │
│            │                      │ Receive Update  │        │
│            │                      │ Play Animation  │        │
│            │                      └─────────────────┘        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Authority by Game Mode

### Shared Mode

Distributed authority where players own their objects.

```
Player A spawns PlayerA_Character:
├── Input Authority: Player A ✓
├── State Authority: Player A ✓
└── Proxy on: Player B, Player C

Player B spawns PlayerB_Character:
├── Input Authority: Player B ✓
├── State Authority: Player B ✓
└── Proxy on: Player A, Player C

World Objects:
├── State Authority: First spawner or Host
└── Proxy on: All others
```

**Best For:** Casual games, co-op, low-stakes gameplay

### Host Mode

Host controls all state authority.

```
Host spawns all characters:

PlayerA_Character:
├── Input Authority: Player A ✓
├── State Authority: Host ✓
└── Proxy on: Player B, Player C

PlayerB_Character:
├── Input Authority: Player B ✓
├── State Authority: Host ✓
└── Proxy on: Player A, Player C
```

**Best For:** Competitive games, authoritative gameplay

### Dedicated Server Mode

Server has all state authority, no local players.

```
Server owns everything:
├── State Authority: Server (always)
├── Input Authority: Respective clients
└── Proxies: All clients
```

**Best For:** Large-scale games, esports

---

## Checking Authority

### Visual Scripting Conditions

| Condition | Returns True When |
|-----------|-------------------|
| **Has Input Authority** | This peer controls input |
| **Has State Authority** | This peer controls state |
| **Is Local Player** | This is the local player's character |
| **Is Proxy** | This is a remote representation |
| **Is Host** | This peer is the host/server |

### Common Patterns

#### Run Logic Only on Authority

```
Trigger: On Update
└── Condition Branch:
    └── If Has State Authority:
        └── [Run AI Logic / Game Logic]
```

#### Input Processing

```
Trigger: On Attack Input
└── Condition Branch:
    └── If Has Input Authority:
        └── [Process Attack Input]
```

#### Skip Local Player

```
Trigger: On Player Spawned
└── Condition Branch:
    └── If NOT Is Local Player:
        └── [Setup for remote player]
```

---

## Authority Patterns

### Pattern 1: Client-Authoritative Movement

Player controls their own movement (Shared Mode default).

```
Trigger: On Movement Input
└── Condition Branch:
    └── If Has Input Authority:
        └── Character: Move
            └── Direction: {Input Direction}
```

**Pros:** Responsive, low latency
**Cons:** Vulnerable to cheating

### Pattern 2: Server-Authoritative Combat

Server validates all combat actions.

```
Trigger: On Attack Button
└── Condition Branch:
    └── If Has Input Authority:
        └── Action RPC (Target: StateAuthority)
            └── Actions:
                └── Validate and Process Attack
```

**Pros:** Cheat-resistant
**Cons:** Higher latency

### Pattern 3: Prediction with Reconciliation

Client predicts, server corrects.

```
Client Side:
Trigger: On Input
└── If Has Input Authority:
    ├── Predict locally (immediate feedback)
    └── Send input to server

Server Side:
Trigger: On Receive Input
└── If Has State Authority:
    ├── Validate input
    ├── Apply authoritative state
    └── Broadcast correction if needed
```

---

## Requesting Authority

### When Objects Have No Authority

```
Trigger: On Interact With Orphaned Object
└── Instructions:
    └── Request State Authority
        └── Object: {Interacted Object}
```

### Dynamic Authority Transfer

```
Trigger: On Player Enters Vehicle
└── Condition Branch:
    └── If Is Local Player:
        └── Request State Authority
            └── Object: {Vehicle}
```

### Authority Events

| Event | When Fired |
|-------|------------|
| **On State Authority Gained** | This peer became State Authority |
| **On State Authority Lost** | Another peer took State Authority |
| **On Input Authority Gained** | This peer became Input Authority |
| **On Input Authority Lost** | Lost input control |

---

## Authority Validation

### Preventing Cheating

Always validate on State Authority:

```
❌ Wrong - No validation:
Trigger: On Attack RPC Received
└── Apply Damage: 9999

✓ Correct - Validate on authority:
Trigger: On Attack RPC Received
└── Condition Branch:
    └── If Has State Authority:
        └── Condition Branch:
            └── If Damage In Valid Range:
                └── Apply Damage: {Received Damage}
```

### Validation Checklist

| Check | Why |
|-------|-----|
| Is sender authorized? | Prevent spoofed messages |
| Is action possible? | Validate cooldowns, resources |
| Is value in range? | Prevent overflow/underflow |
| Is target valid? | Prevent targeting invalid objects |

---

## Common Mistakes

### Mistake 1: Modifying State Without Authority

```
❌ Wrong:
Trigger: On Any Event
└── Set Networked Variable: Health = 0
    // Fails if not State Authority!

✓ Correct:
Trigger: On Any Event
└── Condition Branch:
    └── If Has State Authority:
        └── Set Networked Variable: Health = 0
```

### Mistake 2: Processing Input on Proxies

```
❌ Wrong:
Trigger: On Jump Input
└── Character: Jump
    // Proxy tries to jump locally!

✓ Correct:
Trigger: On Jump Input
└── Condition Branch:
    └── If Has Input Authority:
        └── Character: Jump
```

### Mistake 3: Spawning Without Authority

```
❌ Wrong:
Trigger: On Enemy Killed
└── Spawn Loot
    // Every client spawns loot!

✓ Correct:
Trigger: On Enemy Killed
└── Condition Branch:
    └── If Has State Authority:
        └── Spawn Loot (once, synced to all)
```

---

## Best Practices

### 1. Always Check Authority

Before modifying networked state, verify you have permission.

### 2. Use Appropriate Game Mode

| Game Type | Recommended Mode |
|-----------|------------------|
| Casual Co-op | Shared |
| Competitive | Host or Server |
| MMO/Large Scale | Dedicated Server |

### 3. Validate All Inputs

Never trust client data blindly. Validate on State Authority.

### 4. Handle Authority Changes

```
Trigger: On State Authority Lost
└── [Cleanup local predictions]
└── [Disable local control]

Trigger: On State Authority Gained
└── [Initialize authoritative state]
└── [Enable control]
```

### 5. Design for Authority Transfer

Plan for host migration and dynamic authority changes.

---

## Authority Properties

Access authority state via property getters:

| Property | Type | Description |
|----------|------|-------------|
| **Has Input Authority** | Boolean | Current input authority status |
| **Has State Authority** | Boolean | Current state authority status |
| **Is Proxy** | Boolean | Is remote representation |
| **Object Authority Player** | Player | Player with authority |

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter authority
- [Sessions](../sessions.md) - Game modes and host
- [Variables](../variables.md) - Authority for variable sync
- [RPC](../remote-procedure-calls.md) - RPC targets and authority
- [Troubleshooting](troubleshooting.md) - Authority issues
