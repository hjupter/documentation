---
description: Network synchronization for Game Creator 2 Abilities module
---

# Fusion Abilities

## Overview

The **Fusion Abilities** submodule integrates Photon Fusion 2 with the Abilities module, enabling synchronized skill and ability usage across the network.

{% hint style="warning" %}
**Coming Soon** - This submodule is currently in development.
{% endhint %}

---

## Planned Features

### Ability Synchronization

| Feature | Description |
|---------|-------------|
| **Ability Casting** | Cast events synced across clients |
| **Cooldowns** | Shared cooldown timers |
| **Resource Costs** | Mana/energy consumption sync |
| **Targeting** | Target selection visible to all |

### Effect System

| Feature | Description |
|---------|-------------|
| **Area Effects** | AOE abilities affect all clients |
| **Projectile Abilities** | Networked ability projectiles |
| **Buff/Debuff** | Status effects synchronized |
| **Channeling** | Channel state sync |

### Visual Effects

| Feature | Description |
|---------|-------------|
| **Cast Animations** | Animation sync during cast |
| **VFX Spawning** | Effect particles on all clients |
| **Audio** | Ability sounds synchronized |

---

## Expected Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Abilities (Abilities module)
└── AbilitiesNetwork ← Expected component
```

---

## Expected Use Cases

### MOBA/Action RPG

- Synchronized ability usage
- Server-validated effects
- Cooldown management

### MMO Combat

- Large-scale ability battles
- Efficient effect networking
- Target synchronization

### Co-op Magic System

- Coordinated spell casting
- Combo abilities
- Team buffs/heals

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Fusion Stats](../fusion-stats/) - Stats for ability costs
- [RPC](../remote-procedure-calls.md) - Ability trigger RPCs
