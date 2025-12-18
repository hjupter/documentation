---
description: Security best practices for multiplayer games
---

# Security Considerations

## Overview

Multiplayer games face unique security challenges. This guide covers authority validation, cheat prevention, and secure design patterns for Fusion multiplayer games.

---

## Security Principles

### Never Trust the Client

All client data is potentially manipulated:

```
❌ Trusting client:
Event: On Damage RPC Received
└── Apply Damage: {Client Sent Value}

✓ Validating on authority:
Event: On Damage RPC Received
└── Condition: Has State Authority
    └── Validate and Apply:
        ├── Check damage in valid range
        ├── Check attacker can attack
        ├── Check target can be damaged
        └── Apply validated damage
```

### Authoritative State

Critical game state lives on State Authority only:

| Data Type | Where Stored | Validated By |
|-----------|--------------|--------------|
| Health | State Authority | State Authority |
| Inventory | State Authority | State Authority |
| Position | Depends on mode | Authority |
| Currency | State Authority | State Authority |

---

## Authority Validation

### Always Check Authority

Before modifying state:

```
Event: On Any Modification
└── Condition: Has State Authority
    └── Modify State
```

### Validate RPC Senders

Check if the RPC sender is authorized:

```
Event: On Attack RPC Received
└── Conditions:
    ├── Has State Authority (for this target)
    ├── Sender is valid player
    └── Sender can perform action
        └── Apply validated damage
```

### Prevent Authority Spoofing

```
Validation Checklist:
├── Is sender who they claim?
├── Do they have permission?
├── Is the action valid now?
├── Are parameters in range?
└── Is the target valid?
```

---

## Common Attack Vectors

### Speed Hacking

**Attack**: Client sends movement faster than allowed.

**Prevention**:
```
On Movement Received (State Authority):
├── Calculate distance from last position
├── Calculate time since last update
├── Verify speed ≤ max allowed
├── If invalid → Reject or rubber-band
└── If valid → Apply movement
```

### Damage Hacking

**Attack**: Client claims impossible damage values.

**Prevention**:
```
On Damage Request:
├── Verify attacker can attack
├── Verify weapon exists and is valid
├── Calculate damage from weapon stats
├── Ignore client-sent damage value
└── Apply server-calculated damage
```

### Teleportation

**Attack**: Client claims to be at impossible position.

**Prevention**:
```
On Position Update:
├── Check distance from last known position
├── Verify movement is physically possible
├── Check for wall/obstacle intersection
├── If suspicious → Log and correct
└── Accumulate violations → Kick
```

### Inventory Duplication

**Attack**: Client claims to have items they don't own.

**Prevention**:
```
On Use Item Request:
├── Verify item exists in server inventory
├── Verify item not already used
├── Mark item as used/consumed (server-side)
├── Apply item effect
└── Sync state to clients
```

### Cooldown Bypass

**Attack**: Client ignores ability cooldowns.

**Prevention**:
```
On Ability Request:
├── Check server-side cooldown timer
├── If on cooldown → Reject silently
├── If ready → Execute and start cooldown
└── Never trust client cooldown state
```

---

## Secure Design Patterns

### Server-Authoritative Combat

```
Attack Flow:
1. Client: Press attack button
2. Client: Send attack request RPC
3. Server: Validate attacker state
4. Server: Perform hit detection
5. Server: Calculate damage
6. Server: Apply to target
7. Server: Broadcast result
8. Clients: Play effects

// Client only does visual feedback
// All logic on server
```

### Secure Spawning

```
❌ Insecure:
Client: Spawn Weapon (client-side)

✓ Secure:
Client: Request Weapon Spawn RPC
Server: Validate request
Server: Spawn Weapon (if valid)
Server: Weapon syncs to all clients
```

### Input Validation

```
Input Validation Pattern:
├── Sanitize all string inputs
├── Clamp numeric values to valid ranges
├── Validate enum values exist
├── Check reference validity
└── Log suspicious inputs
```

---

## Topology Security Levels

### Shared Mode

| Risk Level | High |
|------------|------|
| Trust Model | All clients trusted |
| Vulnerability | Clients can modify their state |
| Mitigation | Limited - use for casual games |

**When to Use**: Casual co-op, no competitive element

### Host Mode

| Risk Level | Medium |
|------------|--------|
| Trust Model | Host trusted |
| Vulnerability | Host can cheat |
| Mitigation | Use for semi-competitive |

**When to Use**: Friend groups, non-ranked play

### Server Mode

| Risk Level | Low |
|------------|-----|
| Trust Model | Server only |
| Vulnerability | Minimal (server attacks only) |
| Mitigation | Full server authority |

**When to Use**: Competitive, ranked, esports

---

## Rate Limiting

### Prevent Spam Attacks

```
RPC Rate Limits:
├── Chat messages: 1 per second
├── Attack actions: Based on weapon speed
├── Movement updates: Tick rate
└── Special abilities: Cooldown-based
```

### Implementation

```
Event: On RPC Received
└── Check Rate Limit:
    ├── Get last action time for sender
    ├── If too frequent → Reject
    ├── If excessive → Flag/Kick
    └── If OK → Process and update timer
```

---

## Secure Communication

### Sensitive Data

| Data Type | Transmission | Storage |
|-----------|--------------|---------|
| Passwords | Never via RPC | Never in game |
| Auth Tokens | HTTPS only | Secure storage |
| Session Keys | Photon handles | Temporary |
| Player Data | Encrypted | Server DB |

### Username Validation

```
Username Rules:
├── Length: 3-16 characters
├── Allowed: Alphanumeric, underscore
├── Blocked: Profanity filter
├── Sanitized: Strip HTML/scripts
└── Rate limited: Change attempts
```

---

## Anti-Cheat Strategies

### Behavior Detection

| Behavior | Detection | Response |
|----------|-----------|----------|
| Perfect aim | Track accuracy % | Flag for review |
| Impossible speed | Velocity checks | Rubber-band |
| Wall hacking | Raycast validation | Log positions |
| Rapid fire | Action rate check | Reject excess |

### Statistical Analysis

```
Track Per Player:
├── K/D ratio over time
├── Accuracy statistics
├── Action frequency
├── Position anomalies
└── Flag outliers for review
```

### Layered Defense

```
Layer 1: Input Validation
├── Reject obviously invalid data

Layer 2: Rate Limiting
├── Prevent spam attacks

Layer 3: State Validation
├── Verify game rules followed

Layer 4: Behavior Analysis
├── Detect statistical anomalies

Layer 5: Manual Review
└── Human verification of flags
```

---

## Logging and Monitoring

### What to Log

| Event | Priority | Data |
|-------|----------|------|
| Validation failures | High | Player, action, details |
| Unusual behavior | Medium | Pattern, frequency |
| State changes | Low | For replay/audit |

### Log Example

```
[Security] Player_123 validation failed:
├── Action: Damage request
├── Claimed: 9999 damage
├── Maximum: 150 damage
├── Result: Rejected
└── Violation count: 3
```

### Automated Responses

| Violation Count | Response |
|-----------------|----------|
| 1-3 | Log only |
| 4-10 | Temporary action limit |
| 10+ | Automatic kick |
| Repeat offender | Report for ban |

---

## Session Security

### Lobby Protection

```
Session Properties:
├── Is Visible: Public/Private control
├── Password: Optional access code
├── Max Players: Prevent overflow
└── Region: Consistent grouping
```

### Player Verification

```
On Player Joined:
├── Verify authentication token
├── Check ban list
├── Validate player data
└── If suspicious → Reject join
```

---

## Secure Development Practices

### Code Review Checklist

- [ ] All networked state modifications check authority
- [ ] All RPCs validate sender and parameters
- [ ] No client-side authoritative logic
- [ ] Sensitive data not exposed
- [ ] Rate limiting implemented
- [ ] Logging for security events

### Testing Security

| Test Type | What to Test |
|-----------|--------------|
| Fuzzing | Random/invalid inputs |
| Boundary | Edge case values |
| Injection | Malicious strings |
| Race conditions | Timing attacks |
| Load | Stress under many players |

---

## Related Documentation

- [Authority System](authority-system.md) - Authority model
- [Network Topologies](network-topologies.md) - Topology security
- [Troubleshooting](troubleshooting.md) - Security issues
