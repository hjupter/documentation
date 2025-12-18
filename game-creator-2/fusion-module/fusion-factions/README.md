---
description: Network synchronization for Game Creator 2 Factions module
---

# Fusion Factions

## Overview

The **Fusion Factions** submodule integrates Photon Fusion 2 with the Factions module, ensuring all faction-related data is synchronized across the network.

### Synchronized Data

| Data Type | Description |
|-----------|-------------|
| **Member Faction Points** | Reputation/standing with each faction |
| **Joined Factions** | Which factions a member belongs to |
| **Relationships** | Faction-to-faction relationships |
| **Faction Variables** | Custom data stored on factions |

{% hint style="info" %}
This submodule requires both the **Fusion** module and the **Factions** module from Game Creator 2.
{% endhint %}

---

## Setup

### Prerequisites

| Requirement | Description |
|-------------|-------------|
| Fusion Module | Core networking module installed |
| Factions Module | [Factions](https://assetstore.unity.com/packages/tools/game-toolkits/factions-game-creator-2-232074) from Asset Store |

### Installation

1. Purchase the **Fusion Factions** sub-module from the Asset Store
2. Open **Window → Package Manager**
3. Search for "Fusion Factions" in your assets
4. Click **Download** and **Import**
5. Wait for Unity to compile

{% hint style="success" %}
This package adds two new network components: **MemberNetwork** and **FactionNetwork**
{% endhint %}

---

## Components

### Member Network

Synchronizes individual member data across the network.

<div align="left">
<figure><img src="../../../.gitbook/assets/image (121).png" alt="" width="375"><figcaption><p>MemberNetwork component</p></figcaption></figure>
</div>

#### Synchronized Data

| Data | Description |
|------|-------------|
| **Faction Points** | Reputation with each faction |
| **Joined Factions** | Current faction memberships |

#### Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Member (Factions module)
└── MemberNetwork ← Add this
```

### Faction Network

Synchronizes faction-level data across the network.

<div align="left">
<figure><img src="../../../.gitbook/assets/image (122).png" alt=""><figcaption><p>FactionNetwork component</p></figcaption></figure>
</div>

#### Synchronized Data

| Data | Description |
|------|-------------|
| **Relationships** | How factions view each other |
| **Variables** | Custom faction data |

#### Setup

```
Faction Manager:
├── NetworkObject
├── FactionNetwork ← Add this
└── [Faction References]
```

---

## Use Cases

### MMO Guild System

```
Player joins guild:
├── MemberNetwork syncs: Player joined "Warriors Guild"
├── All clients see guild membership
└── Late joiners receive correct state

Guild relationship changes:
├── FactionNetwork syncs: "Warriors Guild" now Allied with "Mages Guild"
└── All players see updated relationships
```

### PvP Faction Warfare

```
Player gains reputation:
├── MemberNetwork syncs: +100 points with "Red Team"
├── Enemy faction relationship updates
└── All clients see faction standing
```

### NPC Faction Awareness

```
NPC checks player faction:
├── Read synced faction data
├── React based on relationship
└── Consistent behavior across all clients
```

---

## Common Patterns

### Joining a Faction

```
Trigger: On Join Faction Button
└── Condition Branch:
    └── If Has State Authority:
        └── Instructions:
            └── Join Faction
                └── Member: {Local Player}
                └── Faction: {Selected Faction}
```

### Checking Faction Relationship

```
Trigger: On NPC Interaction
└── Condition Branch:
    └── If Faction Relationship Is Hostile:
        └── [Start Combat]
    └── Else:
        └── [Start Dialog]
```

### Gaining Reputation

```
Trigger: On Quest Complete
└── Condition Branch:
    └── If Has State Authority:
        └── Instructions:
            └── Change Faction Points
                └── Member: {Local Player}
                └── Faction: {Quest Giver Faction}
                └── Amount: +50
```

### Dynamic Faction Relationships

```
Trigger: On War Declaration (Host Only)
└── Condition Branch:
    └── If Is Host:
        └── Instructions:
            └── Set Faction Relationship
                └── Faction A: {Declaring Faction}
                └── Faction B: {Target Faction}
                └── Relationship: Hostile
```

---

## Authority Considerations

### Member Data

| Scenario | Who Has Authority |
|----------|-------------------|
| Player's own faction data | That player (Input Authority) |
| NPC faction data | Host/Server (State Authority) |

### Faction Data

| Scenario | Who Has Authority |
|----------|-------------------|
| Faction relationships | Host/Server only |
| Faction variables | Host/Server only |

{% hint style="warning" %}
Faction-level changes should only be made by the host or server to prevent conflicts.
{% endhint %}

---

## Best Practices

### Design for Consistency

- Initialize factions before players join
- Handle late joiner synchronization
- Test faction changes with multiple clients

### Authority Patterns

```
Player-owned data (reputation):
└── Player has authority over their own data
└── Changes sync to all clients

World-level data (faction relationships):
└── Host/Server has authority
└── Clients receive updates
```

### Conflict Resolution

- Use authoritative source for disputed data
- Implement server validation for important changes
- Log faction changes for debugging

---

## Troubleshooting

### Faction Points Not Syncing

1. Verify MemberNetwork is on the character
2. Check NetworkObject is present
3. Ensure Member component is configured
4. Verify authority before making changes

### Relationships Not Updating

1. Verify FactionNetwork is in scene
2. Check it has a NetworkObject
3. Ensure changes made on authority
4. Test with debug logging

### Late Joiners Have Wrong Data

1. Verify sync components spawn early
2. Check object spawn order
3. Test with fresh joins after changes

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Variables](../variables.md) - Variable synchronization
- [Authority Guide](../guides/authority-system.md) - Understanding authority
