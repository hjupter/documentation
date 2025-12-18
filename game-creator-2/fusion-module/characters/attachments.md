---
description: Synchronizing character attachments across the network
---

# Attachments

## Overview

Attachments allow you to synchronize character equipment (weapons, gear, cosmetics) across all connected clients. When a player equips a sword or puts on a hat, all other players see the change instantly.

---

## How It Works

```
┌─────────────────────────────────────────────────────┐
│                 Attachment Sync Flow                 │
├─────────────────────────────────────────────────────┤
│                                                      │
│   Player A equips sword                              │
│        │                                             │
│        ▼                                             │
│   ┌─────────────────────┐                           │
│   │ LocalListVariables  │                           │
│   │ Network (Attachments)│                          │
│   └──────────┬──────────┘                           │
│              │                                       │
│              │ Sync to network                       │
│              ▼                                       │
│   ┌─────────────────────┐                           │
│   │ All Clients         │                           │
│   │ See sword attached  │                           │
│   └─────────────────────┘                           │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## Setup

### Step 1: Create Attachment List

1. Create a **Local List Variables** asset for attachments
2. Add your attachment prefabs (weapons, gear, etc.)

### Step 2: Add Network Component

1. Add **Local List Variables Network** to your character
2. Assign the attachment list variable
3. Set **Sync Mode** to **Attachments**

<figure><img src="../../../.gitbook/assets/image (130).png" alt=""><figcaption><p>Attachments sync mode configuration</p></figcaption></figure>

### Step 3: Configure Prefab

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Local List Variables (Attachments)
└── Local List Variables Network
    └── Sync Mode: Attachments ✓
```

---

## Usage

### Attaching Items

Use the standard **Attach Prop** instruction:

```
Event: On Equip Weapon
└── Instructions:
    └── Attach Prop
        ├── Character: {Self}
        ├── Prop: {Weapon Prefab}
        └── Bone: RightHand
```

<figure><img src="../../../.gitbook/assets/image (131).png" alt=""><figcaption><p>Using Attach Prop instruction</p></figcaption></figure>

### Removing Items

Use the **Remove Prop** instruction:

```
Event: On Unequip Weapon
└── Instructions:
    └── Remove Prop
        ├── Character: {Self}
        └── Prop: {Weapon Prefab}
```

### Checking Attachments

Use the **Has Prop Attached** condition:

```
Event: On Attack Input
└── Condition: Has Prop Attached
    └── Prop: {Sword Prefab}
        ├── True → Perform Sword Attack
        └── False → Perform Unarmed Attack
```

---

## Registration Requirements

{% hint style="warning" %}
Only attachments registered in the list variable will sync. Unregistered attachments are local-only.
{% endhint %}

### Registering Attachments

| Method | When to Use |
|--------|-------------|
| **Editor List** | Static equipment (always needed) |
| **Runtime Add** | Dynamic equipment (DLC, unlocks) |

### Dynamic Registration

```
Event: On Game Start
└── Instructions:
    └── Add to List Variable
        ├── List: Attachments
        └── Value: {New Weapon Prefab}
```

---

## Bone Mapping

Attachments use bone names for positioning:

### Common Bones

| Bone Name | Typical Use |
|-----------|-------------|
| `RightHand` | Weapons, tools |
| `LeftHand` | Shields, off-hand |
| `Head` | Helmets, hats |
| `Spine` | Backpacks, cloaks |
| `RightFoot` | Boots, accessories |

### Cross-Rig Compatibility

{% hint style="success" %}
Attachment sync works with different character rigs as long as bone names match.
{% endhint %}

For rigs with different bone names:

```
Options:
├── Rename bones to match
├── Use bone remapping component
└── Create attachment points with consistent names
```

---

## Multiple Attachment Slots

### Weapon Slots Example

```
Attachments List:
├── Slot 0: Primary Weapon
├── Slot 1: Secondary Weapon
├── Slot 2: Shield
└── Slot 3: Tool

Event: On Switch Weapon
└── Instructions:
    ├── Remove Prop: {Current Weapon}
    └── Attach Prop: {Selected Weapon}
```

### Gear Slots Example

```
Attachments List:
├── Helmet Slot
├── Chest Armor Slot
├── Gloves Slot
├── Boots Slot
└── Cape Slot
```

---

## Performance Considerations

### Optimization Tips

| Tip | Reason |
|-----|--------|
| Limit registered attachments | Each takes sync bandwidth |
| Use LODs on attachments | Reduce rendering cost |
| Pool frequently used items | Reduce spawn overhead |

### Recommended Limits

| Category | Suggested Max |
|----------|---------------|
| Total registered | 20-30 items |
| Simultaneous equipped | 5-8 items |
| Unique per character | Based on game |

---

## Common Patterns

### Equipment System

```
Event: On Item Equipped (from Inventory)
└── Condition: Has State Authority
    └── Instructions:
        ├── Remove Current Attachment: {Slot}
        └── Attach New Item: {Item Prefab}
            └── Bone: {Item Slot Bone}
```

### Visual-Only Attachments

For cosmetics that don't affect gameplay:

```
Event: On Cosmetic Changed
└── Instructions:
    └── Attach Prop
        ├── Character: {Self}
        ├── Prop: {Cosmetic Prefab}
        └── Bone: {Cosmetic Bone}
```

### Attachment Effects

Trigger effects when attaching:

```
Event: On Prop Attached
└── Instructions:
    ├── Play Sound: Equip
    └── Spawn Particles: Equip Effect
```

---

## Troubleshooting

### Attachments not syncing

1. Verify attachment is in the list variable
2. Check sync mode is set to "Attachments"
3. Ensure NetworkObject is on character
4. Verify authority allows attachment

### Wrong bone position

1. Check bone name matches exactly (case-sensitive)
2. Verify bone exists on all character models
3. Test with Debug mode to see bone hierarchy

### Missing attachments on remote clients

1. Verify prefab is registered as network prefab
2. Check attachment list is synced
3. Ensure attachment prefab has NetworkObject

---

## Related Documentation

- [Characters](README.md) - NetworkCharacter overview
- [Models](models.md) - Character model sync
- [Variables](../variables.md) - List variables
- [Troubleshooting](../guides/troubleshooting.md) - Common issues
