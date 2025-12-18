---
description: Network topology options for Photon Fusion 2
---

# Game Modes

## Overview

Game Modes define the network topology and authority model for your multiplayer session. Each mode has different characteristics suitable for different game types.

---

## Mode Reference

### Shared Mode

| Property | Value |
|----------|-------|
| **Topology** | Peer-to-peer mesh |
| **Authority** | Distributed (per-object) |
| **Host Required** | No |
| **Best For** | Co-op, casual games |

**Description**: All clients connect to Photon Cloud. Each client can own objects and has authority over them. No single point of failure.

**Advantages**:
- No dedicated server needed
- Lower latency for local interactions
- Easy to set up

**Disadvantages**:
- Less secure (clients trusted)
- Complex for competitive games
- Authority conflicts possible

---

### Host Mode

| Property | Value |
|----------|-------|
| **Topology** | Listen server |
| **Authority** | Centralized (host) |
| **Host Required** | Yes (player acts as host) |
| **Best For** | PvP, competitive games |

**Description**: One player acts as the server (host) while also playing. All game logic runs on host, other clients are connected to the host.

**Advantages**:
- Server-authoritative
- Better cheat prevention
- Consistent game state

**Disadvantages**:
- Host advantage (lower latency)
- Host migration complexity
- Session ends if host leaves

---

### Server Mode

| Property | Value |
|----------|-------|
| **Topology** | Dedicated server |
| **Authority** | Centralized (server) |
| **Host Required** | Dedicated server |
| **Best For** | Competitive, esports |

**Description**: A dedicated server runs the game simulation with no local player. All clients connect to this server.

**Advantages**:
- Most secure
- Fair latency for all players
- No host advantage

**Disadvantages**:
- Requires server infrastructure
- Higher operational cost
- More complex deployment

---

### Client Mode

| Property | Value |
|----------|-------|
| **Topology** | Client only |
| **Authority** | None (remote) |
| **Host Required** | Connects to existing |
| **Best For** | Joining existing sessions |

**Description**: Connects to an existing Host or Server session. Cannot start sessions, only join them.

**Use Cases**:
- Joining friend's game
- Matchmaking results
- Reconnection scenarios

---

### Single Mode

| Property | Value |
|----------|-------|
| **Topology** | Offline |
| **Authority** | Local |
| **Host Required** | No |
| **Best For** | Testing, offline play |

**Description**: Runs the network simulation locally without any network connection. Useful for testing and single-player modes.

**Use Cases**:
- Development testing
- Tutorial/training modes
- Offline fallback

---

### AutoHostOrClient

| Property | Value |
|----------|-------|
| **Topology** | Automatic |
| **Authority** | Varies |
| **Host Required** | Determined at runtime |
| **Best For** | Quick play, matchmaking |

**Description**: Automatically determines whether to create (Host) or join (Client) based on session availability. If session exists, joins as Client. If not, creates as Host.

**Behavior**:
```
Session Exists?
├── Yes → Join as Client
└── No  → Create as Host
```

---

## Mode Selection Guide

| Game Type | Recommended Mode |
|-----------|------------------|
| Co-op PvE | Shared |
| Casual PvP | Host |
| Competitive PvP | Server |
| Quick Match | AutoHostOrClient |
| Testing | Single |

---

## Visual Scripting Usage

### Start Session with Mode

```
Instruction: Start Session
├── Session Name: "MyGame"
├── Game Mode: [Select Mode]
├── Max Players: 4
└── Scene: Game Scene
```

### Check Current Mode

```
Condition: Game Mode Is
├── Target: Game Mode
└── Compare: Shared / Host / Server
```

---

## Mode Comparison

| Feature | Shared | Host | Server |
|---------|--------|------|--------|
| Authority | Distributed | Host | Server |
| Security | Low | Medium | High |
| Setup | Easy | Easy | Complex |
| Latency | Variable | Host favored | Consistent |
| Cost | Low | Low | Higher |
| Scalability | Limited | Limited | High |

---

## Related Documentation

- [Sessions](../sessions.md) - Session creation and management
- [Authority Types](authority-types.md) - Input vs State authority
- [Setup](../setup.md) - Initial configuration

