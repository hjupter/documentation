---
description: Network property getters for accessing Fusion multiplayer data
---

# Properties

Properties (Getters) allow you to access network data in your visual scripting logic. They can be used anywhere Game Creator 2 expects a value of the matching type.

## Property Types

| Type | Count | Description |
|------|-------|-------------|
| **Boolean** | 15 | True/false network states |
| **Number** | 16 | Numeric values (ping, counts, times) |
| **String** | 29 | Text values (names, reasons, info) |
| **Color** | 2 | Color values |
| **Sprite** | 3 | Sprite references |
| **GameObject** | 10 | Object references |
| **Direction** | 1 | Direction vectors |
| **NetworkPrefabRef** | 1 | Network prefab references |

---

## Boolean Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Is Connected** | Fusion | Player is connected to network |
| **Is Host** | Fusion/Network | Local peer is host (server with player) |
| **Is Shared Mode Master Client** | Fusion | Local peer is room master client |
| **Has Input Authority** | Fusion/Network Object | Local player has input authority |
| **Has State Authority** | Fusion/Network Object | Local player has state authority |
| **Is In Session** | Fusion/Session | Session is in progress |
| **Session Valid** | Fusion/Session | Session is valid |
| **Tick Timer Running** | Fusion | Timer is running |
| **Tick Timer Expired** | Fusion | Timer has expired |
| **Network Character Is Local Player** | Fusion/Network Character | Character is local player |
| **Network Character Is Player** | Fusion/Network Character | Character is a player |
| **Network Character Is Dead** | Fusion/Network Character | Character is dead |
| **Network Character Is Controllable** | Fusion/Network Character | Character is controllable |
| **Network Character Is Moving** | Fusion/Network Character | Character is moving |
| **Network Character Is Ragdoll** | Fusion/Network Character | Character is in ragdoll |

---

## Number Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Player Index** | Fusion/Player | Player index from list |
| **Player Id** | Fusion/Player | PlayerRef as integer (-1=None, -2=Master, >=0=Player) |
| **Player Ping** | Fusion/Player | Player's ping in milliseconds |
| **Round Trip Time (RTT)** | Fusion/Network | Round-trip time to server in seconds |
| **Player Count** | Fusion/Session | Players in current session |
| **Max Players** | Fusion/Session | Maximum players allowed |
| **Players Alive** | Fusion/Session | Number of alive players |
| **Players Dead** | Fusion/Session | Number of dead players |
| **Latest Server Tick** | Fusion/Session | Latest confirmed server tick |
| **Simulation Time** | Fusion/Session | Current simulation time |
| **Local Render Time** | Fusion/Session | Current render time for predicted objects |
| **Total Sessions** | Fusion/Lobby | Total sessions in lobby |
| **Total Players in Sessions** | Fusion/Lobby | Total players across all sessions |
| **Remaining Time** | Fusion/Tick Timer | Timer remaining time |
| **Remaining Ticks** | Fusion/Tick Timer | Timer remaining ticks |
| **Elapsed Time** | Fusion/Tick Timer | Timer elapsed time |

---

## String Properties

### Session & Network

| Property | Category | Description |
|----------|----------|-------------|
| **Session Name** | Fusion/Session | Name of current session |
| **Session Region** | Fusion/Session | Connected region |
| **Session Info** | Fusion/Session | Complete session info |
| **Session Players Formatted** | Fusion/Session | Player count formatted (e.g., "4/8") |
| **Session Is Open** | Fusion/Session | Session open state as string |
| **Session Is Visible** | Fusion/Session | Session visibility as string |
| **Session Property** | Fusion/Session | Custom session property value |
| **Is Shared Mode Master Client** | Fusion/Session | Master client status as string |
| **Network Status** | Fusion/Reasons | Current network status |
| **Fusion App Version** | Fusion | App version string |

### Player

| Property | Category | Description |
|----------|----------|-------------|
| **Player Username** | Fusion/Player | Player's username |
| **Player User Id** | Fusion/Player | Player's user ID |

### Lobby & Region

| Property | Category | Description |
|----------|----------|-------------|
| **Lobby Name** | Fusion/Lobby | Current lobby name |
| **Lobby Region** | Fusion/Lobby | Connected lobby region |
| **Selected Region** | Fusion | Region selected via UI |
| **Available Region** | Fusion | Region from available list |

### Models & Scenes

| Property | Category | Description |
|----------|----------|-------------|
| **Model Name** | Fusion/Models | Model name from list |
| **Model Prefab Name** | Fusion/Models | Model prefab name |
| **Selected Model** | Fusion/Models | Last selected model |
| **Scene Name** | Fusion/Scenes | Scene name from list |
| **Generated Session Code** | Fusion | Human-readable random code |

### Reasons & Errors

| Property | Category | Description |
|----------|----------|-------------|
| **Disconnect Reason** | Fusion/Reasons | Last disconnect reason |
| **Shutdown Reason** | Fusion/Reasons | Last shutdown reason |
| **Shutdown Reason Error** | Fusion/Reasons | Shutdown error details |
| **Error Message** | Fusion/Reasons | Last error message |

### Chat & RPC

| Property | Category | Description |
|----------|----------|-------------|
| **Last Chat Message** | Fusion | Last chat message content |
| **RPC Sender** | Fusion | Last RPC sender name |

### Tick Timer

| Property | Category | Description |
|----------|----------|-------------|
| **Tick Timer Remaining Time** | Fusion/Tick Timer | Remaining time as string |
| **Tick Timer Elapsed Time** | Fusion/Tick Timer | Elapsed time as string |

---

## Color Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Ping Color** | Fusion | Color based on ping quality |
| **Chat Color from Target** | Fusion | Color based on message target |

{% hint style="info" %}
**Ping Color** uses a gradient to indicate connection quality - green for good, yellow for moderate, red for poor.
{% endhint %}

---

## Sprite Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Model Sprite** | Fusion | Sprite for model from list |
| **Selected Model Sprite** | Fusion | Currently selected model sprite |
| **Scene Sprite** | Fusion | Sprite for scene from list |

---

## GameObject Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Local Player** | Fusion | Reference to local player object |
| **Last Player Joined** | Fusion | Last player that joined session |
| **Last Player Left** | Fusion | Last player that left session |
| **Last Chat Player** | Fusion | Last player who sent chat |
| **RPC Sender** | Fusion | Last player who sent RPC |
| **Player by Index** | Fusion | Player object by index |
| **Network Object** | Fusion | NetworkObject component reference |
| **Model Prefab** | Fusion | Model prefab from list |
| **Selected Model Prefab** | Fusion | Selected model prefab |

---

## Direction Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Network Input Direction** | Characters | Network character input direction |

---

## NetworkPrefabRef Properties

| Property | Category | Description |
|----------|----------|-------------|
| **Network Prefab Ref** | Network Prefab Ref | Network prefab reference |

---

## Common Use Cases

### Display Player Information

```
Player: {Player Username}
Ping: {Player Ping}ms
Region: {Session Region}
```

### Show Session Status

```
Session: {Session Name}
Players: {Session Players Formatted}
Status: {Network Status}
```

### Handle Disconnection

Use **Disconnect Reason** or **Shutdown Reason** to display appropriate messages:

| Reason | User Message |
|--------|--------------|
| `Ok` | "Session ended normally" |
| `Error` | "Connection error occurred" |
| `GameNotFound` | "Session no longer exists" |
| `GameIsFull` | "Session is full" |
| `Kicked` | "You were removed from session" |

{% hint style="success" %}
**Best Practice:** Combine properties with conditions to create responsive UI that adapts to network state changes.
{% endhint %}
