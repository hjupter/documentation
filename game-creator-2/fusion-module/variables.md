---
description: Complete guide to synchronizing Game Creator 2 variables across the network
---

# Variables

## Overview

The Fusion module provides built-in components to synchronize Game Creator 2's **Name Variables** and **List Variables** across the network. These components handle both current state replication and late-joiner synchronization.

{% hint style="info" %}
All variable sync components require a **NetworkObject** component on the same GameObject or a parent.
{% endhint %}

{% hint style="success" %}
Variables are automatically replicated to newly joined players, ensuring consistent state across all clients.
{% endhint %}

---

## Variable Types

| Component | Scope | Description |
|-----------|-------|-------------|
| **Local Name Variables Network** | Per-Object | Sync variables on a specific character/object |
| **Global Name Variables Network** | Global | Sync variables shared across all players |
| **Local List Variables Network** | Per-Object | Sync lists on a specific character/object |
| **Global List Variables Network** | Global | Sync lists shared across all players |

---

## Local Name Variables

Synchronize per-character or per-object named variables (health, mana, custom stats).

### Setup

1. Select the GameObject with Local Name Variables
2. Add **Local Name Variables Network** component
3. Variables automatically sync

<figure><img src="../../.gitbook/assets/image (137).png" alt=""><figcaption><p>Local Name Variables Network component</p></figcaption></figure>

### Supported Types

| Type | Network Support |
|------|-----------------|
| Boolean | ✅ Full sync |
| Number | ✅ Full sync |
| String | ✅ Full sync (64 chars max) |
| Color | ✅ Full sync |
| Vector2 | ✅ Full sync |
| Vector3 | ✅ Full sync |
| GameObject | ⚠️ NetworkObject references only |
| Texture | ❌ Not supported |
| Sprite | ❌ Not supported |

### Example Use Case

```
Character Stats:
├── Health: 100 (Number)
├── MaxHealth: 100 (Number)
├── PlayerName: "Hero" (String)
└── IsReady: false (Boolean)
```

All changes automatically sync to other clients.

---

## Global Name Variables

Synchronize game-wide named variables (match time, game state, shared settings).

### Setup

1. Create a new GameObject in your scene
2. Add a **NetworkObject** component
3. Add **Global Name Variables Network** component
4. Select the Global Name Variables asset to synchronize

<figure><img src="../../.gitbook/assets/image (138).png" alt=""><figcaption><p>Global Name Variables Network component</p></figcaption></figure>

### Example Use Case

```
Game State Variables:
├── MatchTime: 300 (Number)
├── GamePhase: "Playing" (String)
├── WinningTeam: 0 (Number)
└── IsGameOver: false (Boolean)
```

{% hint style="warning" %}
Only one peer should modify global variables at a time. Use authority checks or designate the host as the modifier.
{% endhint %}

---

## Local List Variables

Synchronize per-character or per-object list data with multiple sync modes.

### Setup

1. Select the GameObject with Local List Variables
2. Add **Local List Variables Network** component
3. Select the **Sync Mode**

<figure><img src="../../.gitbook/assets/image (136).png" alt=""><figcaption><p>Local List Variables Network with Sync Data mode</p></figcaption></figure>

### Supported Types

| Type | Network Support |
|------|-----------------|
| Boolean | ✅ Full sync |
| Number | ✅ Full sync |
| String | ✅ Full sync |
| Vector3 | ✅ Full sync |
| NetworkPrefabRef | ✅ Full sync |
| GameObject | ⚠️ Limited (use NetworkPrefabRef) |

---

## Global List Variables

Synchronize game-wide list data with multiple sync modes.

### Setup

1. Create a new GameObject in your scene
2. Add a **NetworkObject** component
3. Add **Global List Variables Network** component
4. Select the Global List Variables asset and **Sync Mode**

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption><p>Global List Variables Network component</p></figcaption></figure>

---

## Sync Modes

List Variables components support four synchronization modes:

### Sync Data

Synchronizes the list contents as generic data.

**Use Cases:**
- Inventory items
- Quest progress
- Custom data structures

```
Trigger: On Item Pickup
└── Instructions:
    └── Add to List Variable
        └── [Item Data]
```

---

### Players List

Automatically maintains a list of all connected players.

**Features:**
- Auto-populates on join
- Auto-removes on leave
- Updates in real-time

**Use Cases:**
- Scoreboard
- Player selection UI
- Team management

```
UI Binding:
├── Total Players: {List Length}
└── For Each Player: Display Name + Score
```

---

### Attachments

Registers attachment prefabs for network synchronization.

**Setup:**
1. Set Sync Mode to **Attachments**
2. Add attachment prefabs to the list
3. Use standard GC2 Attach/Remove Prop instructions

**How It Works:**
1. Prefabs registered in the list can be attached
2. Attach Prop instruction triggers network sync
3. All clients see the attachment

{% hint style="success" %}
See [Characters > Attachments](characters.md#attachments) for detailed setup.
{% endhint %}

---

### Models

Registers character model prefabs for network synchronization.

**Setup:**
1. Set Sync Mode to **Models**
2. Add model prefabs (using Model Config type)
3. Use standard GC2 Change Model instruction

**How It Works:**
1. Model prefabs registered in the list
2. Change Model instruction triggers network sync
3. All clients see the model change

{% hint style="success" %}
See [Characters > Models](characters.md#models) for detailed setup.
{% endhint %}

---

## Variable Sync Architecture

```
┌─────────────────────────────────────────────────────────┐
│                Variable Sync Flow                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   Client A (Has Authority)                               │
│        │                                                 │
│        ▼                                                 │
│   ┌─────────────────┐                                   │
│   │ Change Variable │                                   │
│   └────────┬────────┘                                   │
│            │                                             │
│            ▼                                             │
│   ┌─────────────────┐     ┌─────────────────┐          │
│   │  Network Sync   │────▶│   Client B      │          │
│   │   Component     │     │  (Receives)     │          │
│   └────────┬────────┘     └─────────────────┘          │
│            │                                             │
│            ▼                                             │
│   ┌─────────────────┐     ┌─────────────────┐          │
│   │  Late Joiner    │────▶│   Client C      │          │
│   │   Replication   │     │  (Joins Later)  │          │
│   └─────────────────┘     └─────────────────┘          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Best Practices

### Performance

- Minimize variable count per object
- Use appropriate types (numbers vs strings)
- Consider update frequency

### Authority

- Designate who modifies global variables
- Use state authority for local variables
- Handle conflicts gracefully

### String Limits

| Variable Type | Max Length |
|---------------|------------|
| Name Variable String | 64 characters |
| List Variable String | 32 characters |

{% hint style="warning" %}
Strings exceeding the limit are truncated. Plan your data structures accordingly.
{% endhint %}

---

## Common Patterns

### Player Stats Sync

```
Character Setup:
├── Local Name Variables (on character)
│   ├── Health: 100
│   ├── Mana: 50
│   └── Score: 0
└── Local Name Variables Network (sync component)
```

### Game State Sync

```
Game Manager Setup:
├── NetworkObject
├── Global Name Variables Network
│   └── Syncs: GameStateVariables
└── GameStateVariables Asset:
    ├── Phase: "Lobby"
    ├── TimeRemaining: 0
    └── WinConditionMet: false
```

### Team Roster

```
Team Manager Setup:
├── NetworkObject
├── Global List Variables Network
│   ├── Sync Mode: Players List
│   └── Syncs: TeamRoster
└── UI binds to TeamRoster for display
```

### Character Selection

```
Lobby Setup:
├── Global List Variables Network
│   ├── Sync Mode: Models
│   └── Contains: [All Character Model Configs]
└── Selection UI reads from list
```

---

## Troubleshooting

### Variables not syncing

1. Verify NetworkObject is present
2. Check network component is on same GameObject
3. Ensure variable type is supported

### Late joiners missing data

1. Verify sync component is spawned before players
2. Check NetworkObject spawn order
3. Test with fresh join after data is set

### String truncation

1. Check string length limits
2. Use shorter identifiers
3. Consider using numbers/enums instead

{% hint style="info" %}
Enable Debug mode in Fusion settings to see variable sync in the console.
{% endhint %}
