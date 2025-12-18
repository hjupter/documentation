---
description: Network synchronization for Game Creator 2 Melee module
---

# Fusion Melee

## Overview

The **Fusion Melee** submodule integrates Photon Fusion 2 with the Melee module, enabling synchronized combat across the network.

{% hint style="warning" %}
**Coming Soon** - This submodule is currently in development.
{% endhint %}

---

## Planned Features

### Combat State Synchronization

| Feature | Description |
|---------|-------------|
| **Attack Sync** | Melee attacks synchronized across clients |
| **Block/Parry** | Defensive actions visible to all players |
| **Hit Detection** | Server-authoritative hit registration |
| **Combo System** | Combo chains synced in real-time |

### Character States

| State | Sync Behavior |
|-------|---------------|
| **Is Blocking** | Real-time sync |
| **Is Attacking** | With animation events |
| **Is Invincible** | Invincibility frames |
| **Poise/Stagger** | Stagger state sync |

---

## Expected Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── MeleeWeapon (Melee module)
└── MeleeNetwork ← Expected component
```

---

## Expected Use Cases

### PvP Combat

- Synchronized weapon attacks
- Server-validated damage
- Hit confirmation across clients

### Co-op Combat

- Coordinated attacks on enemies
- Shared combo counters
- Team-based combat mechanics

### Action RPG

- Boss fights with multiple players
- Synchronized dodge/roll mechanics
- Weapon switching across network

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Fusion Stats](../fusion-stats/) - Stats integration for damage
- [RPC](../remote-procedure-calls.md) - Combat effect RPCs
