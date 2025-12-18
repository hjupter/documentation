---
description: Input and State authority reference for Photon Fusion 2
---

# Authority Types

## Overview

Authority determines which client has control over a networked object. Fusion 2 uses two authority types that work together to enable responsive, server-authoritative gameplay.

---

## Authority Types

### Input Authority

| Property | Description |
|----------|-------------|
| **Definition** | Controls input for an object |
| **Granted To** | Local client controlling the object |
| **Purpose** | Enables client-side prediction |
| **Persistence** | Usually matches player ownership |

**Responsibilities**:
- Capture and send input
- Predict local movement
- Request actions
- Provide responsive feel

---

### State Authority

| Property | Description |
|----------|-------------|
| **Definition** | Controls networked state |
| **Granted To** | Server/Host or owner (in Shared) |
| **Purpose** | Authoritative state changes |
| **Persistence** | Depends on game mode |

**Responsibilities**:
- Modify `[Networked]` properties
- Validate gameplay actions
- Resolve conflicts
- Broadcast state to clients

---

### Proxy

| Property | Description |
|----------|-------------|
| **Definition** | No authority over object |
| **Granted To** | All other clients |
| **Purpose** | Display replicated state |
| **Persistence** | Automatic |

**Responsibilities**:
- Receive state updates
- Interpolate movement
- Display visual effects
- No direct control

---

## Authority by Game Mode

### Shared Mode

```
Player A's Character:
├── Input Authority: Player A
└── State Authority: Player A (owner)

World Object (spawned by Player A):
├── Input Authority: Player A
└── State Authority: Player A

World Object (spawned by Player B):
├── Input Authority: Player B
└── State Authority: Player B
```

### Host Mode

```
Player (Host):
├── Input Authority: Host
└── State Authority: Host

Player (Client):
├── Input Authority: Client
└── State Authority: Host ← Host controls state

All World Objects:
├── Input Authority: Varies
└── State Authority: Host
```

### Server Mode

```
All Players:
├── Input Authority: Respective Client
└── State Authority: Server

All World Objects:
├── Input Authority: None or Server
└── State Authority: Server
```

---

## Visual Scripting Reference

### Check Authority

| Condition | Description |
|-----------|-------------|
| `Has Input Authority` | True if local client has input authority |
| `Has State Authority` | True if local client has state authority |
| `Is Proxy` | True if neither authority is held |

### Example Patterns

**Input Authority Check**:
```
Event: On Update
└── Condition: Has Input Authority
    └── Instruction: Process Local Input
```

**State Authority Check**:
```
Event: On Damage Received
└── Condition: Has State Authority
    └── Instruction: Apply Damage (authoritative)
```

---

## Authority Transfer

### Request Authority

Used in Shared Mode to take control of unowned objects.

```
Instruction: Request Authority
├── Target: [GameObject]
└── Wait for response
```

### Release Authority

```
Instruction: Release Authority
└── Target: [GameObject]
```

---

## Common Patterns

### Predicted Movement (FPS/TPS)

```
Input Authority Client:
├── Captures input locally
├── Predicts movement immediately
└── Sends input to State Authority

State Authority:
├── Receives input
├── Validates and simulates
└── Broadcasts authoritative state

Proxies:
└── Interpolate received state
```

### Server-Authoritative Action

```
Input Authority Client:
├── Sends action request (RPC or input)
└── Shows predicted feedback

State Authority:
├── Validates request
├── Executes if valid
├── Updates networked state
└── (optional) Confirms via RPC

All Clients:
└── Receive state update
```

---

## Authority Decision Table

| Scenario | Input Auth | State Auth |
|----------|------------|------------|
| Local player character | Local | Varies by mode |
| Remote player character | Remote | Remote/Host |
| NPC (Shared) | Spawner | Spawner |
| NPC (Host/Server) | Host/Server | Host/Server |
| Pickup item | None | Server/Host |
| Projectile | Shooter | Shooter or Host |

---

## Best Practices

### Do

- Always check authority before modifying `[Networked]` properties
- Use Input Authority for responsive local actions
- Validate important actions on State Authority
- Handle authority transfer gracefully

### Don't

- Modify networked state without State Authority
- Assume authority is static (it can transfer)
- Ignore proxy state (updates still received)
- Skip authority checks "for simplicity"

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Changes not syncing | No State Authority | Check authority before modify |
| Rubber-banding | Authority mismatch | Verify correct authority flow |
| Input not working | No Input Authority | Check ownership/authority |
| Proxy not updating | Missing NetworkObject | Add NetworkObject component |

---

## Related Documentation

- [Game Modes](game-modes.md) - How modes affect authority
- [Characters](../characters.md) - NetworkCharacter authority
- [Authority System Guide](../guides/authority-system.md) - In-depth guide

