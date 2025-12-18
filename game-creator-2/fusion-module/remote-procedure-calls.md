---
description: Complete guide to Remote Procedure Calls (RPCs) for networked game events
---

# Remote Procedure Calls

## Overview

Remote Procedure Calls (RPCs) are ideal for sharing punctual game events across the network. Unlike synchronized variables that maintain continuous state, RPCs transmit one-time events like attacks, interactions, or triggers.

The Fusion module provides three RPC types that integrate seamlessly with Game Creator 2's visual scripting:

| RPC Type | Description |
|----------|-------------|
| **Action RPC** | Execute instructions on remote clients |
| **Condition RPC** | Evaluate conditions on remote clients |
| **Trigger RPC** | Fire triggers on remote clients |

---

## RPC Instructions

### Action RPC

Execute a set of instructions across the network.

<div align="left">
<figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption><p>Action RPC instruction</p></figcaption></figure>
</div>

**Use Cases:**
- Play sound effects on all clients
- Show visual effects
- Update UI elements
- Trigger animations

### Condition RPC

Evaluate conditions and branch logic across the network.

<figure><img src="../../.gitbook/assets/image (18).png" alt=""><figcaption><p>Condition RPC instruction</p></figcaption></figure>

**Use Cases:**
- Synchronized decision making
- Distributed state checks
- Network-wide validation

### Trigger RPC

Fire triggers on remote clients.

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption><p>Trigger RPC instruction</p></figcaption></figure>

**Use Cases:**
- Notify other players of events
- Coordinate game phases
- Trigger cutscenes/sequences

{% hint style="info" %}
All RPC types work like standard Game Creator 2 Run instructions, but execute through the Fusion network. The target object must have a **NetworkObject** component.
{% endhint %}

---

## RPC Parameters

### RPC Target

Defines which peers execute the RPC:

| Target | Description |
|--------|-------------|
| **All** | Executes on all peers in the session (including sender) |
| **Proxies** | Executes on peers without Input or State Authority |
| **InputAuthority** | Executes only on the peer with Input Authority |
| **StateAuthority** | Executes only on the peer with State Authority |

### Target Selection Examples

```
Attack Effect (show on everyone):
└── RPC Target: All

Damage Number (show only on victim's screen):
└── RPC Target: InputAuthority

Server Validation (run on authority):
└── RPC Target: StateAuthority

Remote Player Effects (skip self):
└── RPC Target: Proxies
```

---

## Cache State

Enable caching to replay RPCs for late joiners.

### How It Works

1. RPC fires and executes on current clients
2. State is cached on the network object
3. New players joining receive cached RPCs
4. Late joiners see consistent state

### When to Use Caching

| Scenario | Cache? |
|----------|--------|
| Persistent visual changes | ✅ Yes |
| Equipment/model changes | ✅ Yes |
| One-time effects (explosions) | ❌ No |
| Sound effects | ❌ No |
| Temporary UI | ❌ No |

### Example: Cached Door State

```
Trigger: On Interact
└── Instructions:
    └── Action RPC
        ├── Target: All
        ├── Cache State: ✅ Enabled
        └── Actions:
            └── Open Door Animation
```

Late joiners will see the door already open.

---

## Removing Cached State

Clear cached RPC state when it's no longer relevant.

<figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption><p>Remove cached state instructions</p></figcaption></figure>

### Available Instructions

| Instruction | Clears |
|-------------|--------|
| **Remove Cached Actions** | Action RPC cache |
| **Remove Cached Conditions** | Condition RPC cache |
| **Remove Cached Trigger** | Trigger RPC cache |

### Example: Reset Door

```
Trigger: On Door Reset
└── Instructions:
    ├── Remove Cached Actions
    │   └── Target: [Door Object]
    └── Action RPC
        ├── Cache State: ✅ Enabled
        └── Actions:
            └── Close Door Animation
```

---

## RPC Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    RPC Flow                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   Sender (Client A)                                      │
│        │                                                 │
│        ▼                                                 │
│   ┌─────────────────┐                                   │
│   │   RPC Call      │                                   │
│   │   (Instruction) │                                   │
│   └────────┬────────┘                                   │
│            │                                             │
│            ▼                                             │
│   ┌─────────────────┐                                   │
│   │  RPC Receiver   │  ◄── On NetworkObject             │
│   │  Component      │                                   │
│   └────────┬────────┘                                   │
│            │                                             │
│     ┌──────┴──────┐                                     │
│     ▼             ▼                                     │
│  ┌──────┐     ┌──────┐     ┌────────┐                  │
│  │All   │     │Proxy │     │Cache   │                  │
│  │Peers │     │Only  │     │(Late   │                  │
│  │      │     │      │     │Joiners)│                  │
│  └──────┘     └──────┘     └────────┘                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Common Patterns

### Combat Hit Effect

```
Trigger: On Hit Detected
└── Condition Branch:
    └── If Has State Authority:
        └── Action RPC
            ├── Target: All
            ├── Cache State: ❌
            └── Actions:
                ├── Play Hit Sound
                ├── Spawn Hit Particles
                └── Show Damage Number
```

### Player Emote

```
Trigger: On Emote Button
└── Action RPC
    ├── Target: All
    ├── Cache State: ❌
    └── Actions:
        └── Play Emote Animation
```

### Synchronized Cutscene

```
Trigger: On Boss Defeated (Host Only)
└── Condition Branch:
    └── If Is Host:
        └── Trigger RPC
            ├── Target: All
            └── Trigger: Victory Cutscene
```

### Equipment Change (Cached)

```
Trigger: On Equip Item
└── Action RPC
    ├── Target: All
    ├── Cache State: ✅
    └── Actions:
        └── Attach Prop: [Weapon]
```

### Chat Message

```
Trigger: On Chat Submit
└── Action RPC
    ├── Target: All
    ├── Cache State: ❌
    └── Actions:
        ├── Add Floating Text
        └── Play Chat Sound
```

---

## RPC vs Variables

Choose the right synchronization method:

| Scenario | Use |
|----------|-----|
| Continuous state (health, position) | Variables |
| One-time events (effects, sounds) | RPC |
| State that persists | Variables or Cached RPC |
| Frequent updates | Variables |
| Infrequent events | RPC |

---

## Best Practices

### Performance

- Minimize RPC frequency
- Use appropriate targets (avoid All when possible)
- Don't cache temporary effects

### Authority

- Validate important RPCs on authority
- Use StateAuthority target for server-side logic
- Check authority before sending sensitive RPCs

### Debugging

- Enable Fusion debug mode
- Check console for RPC logs
- Verify NetworkObject is present

---

## RPC Properties

Access RPC information via property getters:

| Property | Type | Description |
|----------|------|-------------|
| **RPC Sender** | String | Name of the player who sent last RPC |
| **RPC Sender** | GameObject | Reference to sender's player object |

### Example: Show Sender Name

```
Trigger: On Receive Chat Message
└── Instructions:
    └── Set Text: "{RPC Sender}: {Last Chat Message}"
```

---

## Troubleshooting

### RPC not executing

1. Verify NetworkObject is on target
2. Check RPC target matches intended receivers
3. Ensure sender has authority to send

### Cache not working

1. Verify Cache State is enabled
2. Check object isn't destroyed/respawned
3. Test with fresh join after caching

### Duplicate executions

1. Check RPC target isn't causing self-execution
2. Verify not calling RPC multiple times
3. Use conditions to filter execution

{% hint style="info" %}
RPCs are reliable by default in Fusion, but network conditions may cause slight delays.
{% endhint %}
