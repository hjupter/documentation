---
description: Understanding Photon Fusion 2 network topologies
---

# Network Topologies

## Overview

Network topology defines how peers communicate in your multiplayer game. Choosing the right topology impacts latency, security, scalability, and development complexity.

---

## Topology Comparison

| Aspect | Shared | Host | Dedicated Server |
|--------|--------|------|------------------|
| **Architecture** | Peer-to-peer | Listen server | Client-server |
| **Authority** | Distributed | Centralized | Centralized |
| **Server Cost** | None | None | Required |
| **Security** | Low | Medium | High |
| **Latency** | Variable | Host advantage | Fair |
| **Max Players** | ~8-16 | ~8-16 | 100+ |

---

## Shared Mode (Peer-to-Peer)

### How It Works

```
┌──────────────────────────────────────────────────────────┐
│                    Photon Cloud                           │
│                   (Relay Server)                          │
└──────────────────────────────────────────────────────────┘
        ↑              ↑              ↑
        │              │              │
   ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
   │ Player A │    │ Player B │    │ Player C │
   │ (Owner)  │    │ (Owner)  │    │ (Owner)  │
   └──────────┘    └──────────┘    └──────────┘

   Each player owns their character
   Authority is distributed per-object
```

### Characteristics

| Property | Value |
|----------|-------|
| **State Authority** | Object owner |
| **Input Authority** | Object owner |
| **Spawning** | Any peer can spawn |
| **Object Ownership** | First spawner or requestor |

### Best For

- Co-operative games
- Casual multiplayer
- Prototype/testing
- Games without competitive concerns

### Setup

```
Instruction: Start Session
├── Game Mode: Shared
├── Session Name: "MyGame"
├── Max Players: 4
└── Scene: Game Scene
```

### Authority Pattern

```
Player A spawns character:
└── Both Input and State Authority: Player A

Player B spawns character:
└── Both Input and State Authority: Player B

Player A spawns world item:
└── State Authority: Player A (can transfer)
```

---

## Host Mode (Listen Server)

### How It Works

```
┌──────────────────────────────────────────────────────────┐
│                    Photon Cloud                           │
└──────────────────────────────────────────────────────────┘
                         ↑
                         │
                   ┌─────┴─────┐
                   │   Host    │ ← State Authority
                   │ (Player)  │   for everything
                   └─────┬─────┘
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │ Client A │   │ Client B │   │ Client C │
    │  (Input  │   │  (Input  │   │  (Input  │
    │   Only)  │   │   Only)  │   │   Only)  │
    └──────────┘   └──────────┘   └──────────┘
```

### Characteristics

| Property | Value |
|----------|-------|
| **State Authority** | Always Host |
| **Input Authority** | Respective client |
| **Spawning** | Typically Host only |
| **Validation** | Host validates all |

### Best For

- PvP games
- Competitive multiplayer
- Games requiring validation
- Medium-security needs

### Setup

```
Host Side:
Instruction: Start Session
├── Game Mode: Host
├── Session Name: "MyGame"
├── Max Players: 4
└── Scene: Game Scene

Client Side:
Instruction: Join Session
├── Session Name: "MyGame"
└── As Client: true
```

### Host Migration

When host leaves, a new host must be selected:

```
Event: On Host Left
└── Condition: Am I New Host?
    ├── Yes → Event: On State Authority Gained
    │         └── Take over host responsibilities
    └── No  → Wait for new host to initialize
```

---

## Server Mode (Dedicated)

### How It Works

```
┌──────────────────────────────────────────────────────────┐
│                  Dedicated Server                         │
│              (No local player)                            │
│           State Authority for ALL                         │
└──────────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │ Client A │   │ Client B │   │ Client C │
    │  (Input  │   │  (Input  │   │  (Input  │
    │   Only)  │   │   Only)  │   │   Only)  │
    └──────────┘   └──────────┘   └──────────┘

    All clients send input to server
    Server validates and broadcasts state
```

### Characteristics

| Property | Value |
|----------|-------|
| **State Authority** | Always Server |
| **Input Authority** | Respective client |
| **Spawning** | Server only |
| **Validation** | Full server authority |

### Best For

- Competitive/esports games
- Large player counts
- Anti-cheat critical games
- MMO-style games

### Deployment Options

| Platform | Description |
|----------|-------------|
| **Photon Bolt** | Managed server hosting |
| **AWS/GCP/Azure** | Self-hosted cloud |
| **Dedicated Hardware** | On-premise servers |
| **Photon Server** | Self-hosted Photon |

---

## Choosing a Topology

### Decision Flowchart

```
Is competitive/ranked gameplay?
├── Yes → Is anti-cheat critical?
│         ├── Yes → Dedicated Server
│         └── No  → Host Mode
└── No  → Is it cooperative?
          ├── Yes → Shared Mode
          └── No  → Host Mode
```

### Security Considerations

| Topology | Trust Level | Cheat Vulnerability |
|----------|-------------|---------------------|
| Shared | Clients trusted | High - clients modify state |
| Host | Host trusted | Medium - host can cheat |
| Server | Server only | Low - full validation |

### Latency Patterns

| Topology | Local Player | Remote Players |
|----------|--------------|----------------|
| Shared | Immediate | RTT/2 |
| Host | Host: Immediate | Clients: RTT |
| Server | All: RTT/2 | All: RTT/2 |

---

## Hybrid Approaches

### Shared with Validation

Use Shared mode but validate important actions:

```
Event: On Attack Request (Local)
└── Instruction: Action RPC (Target: All)
    └── Actions:
        └── Condition: Has State Authority (on target)
            ├── Yes → Validate and apply damage
            └── No  → Ignore (only authority applies)
```

### Host with Prediction

Enable client-side prediction for responsive feel:

```
Event: On Move Input (Local)
└── If Has Input Authority:
    ├── Apply predicted movement locally
    └── Send input to host for validation

Event: On State Update (Host)
└── Reconcile local prediction with authoritative state
```

---

## Migration Between Topologies

### Development to Production

| Phase | Recommended |
|-------|-------------|
| Prototype | Shared |
| Alpha Testing | Host |
| Beta Testing | Host or Server |
| Production | Based on game needs |

### Topology-Agnostic Code

Write code that works across topologies:

```
Event: On Damage Received
└── Condition: Has State Authority
    └── Apply Damage
        // Works in all modes:
        // - Shared: Object owner applies
        // - Host: Host applies
        // - Server: Server applies
```

---

## Performance Considerations

### Bandwidth

| Topology | Bandwidth Pattern |
|----------|-------------------|
| Shared | O(n²) peer connections |
| Host | O(n) to host |
| Server | O(n) to server |

### Tick Rate

| Setting | Shared | Host | Server |
|---------|--------|------|--------|
| Default | 60 Hz | 60 Hz | 60 Hz |
| Recommended | 30-60 Hz | 60 Hz | 60-128 Hz |

---

## Common Issues

### Shared Mode

| Issue | Solution |
|-------|----------|
| Authority conflicts | Use Request Authority properly |
| State divergence | Implement reconciliation |
| Late joiner sync | Use cached RPCs |

### Host Mode

| Issue | Solution |
|-------|----------|
| Host advantage | Accept or use dedicated |
| Host migration | Implement proper handlers |
| Single point of failure | Backup host selection |

### Server Mode

| Issue | Solution |
|-------|----------|
| Server cost | Optimize or use cheaper instances |
| Latency | Use regional servers |
| Complexity | Start simpler, scale up |

---

## Related Documentation

- [Game Modes Reference](../references/game-modes.md) - Mode details
- [Authority System](authority-system.md) - Authority concepts
- [Sessions](../sessions.md) - Session management
- [Setup](../setup.md) - Initial configuration
