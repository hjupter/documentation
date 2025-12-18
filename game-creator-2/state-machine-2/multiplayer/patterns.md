---
description: Common multiplayer state machine patterns
---

# Common Patterns

These patterns help you structure networked state machines effectively.

## Player State Machine

For player-controlled characters:

```
Start Node [Run on Owner]
└─ Input Trigger [Run on Owner]
    └─ Movement Actions [RPC to All]
```

### Breakdown

| Node | Run On | Reason |
|------|--------|--------|
| Start | Owner | Initialize only for controlling player |
| Input Trigger | Owner | Only the owner reads input |
| Movement Actions | RPC to All | All clients see the movement |

## AI State Machine

For server-authoritative AI:

```
Start Node [Run on Master]
└─ AI Decision [Run on Master]
    └─ AI Actions [RPC to All]
```

### Breakdown

| Node | Run On | Reason |
|------|--------|--------|
| Start | Master | AI runs on server only |
| AI Decision | Master | Server makes all AI decisions |
| AI Actions | RPC to All | All clients see AI behavior |

## Shared Game Logic

For game-wide state (lobby, match state):

```
Start Node [Run on Master]
└─ Game State Changes [RPC to All]
    └─ UI Updates [Run on All]
```

### Breakdown

| Node | Run On | Reason |
|------|--------|--------|
| Start | Master | Server controls game flow |
| Game State Changes | RPC to All | Sync state to all clients |
| UI Updates | Run on All | Each client updates their own UI |

## Hybrid Pattern

Combine local and networked behavior:

```
Trigger: On Interact [Run on Owner]
├─ Action: Play Local Sound [Run on Owner]
└─ Action: Toggle State [RPC to All]
    └─ Action: Play Animation [Run on All]
```

This pattern plays a sound only for the interacting player while syncing the actual game state change.

