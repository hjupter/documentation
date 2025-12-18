---
description: Network synchronization for Game Creator 2 Stats module
---

# Fusion Stats

## Overview

The **Fusion Stats** submodule integrates Photon Fusion 2 with the Stats module, ensuring all character trait data is synchronized across the network in real-time.

### Synchronized Data

| Data Type | Description |
|-----------|-------------|
| **Stats** | Base character statistics (Strength, Intelligence, etc.) |
| **Attributes** | Derived values (Health, Mana, Stamina) |
| **Status Effects** | Active buffs/debuffs with duration |
| **Modifiers** | Temporary or permanent stat modifications |

{% hint style="info" %}
This submodule requires both the **Fusion** module and the **Stats** module from Game Creator 2.
{% endhint %}

---

## Setup

### Prerequisites

| Requirement | Description |
|-------------|-------------|
| Fusion Module | Core networking module installed |
| Stats Module | [Stats 2](https://assetstore.unity.com/packages/tools/game-toolkits/stats-2-game-creator-2-232525) from Asset Store |

### Installation

1. Purchase the **Fusion Stats** sub-module from the Asset Store
2. Open **Window → Package Manager**
3. Search for "Fusion Stats" in your assets
4. Click **Download** and **Import**
5. Wait for Unity to compile

{% hint style="success" %}
This package adds one new network component: **TraitsNetwork**
{% endhint %}

---

## Traits Network Component

The TraitsNetwork component synchronizes all trait data for a character across the network.

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption><p>TraitsNetwork component</p></figcaption></figure>

### Adding to Character

1. Select your networked character prefab
2. Ensure it has:
   - **Character** component (GC2)
   - **NetworkCharacter** component
   - **Traits** component (Stats module)
3. Add **TraitsNetwork** component

### Component Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Traits (Stats module)
└── TraitsNetwork ← Add this
```

---

## Synchronized Features

### Stats Synchronization

Base stats are automatically synced when modified:

```
Trigger: On Level Up
└── Instructions:
    └── Change Stat: Strength +5
        // Automatically synced to all clients
```

### Attributes Synchronization

Attributes like Health and Mana sync in real-time:

```
Trigger: On Take Damage
└── Instructions:
    └── Change Attribute: Health -{Damage Amount}
        // All clients see health decrease
```

### Status Effects

Active effects are synchronized with their remaining duration:

```
Trigger: On Potion Used
└── Instructions:
    └── Apply Status Effect: Regeneration
        └── Duration: 30 seconds
        // Effect visible on all clients
```

### Modifiers

Temporary and permanent modifiers sync automatically:

```
Trigger: On Equip Weapon
└── Instructions:
    └── Add Modifier: +10 Attack
        // Modifier applied on all clients
```

---

## Authority Considerations

### Who Can Modify Stats?

| Mode | Who Modifies |
|------|--------------|
| Shared Mode | Input Authority (player) |
| Host Mode | State Authority (host) |
| Server Mode | State Authority (server) |

### Best Practice: Validate on Authority

```
Trigger: On Damage Received (RPC)
└── Condition Branch:
    └── If Has State Authority:
        └── Change Attribute: Health -{Damage}
```

---

## Common Patterns

### Damage System

```
Attacker (Has Input Authority):
└── Trigger: On Attack Hit
    └── Action RPC (Target: StateAuthority)
        └── Object: {Hit Target}
        └── Actions:
            └── Change Attribute: Health -{Damage}

Defender (State Authority processes):
└── Health change syncs to all clients
└── Death triggers if Health ≤ 0
```

### Buff Application

```
Trigger: On Buff Spell Cast
└── Condition Branch:
    └── If Has State Authority:
        └── Apply Status Effect: {Buff}
            └── Target: {Spell Target}
            └── Duration: {Buff Duration}
```

### Healing Over Time

```
Trigger: On Status Effect Tick (Regeneration)
└── Condition Branch:
    └── If Has State Authority:
        └── Change Attribute: Health +{Heal Per Tick}
```

---

## Performance Tips

### Optimize Sync Frequency

- Stats module handles delta compression
- Only changed values are transmitted
- Consider batching multiple changes

### Authority Validation

- Always validate on State Authority
- Prevent cheating by server-side checks
- Log suspicious stat modifications

---

## Troubleshooting

### Stats Not Syncing

1. Verify TraitsNetwork component is present
2. Check NetworkObject is on the prefab
3. Ensure Traits component is configured
4. Verify authority allows modification

### Status Effects Disappearing

1. Check effect duration is synced
2. Verify time synchronization
3. Test with longer durations

### Modifiers Not Applying on Clients

1. Check modifier is being applied on authority
2. Verify sync component is active
3. Test with debug logging enabled

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Variables](../variables.md) - Variable synchronization
- [Authority Guide](../guides/authority-system.md) - Understanding authority
