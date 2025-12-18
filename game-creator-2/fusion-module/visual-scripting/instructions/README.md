---
description: Network instructions for Fusion multiplayer operations
---

# Instructions

Instructions are actions that perform network operations like spawning objects, managing sessions, and sending RPCs.

## Quick Reference

| Instruction | Category | Description |
|-------------|----------|-------------|
| **Spawn Object** | Network Object | Network instantiate a NetworkObject |
| **Spawn Player** | Player | Spawn a new player instance |
| **Despawn Object** | Network Object | Network despawn a NetworkObject |
| **Start Game** | Session | Start or join a game session |
| **Shutdown Game** | Session | Shutdown current session |
| **Join Lobby Session** | Session | Join a session lobby |
| **Shutdown Lobby** | Lobby | Shutdown lobby session |
| **Request State Authority** | Network Object | Request authority over an object |
| **Release State Authority** | Network | Release authority in shared mode |
| **Kick Player** | Session | Disconnect a player from session |
| **Session Open** | Session | Set session open/closed state |
| **Session Visible** | Session | Set session visibility |
| **Set Session Property** | Session | Set custom matchmaking properties |
| **Load Scene** | Scene | Network load a scene |
| **Unload Scene** | Scene | Network unload a scene |
| **Rpc Actions** | Visual Scripting | Run Actions via RPC |
| **Rpc Conditions** | Visual Scripting | Run Conditions via RPC |
| **Rpc Trigger** | Visual Scripting | Run Trigger via RPC |
| **Remove Cached Actions Rpc** | Visual Scripting | Remove cached Actions RPC |
| **Remove Cached Conditions Rpc** | Visual Scripting | Remove cached Conditions RPC |
| **Remove Cached Trigger Rpc** | Visual Scripting | Remove cached Trigger RPC |
| **Start Tick Timer** | Network Object | Start a network tick timer |
| **Stop Tick Timer** | Network Object | Stop a tick timer |
| **Select Best Region** | Network | Auto-select optimal region |
| **Register Character Models** | Models | Register models for replication |
| **Set Network Prefab Ref** | Network | Set a network prefab reference |
| **Floating Text** | UI | Show floating text message |
| **Copy To Clipboard** | UI | Copy text to clipboard |

---

## Network Object

### Spawn Object

Attempts to network instantiate a NetworkObject using a GameObject. The supplied GameObject must have a NetworkObject component.

| Parameter | Description |
|-----------|-------------|
| **Prefab** | The Network Object reference that is instantiated |
| **Position** | The position of the new game object instance |
| **Rotation** | The rotation of the new game object instance |
| **Input Authority** | PlayerRef to identify the client with input authority (Host/Server Mode only) |
| **Network Spawn Flags** | `DontDestroyOnLoad`: Spawned as DontDestroyOnLoad on all clients. `SharedModeStateAuthMasterClient`: Override state authority to MasterClient. `SharedModeStateAuthLocalPlayer`: Override state authority to local player. |

**Keywords:** `Create`, `New`, `Game Object`

---

### Despawn Object

Attempts to network despawn a NetworkObject using a GameObject. The supplied GameObject must have a NetworkObject component.

| Parameter | Description |
|-----------|-------------|
| **Instance** | The Network Object reference that is despawned |

**Keywords:** `Destroy`, `Despawn`, `Game Object`

---

### Request State Authority

Request state authority over a NetworkObject in shared mode. The NetworkObject must have the flag 'Allow State Authority Override' enabled.

| Parameter | Description |
|-----------|-------------|
| **Target** | The target NetworkObject to request state authority |

**Keywords:** `Authority`, `Request`, `Network Object`

---

### Start Tick Timer

Starts a tick timer that ticks every x seconds.

| Parameter | Description |
|-----------|-------------|
| **Mode** | `CreateFromSeconds`: Target tick calculated from seconds. `CreateFromTicks`: Target tick calculated from ticks. |
| **Value** | Amount of seconds or ticks before timer expires |
| **Wait To Complete** | If true, instruction waits until timer expires |

**Keywords:** `Create`, `New`, `Tick Timer`, `Timer`, `Tick`

---

### Stop Tick Timer

Stops a tick timer from a Network Object.

**Keywords:** `Stop`, `Tick Timer`, `Timer`, `Tick`

---

## Player

### Spawn Player

Spawns a new player instance through Fusion. This won't spawn a player in server mode.

| Parameter | Description |
|-----------|-------------|
| **Prefab** | The prefab reference that is going to be spawned |
| **Position** | The position of the new game object instance |
| **Rotation** | The rotation of the new game object instance |

**Keywords:** `Spawn`, `Player`, `Game Object`, `Fusion`, `Instantiate`

---

## Session

### Start Game

Starts a new game session or joins an existing one.

| Parameter | Description |
|-----------|-------------|
| **Game Mode** | The game mode to start the session |
| **Session Name** | The name of the session to join or create |
| **Player Count** | Max players allowed (0 = use default from NetworkProjectConfig) |
| **Starting Scene** | Scene set as the starting scene |
| **Validate Session Code** | Verify session code before joining |
| **Matchmaking Mode** | Rules for JoinRandom matchmaking |
| **Is Open** | Session accepts new joins |
| **Is Visible** | Session visible in lobby list |
| **Enable Client Session Creation** | Allow clients to create sessions |
| **Custom Lobby Name** | Custom lobby to publish in |
| **Custom App Version** | Custom app version for joining |

**Keywords:** `Start`, `Game`, `Start Game`, `Fusion`

---

### Shutdown Game

Attempts to shutdown the current game session or cancel the connection process.

**Keywords:** `Shutdown`, `Game`, `Shutdown Game`, `Fusion`, `Disconnect`, `Cancel`, `Connection`

---

### Session Open

Signal if the current connected Session is open. Only host, server or master client can change this.

**Keywords:** `Session`, `Game`, `Open`, `Fusion`

---

### Session Visible

Signal if the current connected Session is visible. Only host, server or master client can change session visibility.

**Keywords:** `Session`, `Game`, `Visible`, `Fusion`

---

### Set Session Property

Sets a custom session property. Only host, server or master client can change this. Session properties are visible in the lobby.

**Keywords:** `Session`, `Property`, `Custom`, `Matchmaking`, `Fusion`

{% hint style="info" %}
Session properties are useful for matchmaking filters. Players can search for sessions with specific property values.
{% endhint %}

---

### Kick Player

Disconnects a player from the session. Only host, server or master client can kick players.

**Keywords:** `Session`, `Player`, `Kick`, `Remove`, `Disconnect`, `Ban`, `Fusion`

---

## Network

### Release State Authority

Releases state authority over a network object in shared mode. This allows other clients to request authority.

**Keywords:** `State`, `Authority`, `Release`, `Ownership`, `Shared`, `Fusion`

---

## Lobby

### Join Lobby Session

Join a Session Lobby.

| Parameter | Description |
|-----------|-------------|
| **Session Lobby** | Lobby type to join |
| **Lobby Id** | The name of the session to join or create |

**Keywords:** `Start`, `Lobby`, `Start Lobby`, `Fusion`

---

### Shutdown Lobby

Attempts to shutdown the current lobby session or cancel the connection process.

**Keywords:** `Shutdown`, `Lobby`, `Shutdown Lobby`, `Fusion`, `Disconnect`, `Cancel`, `Connection`

---

## Scene

### Load Scene

Loads a new Scene in the Fusion Network. This is only allowed to be called on the Server/Host or Master Client.

**Keywords:** `Scene`, `Load`, `Fusion`

---

### Unload Scene

Unloads a Scene in the Fusion Network. This is only allowed to be called on the Server/Host or Master Client.

**Keywords:** `Scene`, `Load`, `Fusion`

---

## Visual Scripting (RPC)

### Rpc Actions

Runs Actions via RPC. The Actions needs to have a NetworkObject component attached to it.

| Parameter | Description |
|-----------|-------------|
| **Rpc Targets** | Target of the RPC: All, Proxies, Input Authority, or State Authority |
| **Cache State** | If true, state is cached and sent to newly connected peers |
| **Actions** | The Actions that will run (requires NetworkObject component) |

**Keywords:** `Rpc`, `Fusion`, `Actions`

---

### Rpc Conditions

Runs Conditions via RPC. The Trigger needs to have a NetworkObject component attached to it.

| Parameter | Description |
|-----------|-------------|
| **Rpc Targets** | Target of the RPC |
| **Conditions** | The trigger to run (requires NetworkObject component) |

**Keywords:** `Rpc`, `Fusion`, `Conditions`

---

### Rpc Trigger

Runs a Trigger via RPC. The Trigger needs to have a NetworkObject component attached to it.

| Parameter | Description |
|-----------|-------------|
| **Rpc Targets** | Target of the RPC |
| **Cache State** | If true, state is cached and sent to newly connected peers |
| **Trigger** | The trigger to run (requires NetworkObject component) |

**Keywords:** `Rpc`, `Fusion`, `Trigger`

---

### Remove Cached Actions Rpc

Remove player cached Actions Rpc.

| Parameter | Description |
|-----------|-------------|
| **Actions** | The Actions target to remove from cache |

**Keywords:** `Rpc`, `Fusion`, `Actions`, `Remove`

---

### Remove Cached Conditions Rpc

Remove player cached Conditions Rpc.

| Parameter | Description |
|-----------|-------------|
| **Conditions** | The Conditions target to remove from cache |

**Keywords:** `Rpc`, `Fusion`, `Conditions`, `Remove`

---

### Remove Cached Trigger Rpc

Remove player cached Trigger Rpc.

| Parameter | Description |
|-----------|-------------|
| **Trigger** | The Trigger target to remove from cache |

**Keywords:** `Rpc`, `Fusion`, `Trigger`, `Remove`

---

## Models

### Register Character Models

Register character models for network replication.

**Keywords:** `Fusion`, `Network`, `Register`, `Character Models`

---

## Utilities

### Select Best Region

Selects the best region based on ping and availability.

| Parameter | Description |
|-----------|-------------|
| **Set Region** | Stores the best region name |
| **Set Ping** | Stores the best region ping |

**Keywords:** `Region`, `Game`, `Best`, `Fusion`

---

### Set Network Prefab Ref

Sets a Network Prefab Ref value equal to another one.

| Parameter | Description |
|-----------|-------------|
| **Set** | Where the value is set |
| **From** | The value that is set |

**Keywords:** `Change`, `Instance`, `Variable`, `Asset`, `Network`, `Prefab`, `Ref`

---

### Floating Text

Shows a floating text message on a target GameObject.

| Parameter | Description |
|-----------|-------------|
| **Target** | The target GameObject to show floating text on |
| **Text** | The text to show |
| **Settings** | Settings for the floating text |

**Keywords:** `Floating`, `Text`, `Floating Text`

---

### Copy To Clipboard

Copies the specified text to the clipboard.

| Parameter | Description |
|-----------|-------------|
| **Text** | The text to copy to the clipboard |

**Keywords:** `Copy`, `Clipboard`
