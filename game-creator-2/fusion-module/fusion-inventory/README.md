---
description: Network synchronization for Game Creator 2 Inventory module
---

# Fusion Inventory

## Overview

The **Fusion Inventory** submodule integrates Photon Fusion 2 with the Inventory module, enabling synchronized item management across the network.

{% hint style="warning" %}
**Coming Soon** - This submodule is currently in development.
{% endhint %}

---

## Planned Features

### Inventory Synchronization

| Feature | Description |
|---------|-------------|
| **Item Add/Remove** | Inventory changes sync across network |
| **Stack Management** | Item stacking synchronized |
| **Equipment Slots** | Equipped items visible to all |
| **Item Properties** | Custom item data sync |

### Container System

| Feature | Description |
|---------|-------------|
| **Shared Containers** | Chests/storage accessible by multiple players |
| **Loot Distribution** | Fair loot systems |
| **Trading** | Player-to-player item exchange |

### Visual Sync

| Feature | Description |
|---------|-------------|
| **Equipped Visuals** | Show equipped items on character |
| **Item Drops** | World item spawning |
| **Pickup Events** | Item collection effects |

---

## Expected Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Bag (Inventory module)
└── InventoryNetwork ← Expected component
```

---

## Expected Use Cases

### Loot-Based Games

- Synchronized item drops
- Server-validated pickups
- Anti-dupe protection

### Trading Systems

- Secure item trading
- Trade confirmation UI
- Transaction logging

### Shared Storage

- Guild/team storage
- Chest synchronization
- Access control

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Variables](../variables.md) - Variable-based item data
- [RPC](../remote-procedure-calls.md) - Trade/transfer RPCs
