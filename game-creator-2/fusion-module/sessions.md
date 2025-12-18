---
description: Complete guide to session management, hosting, and joining games
---

# Sessions

## Overview

Sessions are the foundation of multiplayer gameplay. The Fusion module provides visual scripting components to create, join, and manage network sessions with ease.

---

## Starting a Session

Use the **Start Game** instruction to create or join a network session:

<figure><img src="../../.gitbook/assets/image (128).png" alt=""><figcaption><p>Start Game instruction</p></figcaption></figure>

### Basic Flow

```
Trigger: On Button Click
└── Instructions:
    └── Start Game
        ├── Game Mode: Shared
        ├── Session Name: "MySession"
        └── Scene: "GameScene"
```

After connecting, spawn your player using the **On Scene Load Done** event:

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption><p>Spawn player on scene load</p></figcaption></figure>

---

## Start Game Parameters

### Game Mode

| Mode | Description | Use Case |
|------|-------------|----------|
| **Shared** | Peer-to-peer, distributed authority | Casual games, co-op |
| **Host** | Listen server (host plays too) | Competitive, mid-scale |
| **Server** | Dedicated server (no local player) | Large-scale, esports |
| **Client** | Join existing server | Connect to dedicated |
| **Single** | Offline mode | Testing, single-player |
| **AutoHostOrClient** | Auto-detect based on session | Flexible matchmaking |

### Session Configuration

| Parameter | Type | Description |
|-----------|------|-------------|
| **Session Name** | String | Unique session identifier |
| **Region** | String | Photon region code (us, eu, asia, etc.) |
| **Scene** | Scene Reference | Scene to load after connecting |
| **Max Players** | Integer | Maximum players allowed |
| **Is Open** | Boolean | Whether session accepts new joins |
| **Is Visible** | Boolean | Whether session appears in lobby |

### Advanced Options

| Parameter | Description |
|-----------|-------------|
| **Custom Properties** | Key-value pairs for matchmaking |
| **Player Token** | Custom data sent with join request |
| **App Version** | Version matching for compatibility |

---

## Session Properties

Custom session properties enable advanced matchmaking and session information display.

### Setting Properties

Use **Set Session Property** instruction:

```
Trigger: On Host Started
└── Instructions:
    └── Set Session Property
        ├── Key: "MapName"
        └── Value: "Forest Arena"
```

### Reading Properties

Use the **Session Property** string getter:

```
Text Field: {Session Property: "MapName"}
```

### Common Use Cases

| Property Key | Example Value | Purpose |
|--------------|---------------|---------|
| `MapName` | "Desert Arena" | Display current map |
| `GameMode` | "Deathmatch" | Filter by game mode |
| `MinLevel` | "10" | Level requirements |
| `Password` | "secret123" | Private sessions |

---

## Joining Sessions

### Direct Join

Join a specific session by name:

```
Trigger: On Join Button Click
└── Instructions:
    └── Start Game
        ├── Game Mode: AutoHostOrClient
        └── Session Name: [Input Field Value]
```

### Session Browser

Use the lobby system to browse available sessions:

1. **Join Lobby** - Connect to matchmaking
2. **On Session List Updated** - Refresh session list
3. **Session List UI** - Display available sessions
4. **Join Session** - Connect to selected session

```
Flow:
Join Lobby → Browse Sessions → Select → Join Session → Load Scene → Spawn
```

---

## Lobby System

The lobby allows players to browse sessions before joining.

### Joining a Lobby

```
Trigger: On Menu Loaded
└── Instructions:
    └── Join Session Lobby
        └── Region: [Selected Region]
```

### Lobby Events

| Event | Description |
|-------|-------------|
| **On Lobby Starting** | Connecting to lobby |
| **On Lobby Started** | Successfully joined lobby |
| **On Lobby Failed** | Connection failed |
| **On Lobby Canceled** | Connection canceled |
| **On Session List Updated** | Session list refreshed |

### Leaving the Lobby

```
Trigger: On Back Button Click
└── Instructions:
    └── Lobby Disconnect
```

---

## Session Lifecycle

### Session States

```
┌──────────────────────────────────────────────────────────┐
│                    Session Lifecycle                      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│   ┌─────────┐     ┌──────────┐     ┌─────────┐          │
│   │  Idle   │────▶│ Starting │────▶│ Started │          │
│   └─────────┘     └──────────┘     └────┬────┘          │
│                                          │               │
│                         ┌────────────────┼───────────┐  │
│                         │                │           │  │
│                         ▼                ▼           ▼  │
│                   ┌──────────┐    ┌──────────┐ ┌──────┐│
│                   │ Failed   │    │ Canceled │ │Closed││
│                   └──────────┘    └──────────┘ └──────┘│
│                                                         │
└──────────────────────────────────────────────────────────┘
```

### Session Events

| Event | When Fired |
|-------|------------|
| **On Game Starting** | Session connection initiated |
| **On Game Started** | Successfully connected |
| **On Game Failed** | Connection failed |
| **On Game Canceled** | Connection canceled by user |
| **On Connected Server** | Connected to Fusion server |
| **On Scene Load Start** | Network scene loading |
| **On Scene Load Done** | Scene fully loaded |
| **On Shutdown** | Session ended |

---

## Player Spawning

### Spawn Player Instruction

```
Trigger: On Scene Load Done
└── Instructions:
    └── Spawn Player
        ├── Prefab: [Player Prefab]
        ├── Position: [Spawn Point]
        └── Rotation: [Spawn Rotation]
```

### Spawn Parameters

| Parameter | Description |
|-----------|-------------|
| **Prefab** | NetworkPrefabRef to spawn |
| **Position** | World position |
| **Rotation** | Initial rotation |
| **Player** | Which player to spawn for |

### Spawn Events

| Event | Description |
|-------|-------------|
| **On Player Spawned** | Player avatar created |
| **On Player Despawned** | Player avatar removed |
| **On Spawned** | Any network object spawned |
| **On Despawned** | Any network object despawned |

---

## Session Management

### Controlling Session State

| Instruction | Description |
|-------------|-------------|
| **Session Open** | Allow/disallow new joins |
| **Session Visible** | Show/hide from lobby |
| **Set Session Property** | Update custom property |
| **Kick Player** | Remove player from session |

### Example: Lock Session

```
Trigger: On Game Start
└── Instructions:
    ├── Session Open: False
    └── Session Visible: False
```

### Example: Kick Player

```
Trigger: On Kick Button Click
└── Condition Branch:
    └── If Is Host:
        └── Kick Player
            └── Player: [Selected Player]
```

---

## Disconnection & Shutdown

### Graceful Shutdown

```
Trigger: On Leave Button Click
└── Instructions:
    └── Shutdown Game
```

### Handling Disconnection

```
Trigger: On Disconnected From Server
└── Instructions:
    ├── Show UI: "Disconnected: {Shutdown Reason}"
    └── Load Scene: "MainMenu"
```

### Shutdown Reasons

| Reason | Description |
|--------|-------------|
| `Ok` | Normal shutdown |
| `Error` | Internal error |
| `GameNotFound` | Session doesn't exist |
| `GameIsFull` | Maximum players reached |
| `ConnectionTimeout` | Connection timed out |
| `Kicked` | Removed by host |

{% hint style="info" %}
See [Shutdown Reasons](references/shutdown-reasons.md) for the complete list.
{% endhint %}

---

## Host Migration

When the host leaves in **Shared Mode**, a new host is automatically selected.

### Handling Host Migration

```
Trigger: On State Authority Gained
└── Instructions:
    └── [Take over host responsibilities]
```

{% hint style="warning" %}
Host migration may cause brief state inconsistencies. Design your game logic to handle ownership changes gracefully.
{% endhint %}

---

## Region Selection

### Get Best Region

Automatically select the region with lowest ping:

```
Trigger: On Menu Loaded
└── Instructions:
    └── Get Best Region
```

### Manual Selection

Use the **Region Dropdown UI** component for player selection.

### Region Properties

| Property | Description |
|----------|-------------|
| **Selected Region** | User's chosen region |
| **Available Region** | Regions from settings |
| **Session Region** | Current session's region |
| **Lobby Region** | Current lobby's region |

---

## Session Properties (Getters)

Access session information via property getters:

| Property | Type | Description |
|----------|------|-------------|
| **Session Name** | String | Current session name |
| **Session Region** | String | Session's region |
| **Player Count** | Number | Current players |
| **Max Players** | Number | Maximum allowed |
| **Session Players Formatted** | String | "4/8" format |
| **Is In Session** | Boolean | Session active |
| **Session Valid** | Boolean | Session is valid |
| **Is Session Open** | Boolean | Accepting joins |
| **Is Session Visible** | Boolean | Visible in lobby |

---

## Best Practices

### Session Names

- Use unique identifiers or generated codes
- Include version info for compatibility
- Consider region-specific naming

### Error Handling

- Always handle **On Game Failed** event
- Display user-friendly error messages
- Provide retry options

### Testing

- Test with multiple build instances
- Use ParrelSync for editor testing
- Verify behavior across regions

---

## Common Patterns

### Quick Match

```
Trigger: On Quick Match Button
└── Instructions:
    └── Start Game
        ├── Game Mode: AutoHostOrClient
        ├── Session Name: "QuickMatch"
        └── Scene: "Arena"
```

### Private Match with Code

```
Trigger: On Create Private Button
└── Instructions:
    ├── Set Local Variable: SessionCode = {Generated Session Code}
    └── Start Game
        ├── Game Mode: Host
        └── Session Name: [SessionCode]
```

### Rejoin After Disconnect

```
Trigger: On Rejoin Button
└── Instructions:
    └── Start Game
        ├── Game Mode: Client
        └── Session Name: [Last Session Name]
```
