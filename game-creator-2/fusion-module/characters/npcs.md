---
description: Synchronizing non-player characters across the network
---

# NPCs (Non-Player Characters)

## Overview

NPCs in multiplayer games need synchronized behavior so all players see the same thing. The Fusion module supports NPC synchronization with proper authority handling for AI logic.

---

## How It Works

```
┌─────────────────────────────────────────────────────┐
│                   NPC Sync Model                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│   State Authority (Host/Server)                      │
│   ┌─────────────────────────┐                       │
│   │ Runs AI Logic           │                       │
│   │ Makes Decisions         │                       │
│   │ Updates Networked State │                       │
│   └───────────┬─────────────┘                       │
│               │                                      │
│               │ State synced                         │
│               ▼                                      │
│   ┌─────────────────────────┐                       │
│   │ All Clients (Proxies)   │                       │
│   │ Display synced state    │                       │
│   │ Play animations         │                       │
│   │ No AI logic             │                       │
│   └─────────────────────────┘                       │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## Setup

### NPC Prefab Configuration

```
NPC Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── NetworkMecanimAnimator
├── AI Brain/Behavior (GC2)
└── [Optional] Local Name Variables Network
```

### Add NetworkCharacter

1. Select your NPC prefab
2. Add **Network Character** component
3. Required components added automatically

---

## Authority Pattern

{% hint style="warning" %}
AI logic should **only** run on the State Authority to prevent desync.
{% endhint %}

### Basic Pattern

```
Trigger: On Update
└── Condition Branch:
    └── If Has State Authority:
        └── [Run AI Logic]
        └── [Make Decisions]
        └── [Update State]
```

### Complete AI Trigger

```
Trigger: On Perception Target Found
└── Condition Branch:
    └── If Has State Authority:
        └── Instructions:
            ├── Set Target: {Perceived Target}
            ├── Change State: Combat
            └── Navigate To: {Target Position}
```

---

## Authority by Game Mode

### Shared Mode

In Shared mode, NPCs can have distributed authority:

```
NPC Spawned by Player A:
├── State Authority: Player A
└── AI runs on: Player A's client

NPC Spawned by Player B:
├── State Authority: Player B
└── AI runs on: Player B's client

Scenario: Player A leaves
└── NPC authority transferred to another player
└── New authority continues AI
```

### Host Mode

In Host mode, the host controls all NPCs:

```
All NPCs:
├── State Authority: Host
├── AI runs on: Host only
└── Clients see: Synced results
```

### Server Mode

In Server mode, the dedicated server runs all AI:

```
All NPCs:
├── State Authority: Server
├── AI runs on: Server only
└── Clients see: Synced results
└── Best for: Consistent behavior
```

---

## Spawning NPCs

### Authority-Aware Spawning

```
Event: On Wave Start
└── Condition Branch:
    └── If Has State Authority:
        └── For Each: Spawn Point
            └── Spawn Network Object
                ├── Prefab: {Enemy Prefab}
                └── Position: {Spawn Point}
```

### Object Pooling

```
Event: On NPC Needed
└── Condition Branch:
    └── If Has State Authority:
        └── Get From Pool
            └── Prefab: {NPC Prefab}
```

---

## AI State Synchronization

### Using Networked Variables

```
NPC Variables (synced):
├── [Networked] AI State (Idle/Patrol/Combat)
├── [Networked] Target Ref
├── [Networked] Health
└── [Networked] Alert Level
```

### State Machine Integration

```
State Authority:
└── Trigger: On AI State Changed
    └── Set Networked Variable: AI State

All Clients:
└── Trigger: On Variable Changed (AI State)
    └── Update Visual State
        ├── Play state animation
        └── Update UI indicators
```

---

## Common NPC Types

### Patrol Enemy

```
State Authority Only:
├── Trigger: On Update
│   └── If Has State Authority:
│       └── If AI State == Patrol:
│           └── Navigate to next waypoint

├── Trigger: On Waypoint Reached
│   └── If Has State Authority:
│       └── Set next waypoint

├── Trigger: On Player Detected
│   └── If Has State Authority:
│       └── Change AI State: Combat
```

### Shopkeeper NPC

```
Any Client Can Interact:
├── Trigger: On Interact
│   └── Open Shop UI (local)

State Authority Processes:
├── Trigger: On Purchase Request (RPC)
│   └── If Has State Authority:
│       └── Validate and process purchase
```

### Boss Enemy

```
State Authority Only:
├── All combat logic
├── Phase transitions
├── Ability decisions
└── Target selection

All Clients See:
├── Synced position/rotation
├── Animation states
├── Visual effects (via RPC)
└── Health bar updates
```

---

## Combat Behavior

### Damage Dealing

```
State Authority:
└── Trigger: On NPC Attack Hit
    └── If Has State Authority:
        └── Action RPC (Target: StateAuthority of target)
            └── Apply Damage: {NPC Damage}
```

### Taking Damage

```
Any Client:
└── Trigger: On NPC Hit (local detection)
    └── Action RPC (Target: StateAuthority)
        └── Actions (on authority):
            └── If Has State Authority:
                └── Reduce NPC Health
                └── Check for death
```

### Death

```
State Authority:
└── Trigger: On Health Zero
    └── If Has State Authority:
        └── Instructions:
            ├── Set AI State: Dead
            ├── Action RPC (Target: All)
            │   └── Play Death Effects
            └── Despawn After Delay
```

---

## Performance Optimization

### AI LOD (Level of Detail)

```
Based on distance from any player:
├── Near (< 10m): Full AI
├── Medium (10-30m): Reduced updates
├── Far (> 30m): Minimal/frozen
└── Very Far: Consider despawn
```

### Tick-Based Updates

```
Not every AI needs every tick:

High Priority (every tick):
├── Combat enemies
└── Nearby NPCs

Low Priority (every 5 ticks):
├── Distant enemies
└── Ambient NPCs

Minimal (every 30 ticks):
├── Far away NPCs
└── Inactive entities
```

### Batch Processing

```
Instead of:
├── Each NPC updates individually

Consider:
├── NPC Manager processes all
├── Authority handles batches
└── Reduced per-frame overhead
```

---

## Authority Transfer

### When Host Leaves

```
Event: On State Authority Lost (Host Left)
└── New authority automatically assigned

Event: On State Authority Gained
└── If Was NPC Authority:
    └── Resume AI logic
```

### Handling Transfer

```
Event: On State Authority Gained
└── Instructions:
    ├── Initialize AI state from networked vars
    ├── Resume patrol/behavior
    └── Continue from current state

Event: On State Authority Lost
└── Instructions:
    ├── Stop AI processing
    └── Clear local predictions
```

---

## Troubleshooting

### NPCs behaving differently on clients

| Cause | Solution |
|-------|----------|
| AI running on all clients | Check authority before AI logic |
| State not synced | Use networked variables |
| Random not seeded | Use networked seed |

### NPCs not moving on remote clients

| Cause | Solution |
|-------|----------|
| Missing NetworkTransform | Add component |
| NavMesh not synced | Sync destination, not path |
| Transform updated locally | Use networked movement |

### Delayed NPC reactions

| Cause | Solution |
|-------|----------|
| Authority latency | Accept or use prediction |
| Heavy AI processing | Optimize AI logic |
| Too many NPCs | Reduce count or LOD |

---

## Best Practices

### Do

- Run AI only on State Authority
- Use networked variables for important state
- Pool NPCs for performance
- Implement AI LOD for many NPCs
- Test authority transfer scenarios

### Don't

- Run AI on all clients
- Use local random without sync
- Ignore authority in AI triggers
- Spawn without authority check
- Forget to handle host migration

---

## Related Documentation

- [Characters](README.md) - NetworkCharacter overview
- [Authority Guide](../guides/authority-system.md) - Authority in depth
- [Network Topologies](../guides/network-topologies.md) - Game modes
- [Performance](../guides/performance.md) - Optimization
- [Troubleshooting](../guides/troubleshooting.md) - Common issues
