---
description: Handling players joining mid-game
---

# Late Joiner Handling

## Overview

Late joiners are players who connect to a session after it has started. Ensuring they receive a consistent game state is critical for multiplayer game quality.

---

## The Problem

When a player joins mid-session, they need to:

| Data Type | Challenge |
|-----------|-----------|
| World State | Objects spawned before join |
| Player States | Other players' current status |
| Game Progress | Scores, objectives, time |
| Visual State | Opened doors, broken objects |
| Active Effects | Ongoing particles, sounds |

Without proper handling, late joiners may see:
- Missing objects
- Wrong player positions
- Incorrect game state
- Visual inconsistencies

---

## Automatic Synchronization

### NetworkObject State

Fusion automatically syncs `[Networked]` properties:

```
[Networked] public int Health { get; set; }
[Networked] public Vector3 Position { get; set; }
[Networked] public bool IsAlive { get; set; }

// Late joiners receive current values automatically
```

### NetworkCharacter

Player positions and states sync automatically:

```
Character Prefab:
├── NetworkObject
├── NetworkTransform → Position synced
├── NetworkMecanimAnimator → Animation synced
└── NetworkCharacter → GC2 state synced
```

### Variables

NetworkedVariables sync to late joiners:

```
Local Name Variables:
├── Automatically synced with character
└── Late joiner receives current values

Global Variables:
├── Synced via GlobalNameVariablesNetwork
└── Late joiner receives full state
```

---

## Manual Synchronization

### RPC Cache for Events

Use cached RPCs for state that must persist:

```
Event: On Door Opened
└── Action RPC (Target: All)
    ├── Cache State: Enabled ✓
    └── Actions:
        └── Set Door State: Open

// Late joiners receive cached RPC on spawn
```

### When to Use Cache

| Scenario | Cache? | Reason |
|----------|--------|--------|
| Door opened | Yes | Permanent state change |
| Explosion effect | No | Momentary |
| Light turned on | Yes | Persistent |
| Jump animation | No | Transient |
| Level music change | Yes | Current state |
| Hit reaction | No | Momentary |

### Clear Cache When Resetting

```
Event: On Round Reset
└── Instructions:
    ├── Remove Cached Actions (All)
    └── Reset World State
```

---

## Spawn Point Selection

### Avoid Spawning in Progress

```
Event: On Player Joined
└── Condition: Has State Authority
    └── Instructions:
        ├── Get Safe Spawn Point
        │   └── Avoid: Combat zones, hazards
        ├── Spawn Player At Safe Point
        └── Notify: "Player X joined"
```

### Spawn Point Considerations

| Factor | How to Handle |
|--------|---------------|
| Active combat | Spawn away from fights |
| Hazards | Avoid spawn-killing spots |
| Objectives | Don't block gameplay |
| Fairness | Random or team-based |

---

## Game State Synchronization

### Score and Progress

```
Networked State (auto-sync):
├── [Networked] public int TeamAScore { get; set; }
├── [Networked] public int TeamBScore { get; set; }
├── [Networked] public float GameTime { get; set; }
└── [Networked] public int CurrentRound { get; set; }

// Late joiners receive current values
```

### Objective Status

```
Event: On Objective Captured
└── Condition: Has State Authority
    └── Instructions:
        ├── Set Objective.Owner = {Capturing Team}
        ├── Action RPC (Target: All, Cached: Yes)
        │   └── Update Objective Visual
        └── Update Score
```

### Match Phase

```
[Networked] public MatchPhase Phase { get; set; }

enum MatchPhase:
├── WaitingForPlayers
├── Countdown
├── InProgress
├── Overtime
└── Ended

Event: On Player Spawned (Late Joiner)
└── Condition: Is Newly Joined
    └── Show Current Phase UI
```

---

## Visual State Sync

### Destructible Objects

```
Destructible Setup:
├── [Networked] public bool IsDestroyed { get; set; }
└── On Spawn:
    └── If IsDestroyed → Show destroyed mesh

Event: On Object Destroyed
└── Condition: Has State Authority
    └── Set IsDestroyed = true
    // Mesh change syncs via NetworkObject
```

### Interactive Objects

```
Door Setup:
├── [Networked] public bool IsOpen { get; set; }
└── ChangeDetector:
    └── On IsOpen Changed:
        └── Play Door Animation (open/close)

// Late joiners see correct door state immediately
```

### Lighting and Effects

```
Light Setup:
├── [Networked] public bool LightOn { get; set; }
└── ChangeDetector:
    └── On LightOn Changed:
        └── Toggle Light Component

// Late joiners see correct lighting
```

---

## Player State Catch-Up

### Currently Playing Players

```
Event: On Player Spawned (Late Joiner)
└── For Each Player Already In Game:
    └── Update Nameplate
    └── Show Team Colors
    └── Display Current Status
```

### Equipment and Loadout

```
Character Equipment (Networked):
├── [Networked] public NetworkString<_32> WeaponId
├── [Networked] public NetworkString<_32> ArmorId
└── [Networked] public NetworkString<_32> Accessory

// Late joiners see equipped items
```

### Attachments (Auto-sync)

```
NetworkCharacter Attachments:
├── Automatically synced to all clients
├── Late joiners receive current attachments
└── No manual handling needed
```

---

## Event History

### Chat Messages

```
Chat System:
├── Store last N messages in NetworkedList
├── Late joiners receive message history
└── Optionally show "You joined" marker
```

### Kill Feed

```
Kill Feed:
├── Maintain rolling buffer of events
├── Late joiners see recent kills
└── Clear old entries automatically
```

---

## Timing Considerations

### Spawn Delay

```
Event: On Player Joined
└── Instructions:
    ├── Wait: 1 second (for state sync)
    └── Then Spawn Character
```

### Progressive Loading

```
Join Sequence:
1. Connect and receive session info
2. Load scene
3. Receive networked object state
4. Spawn player character
5. Enable player input
```

---

## Testing Late Joins

### Test Scenarios

| Test | What to Check |
|------|---------------|
| Join during countdown | Timer, player list |
| Join mid-combat | Positions, health |
| Join after objectives | Captured status |
| Join near end | Scores, time |

### Testing Process

```
1. Start 2-player test
2. Progress to specific state
3. Connect 3rd player
4. Verify state consistency:
   ├── All objects present
   ├── All states correct
   ├── UI shows right info
   └── Gameplay not disrupted
```

---

## Common Issues

### Missing Objects

| Cause | Solution |
|-------|----------|
| Scene object not networked | Add NetworkObject |
| Spawn before sync complete | Add spawn delay |
| Object culled | Check interest management |

### Wrong State

| Cause | Solution |
|-------|----------|
| RPC not cached | Enable cache |
| State not networked | Add [Networked] |
| Custom sync broken | Check ChangeDetector |

### Visual Mismatch

| Cause | Solution |
|-------|----------|
| Effect not synced | Use cached RPC |
| Material not networked | Sync material index |
| Animation desync | Check NetworkMecanimAnimator |

---

## Best Practices

### Design for Late Joiners

```
Checklist:
├── All persistent state is [Networked]
├── Permanent visual changes use cached RPCs
├── UI updates from networked properties
├── Spawn points are safe and fair
└── Join-in-progress is tested
```

### Graceful Integration

```
Event: On Late Joiner Spawned
└── Instructions:
    ├── Brief invincibility (2 seconds)
    ├── Fade in visual
    ├── Show catch-up UI (scores, objectives)
    └── Enable input after settled
```

### Minimize Disruption

```
For Other Players:
├── Subtle join notification
├── Don't pause gameplay
├── Don't reset progress
└── Fair spawn location
```

---

## Related Documentation

- [Sessions](../sessions.md) - Session management
- [Variables](../variables.md) - Variable synchronization
- [RPC](../remote-procedure-calls.md) - Cached RPCs
- [Troubleshooting](troubleshooting.md) - Sync issues
