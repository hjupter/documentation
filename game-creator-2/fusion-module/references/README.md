---
description: Reference documentation for constants, enums, and data types
---

# References

This section contains reference documentation for constants, enumerations, and data types used throughout the Fusion module.

## Quick Reference

| Reference | Description |
|-----------|-------------|
| [Shutdown Reasons](shutdown-reasons.md) | Network disconnection and shutdown codes |
| [Game Modes](game-modes.md) | Network topology options |
| [Authority Types](authority-types.md) | Input and State authority |

---

## Shutdown Reasons

Common reasons for session disconnection:

| Code | Description | User Action |
|------|-------------|-------------|
| `Ok` | Normal shutdown | None |
| `GameNotFound` | Session expired | Create new or refresh list |
| `GameIsFull` | Max players reached | Try different session |
| `ConnectionTimeout` | Network timeout | Check connection |
| `Kicked` | Removed by host | Contact host |

[View full reference →](shutdown-reasons.md)

---

## Game Modes

| Mode | Description |
|------|-------------|
| `Shared` | Peer-to-peer, distributed authority |
| `Host` | Listen server with local player |
| `Server` | Dedicated server, no local player |
| `Client` | Connect to existing server |
| `Single` | Offline mode for testing |
| `AutoHostOrClient` | Automatic based on session |

---

## Property Types

### Session Properties

| Property | Type | Access |
|----------|------|--------|
| Session Name | String | Read |
| Player Count | Integer | Read |
| Max Players | Integer | Read |
| Is Open | Boolean | Read/Write |
| Is Visible | Boolean | Read/Write |

### Player Properties

| Property | Type | Access |
|----------|------|--------|
| Username | String | Read/Write |
| Ping | Integer | Read |
| Is Host | Boolean | Read |
| Player Ref | PlayerRef | Read |

### Network Properties

| Property | Type | Access |
|----------|------|--------|
| Is In Session | Boolean | Read |
| Selected Region | String | Read/Write |
| Has State Authority | Boolean | Read |
| Has Input Authority | Boolean | Read |

---

## RPC Targets

| Target | Recipients |
|--------|------------|
| `All` | All peers including sender |
| `Proxies` | All except Input/State Authority |
| `InputAuthority` | Only Input Authority holder |
| `StateAuthority` | Only State Authority holder |

---

## Variable Limits

| Type | Limit |
|------|-------|
| Name Variable String | 64 characters |
| List Variable String | 32 characters |
| List Variable Elements | Implementation dependent |

---

## Related Documentation

- [Visual Scripting](../visual-scripting/) - All available components
- [Settings](../settings.md) - Configuration options
- [Troubleshooting](../guides/troubleshooting.md) - Error handling
