---
description: Optimization tips for Fusion multiplayer games
---

# Performance Optimization

## Overview

Multiplayer games have unique performance challenges. This guide covers optimization strategies for network traffic, CPU usage, memory, and overall game performance.

---

## Network Bandwidth

### Reduce Sync Frequency

Not everything needs to sync every frame:

| Data Type | Recommended Rate |
|-----------|------------------|
| Position (fast objects) | Every tick |
| Position (slow objects) | Every 2-3 ticks |
| Rotation | Every 2-3 ticks |
| Stats/Health | On change only |
| Inventory | On change only |

### Use Change Detection

Only send data when it changes:

```
// NetworkCharacter uses ChangeDetector
// Only modified values are transmitted

[Networked] public int Health { get; set; }
// Network packet only includes Health when it changes
```

### Compress Position Data

| Technique | Bandwidth Savings |
|-----------|-------------------|
| Interest Management | 50-90% |
| Delta Compression | 30-50% |
| Quantization | 20-40% |
| Culling Distant Objects | Variable |

---

## RPC Optimization

### Batch Related Calls

```
❌ Inefficient (3 RPCs):
├── Action RPC: Play Sound
├── Action RPC: Spawn Particles
└── Action RPC: Apply Damage

✓ Efficient (1 RPC):
└── Action RPC: Complete Attack
    └── Actions:
        ├── Play Sound
        ├── Spawn Particles
        └── Apply Damage
```

### Use Appropriate Targets

| Target | Network Cost |
|--------|--------------|
| All | O(n) messages |
| Proxies | O(n-1) messages |
| StateAuthority | O(1) message |
| InputAuthority | O(1) message |

### Minimize RPC Frequency

```
❌ Bad: RPC every frame
Event: On Update
└── Action RPC: Sync Position

✓ Good: RPC on significant change
Event: On Attack Hit
└── Action RPC: Apply Damage
```

---

## Object Pooling

### Enable Pool Manager

```
Setup:
├── Create NetworkObjectPool object
├── Add Pool Manager component
├── Configure pool sizes
└── Enable in Fusion Settings
```

### Pool Configuration

| Object Type | Recommended Pool Size |
|-------------|----------------------|
| Player Characters | Max Players |
| Projectiles | 50-100 |
| Effects | 20-50 |
| Pickups | 10-30 |

### Pool Warmup

Pre-instantiate pools during loading:

```
Event: On Scene Loaded
└── Instructions:
    ├── Warmup Pool: Projectile (50)
    ├── Warmup Pool: HitEffect (20)
    └── Warmup Pool: Pickup (10)
```

---

## Memory Management

### Avoid Runtime Allocations

| Operation | Allocation | Alternative |
|-----------|------------|-------------|
| `new List<T>()` | Yes | Reuse lists |
| String concatenation | Yes | StringBuilder |
| LINQ queries | Often | Manual loops |
| Boxing/Unboxing | Yes | Generics |

### String Limits

| Variable Type | Limit | Memory |
|---------------|-------|--------|
| Name Variable String | 64 chars | ~128 bytes |
| List Variable String | 32 chars | ~64 bytes |

### NetworkDictionary/List Sizing

```
// Size appropriately to avoid resizing
[Networked, Capacity(32)]
public NetworkDictionary<PlayerRef, int> Scores { get; }
```

---

## CPU Optimization

### Authority-Based Processing

Only run logic where needed:

```
Event: On Update
└── Condition: Has State Authority
    └── AI Logic
        // Only authority runs AI
        // Proxies just display
```

### Tick-Based Updates

Not all logic needs every tick:

```
Event: On Fixed Update Network
└── Instructions:
    ├── Every Tick: Movement
    ├── Every 3 Ticks: Animation Sync
    └── Every 10 Ticks: State Broadcast
```

### Avoid Expensive Operations

| Operation | Cost | Alternative |
|-----------|------|-------------|
| Find by Tag | Medium | Cache references |
| GetComponent | Medium | Cache at start |
| Raycast every frame | High | Periodic or prediction |
| Complex physics | High | Simplified collision |

---

## Interest Management

### Area-Based Filtering

Only sync relevant objects:

```
Configuration:
├── Player Interest Radius: 50 units
├── Sync Priority by Distance:
│   ├── 0-10 units: Full rate
│   ├── 10-30 units: Half rate
│   └── 30-50 units: Quarter rate
└── Beyond 50 units: Culled
```

### Layer-Based Filtering

```
Sync Layers:
├── Essential: Always sync (players, objectives)
├── Important: Nearby only (NPCs, items)
└── Cosmetic: Very nearby (particles, decorations)
```

---

## Animation Optimization

### NetworkMecanimAnimator Settings

| Setting | Performance Impact |
|---------|-------------------|
| Sync All Parameters | High bandwidth |
| Sync Selected Only | Lower bandwidth |
| Sync Triggers | Unreliable, use bools |
| Compression | Enable for savings |

### Animation Culling

```
For Distant Characters:
├── Reduce animation quality
├── Skip blend tree transitions
└── Use simpler rigs
```

---

## Scene Management

### Additive Scene Loading

```
Structure:
├── Core Scene: Managers, Network
├── Level Scene: Geometry
├── Gameplay Scene: Spawners, Logic
└── UI Scene: Canvases
```

### Preload Networked Prefabs

```
Event: On Lobby Started
└── Preload Prefabs:
    ├── Player Character
    ├── Weapons
    └── Common Items
```

---

## Tick Rate Tuning

### Recommended Settings

| Game Type | Tick Rate |
|-----------|-----------|
| Turn-based | 10-20 Hz |
| Casual Action | 30 Hz |
| Shooter/Fighter | 60 Hz |
| Competitive FPS | 128 Hz |

### Trade-offs

| Tick Rate | CPU Cost | Precision | Bandwidth |
|-----------|----------|-----------|-----------|
| Lower | Less | Worse | Less |
| Higher | More | Better | More |

---

## Profiling Tools

### Unity Profiler

| Marker | What It Shows |
|--------|---------------|
| Fusion Simulation | Tick processing |
| Fusion Send | Outgoing packets |
| Fusion Receive | Incoming packets |
| NetworkObject Spawn | Object creation |

### Fusion Statistics

Enable in Fusion Settings:

```
Statistics:
├── Packet Count
├── Bandwidth In/Out
├── RTT (Round Trip Time)
├── Tick Delta
└── Object Count
```

### Debug Visualization

```
Event: On Debug Key
└── Show Debug Stats:
    ├── Player ping: {Local Player Ping}
    ├── Player count: {Player Count}
    └── Session: {Session Name}
```

---

## Platform-Specific Tips

### WebGL

| Issue | Solution |
|-------|----------|
| Memory limits | Reduce pool sizes |
| Threading | Avoid heavy sync operations |
| Bandwidth | Compress aggressively |

### Mobile

| Issue | Solution |
|-------|----------|
| Battery | Lower tick rate |
| Network | Handle disconnects |
| Memory | Aggressive pooling |

### Console

| Issue | Solution |
|-------|----------|
| Frame rate | Optimize consistently |
| Memory | Monitor allocations |
| Certification | Test edge cases |

---

## Performance Checklist

### Before Release

- [ ] Enable object pooling
- [ ] Profile network traffic
- [ ] Test with max players
- [ ] Test with high latency
- [ ] Optimize RPC frequency
- [ ] Verify memory stability
- [ ] Test scene transitions
- [ ] Profile CPU usage

### Ongoing Monitoring

- [ ] Track bandwidth per player
- [ ] Monitor tick execution time
- [ ] Log disconnection rates
- [ ] Watch memory trends
- [ ] Profile new features

---

## Common Issues

### Lag Spikes

| Cause | Solution |
|-------|----------|
| Too many RPCs | Batch and reduce |
| Large state sync | Use delta compression |
| GC allocations | Pool and reuse |
| Heavy tick logic | Profile and optimize |

### High Bandwidth

| Cause | Solution |
|-------|----------|
| Sync everything | Use change detection |
| High tick rate | Lower if acceptable |
| Large objects | Split or compress |
| No interest mgmt | Implement culling |

---

## Related Documentation

- [Troubleshooting](troubleshooting.md) - Performance issues
- [Settings](../settings.md) - Configuration options
- [Sessions](../sessions.md) - Tick rate settings
