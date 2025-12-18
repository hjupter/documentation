---
description: Network synchronization for Game Creator 2 Shooter module
---

# Fusion Shooter

## Overview

The **Fusion Shooter** submodule integrates Photon Fusion 2 with the Shooter module, enabling synchronized ranged combat across the network.

{% hint style="warning" %}
**Coming Soon** - This submodule is currently in development.
{% endhint %}

---

## Planned Features

### Weapon Synchronization

| Feature | Description |
|---------|-------------|
| **Aim Direction** | Real-time aim sync across clients |
| **Fire Events** | Shot firing synchronized |
| **Reload State** | Reload animations and ammo sync |
| **Weapon Switching** | Weapon changes visible to all |

### Projectile System

| Feature | Description |
|---------|-------------|
| **Projectile Spawning** | Network-spawned projectiles |
| **Hit Registration** | Server-authoritative hits |
| **Bullet Drop** | Synchronized ballistics |
| **Tracer Effects** | Visual effects for all clients |

### Combat States

| State | Sync Behavior |
|-------|---------------|
| **Is Aiming** | ADS state sync |
| **Is Firing** | With muzzle flash/sound |
| **Is Reloading** | Animation sync |
| **Ammo Count** | Remaining ammo |

---

## Expected Setup

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── ShooterWeapon (Shooter module)
└── ShooterNetwork ← Expected component
```

---

## Expected Use Cases

### FPS/TPS Multiplayer

- Competitive shooter gameplay
- Server-validated hit detection
- Anti-cheat friendly design

### Co-op Survival

- Team-based shooting
- Shared ammo/resources
- Coordinated target engagement

### Battle Royale

- Large-scale gunfights
- Efficient projectile networking
- Spectator-friendly visuals

---

## Related Documentation

- [Characters](../characters.md) - NetworkCharacter setup
- [Fusion Stats](../fusion-stats/) - Stats integration for damage
- [Variables](../variables.md) - Ammo synchronization
