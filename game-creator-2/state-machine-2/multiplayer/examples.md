---
description: Practical multiplayer state machine examples
---

# Examples

Real-world examples of networked state machines.

## Networked Door

A door that any player can interact with, synced across all clients:

```
Trigger: On Interact [Run on Owner]
└─ Action: Toggle Door State [RPC to All]
    ├─ True → Action: Open Door Animation [Run on All]
    └─ False → Action: Close Door Animation [Run on All]
```

### How It Works

1. Only the interacting player's client detects the interaction
2. The toggle state is sent to all clients via RPC
3. All clients play the appropriate animation

## Synced Health Pickup

A pickup that only the server validates, preventing cheating:

```
Trigger: On Trigger Enter [Run on Master]
└─ Condition: Is Player? [Run on Master]
    └─ True → Actions [RPC to All]:
        ├─ Add Health
        ├─ Play Sound
        └─ Destroy Pickup
```

### How It Works

1. Only the server checks for collisions
2. Server validates it's a player
3. Server sends RPC to give health and destroy pickup
4. All clients see the same result

## Multiplayer Chest

A chest that can only be opened once, with loot visible to all:

```
Trigger: On Interact [Run on Owner]
└─ Condition: Chest Not Open [Run on Master]
    └─ True → Actions [RPC to All]:
        ├─ Set Chest Open = True
        ├─ Play Open Animation
        └─ Spawn Loot
```

### How It Works

1. Any player can interact
2. Server checks if already opened (prevents race condition)
3. State change and effects sync to all clients

## Player Ability

A player ability with local effects and networked damage:

```
Trigger: On Ability Key [Run on Owner]
└─ Actions [Run on Owner]:
    ├─ Play Local VFX
    ├─ Play Local Sound
    └─ Action: Deal Damage [RPC to All]
        └─ Trigger: On Hit [Run on All]
            └─ Action: Play Hit Effect [Run on All]
```

### How It Works

1. Only the casting player sees their own VFX/sound
2. Damage is synced to all clients
3. All clients see the hit effect on the target

## Game Manager

A server-authoritative game flow controller:

```
Start Node [Run on Master]
└─ Branch: Enough Players? [Run on Master]
    ├─ True → Action: Start Match [RPC to All]
    │          └─ Trigger: On Match End [Run on Master]
    │              └─ Action: Show Results [RPC to All]
    └─ False → Trigger: On Player Join [Run on Master]
               └─ Loop back to Branch
```

### How It Works

1. Server controls all game flow decisions
2. State changes are broadcast to all clients
3. Clients update their UI based on RPCs received

