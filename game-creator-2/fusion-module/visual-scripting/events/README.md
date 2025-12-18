---
description: Network events for reacting to Fusion multiplayer callbacks
---

# Events

Events trigger your visual scripting logic in response to network callbacks like player joins, session changes, and authority transfers.

## Quick Reference

| Event | Category | Description |
|-------|----------|-------------|
| **On Player Joined** | Player | Remote player entered session |
| **On Player Left** | Player | Remote player left session |
| **On Player Spawned** | Player | Player avatar spawned |
| **On Player Despawned** | Player | Player avatar despawned |
| **On Username Changed** | Player | Player's username changed |
| **On Game Started** | Session | Fusion session fully started |
| **On Game Starting** | Session | Session starting or joining |
| **On Game Failed** | Session | Session has failed |
| **On Game Canceled** | Session | Session has been canceled |
| **On Connected Server** | Session | Successfully connected to server |
| **On Disconnected From Server** | Session | Disconnected from server |
| **On Shutdown** | Session | Runner is shutdown |
| **On Scene Load Start** | Session | Network scene loading started |
| **On Scene Load Done** | Session | Network scene loading finished |
| **On Lobby Started** | Lobby | Player joined a lobby |
| **On Lobby Starting** | Lobby | Lobby session starting |
| **On Lobby Failed** | Lobby | Lobby session failed |
| **On Lobby Canceled** | Lobby | Lobby session canceled |
| **On Session List Updated** | Lobby | Session list updated |
| **On Spawned** | Network Object | Network object spawned |
| **On Despawned** | Network Object | Network object despawned |
| **On State Authority Changed** | Network Object | State authority changed |
| **On State Authority Gained** | Network Object | Client gained state authority |
| **On State Authority Lost** | Network Object | Client lost state authority |
| **On Tick Timer Expired** | Network Object | Tick timer has expired |
| **On Receive Chat Message** | Room Chat | Chat message received |
| **On Region Selected Change** | Region | Selected region changed |

---

## Player Events

### On Player Joined

Called when a remote player entered the session.

**Keywords:** `Player`, `Network`, `Fusion`, `Joined`

{% hint style="info" %}
This event fires for remote players only. Use **On Player Spawned** if you need to react to all players including local.
{% endhint %}

---

### On Player Left

Called when a remote player left the session.

**Keywords:** `Player`, `Network`, `Fusion`, `Left`

---

### On Player Spawned

Called when a player avatar spawned in the session.

**Keywords:** `Player`, `Spawn`, `Network`, `Fusion`, `Connection`

{% hint style="success" %}
This is the best event to use for initializing player-specific UI or logic after a player's character appears.
{% endhint %}

---

### On Player Despawned

Called when a player avatar is despawned in the session.

**Keywords:** `Player`, `Despawn`, `Network`, `Fusion`

---

### On Username Changed

Triggers when a player's username has changed.

**Keywords:** `Player`, `Network`, `Fusion`, `Username`, `Changed`

---

## Session Events

### On Game Started

Called when the Fusion session has fully started.

**Keywords:** `Game`, `Started`, `Network`, `Fusion`, `Connection`

{% hint style="success" %}
Use this event to initialize game logic, spawn the player character, or load game-specific data.
{% endhint %}

---

### On Game Starting

Called when the Fusion session is starting a new game or joining an existing one.

**Keywords:** `Game`, `Starting`, `Network`, `Fusion`, `Connection`

{% hint style="info" %}
Use this event to show loading screens or prepare resources before the session is fully ready.
{% endhint %}

---

### On Game Failed

Called when the Fusion session has failed.

**Keywords:** `Game`, `Failed`, `Network`, `Fusion`, `Connection`

{% hint style="warning" %}
Handle this event to show error messages and provide retry options to the user.
{% endhint %}

---

### On Game Canceled

Called when the Fusion session has been canceled.

**Keywords:** `Game`, `Canceled`, `Network`, `Fusion`, `Connection`

---

### On Connected Server

Callback when NetworkRunner successfully connects to a server or host.

**Keywords:** `Connected`, `Network`, `Fusion`

---

### On Disconnected From Server

Called when runner is shutdown.

**Keywords:** `Disconnected`, `Network`, `Fusion`

---

### On Shutdown

Called when runner is shutdown.

**Keywords:** `Shutdown`, `Network`, `Fusion`

{% hint style="info" %}
Use the **Shutdown Reason** property getter to determine why the session ended.
{% endhint %}

---

### On Scene Load Start

Callback when NetworkRunner starts loading the scene.

**Keywords:** `Scene`, `Network`, `Fusion`, `Load`, `Start`

---

### On Scene Load Done

Callback when NetworkRunner finishes loading the scene.

**Keywords:** `Scene`, `Network`, `Fusion`, `Load`, `Done`

---

## Lobby Events

### On Lobby Started

Called when the player has joined a lobby.

**Keywords:** `Lobby`, `Joined`, `Network`, `Fusion`, `Connection`

---

### On Lobby Starting

Called when the Fusion Lobby session is starting.

**Keywords:** `Lobby`, `Starting`, `Network`, `Fusion`, `Connection`

---

### On Lobby Failed

Called when the Fusion Lobby session has failed.

**Keywords:** `Lobby`, `Failed`, `Network`, `Fusion`, `Connection`

---

### On Lobby Canceled

Called when the Fusion Lobby session has been canceled.

**Keywords:** `Lobby`, `Canceled`, `Network`, `Fusion`, `Connection`

---

### On Session List Updated

Callback when NetworkRunner updates the session list.

**Keywords:** `Session`, `Network`, `Fusion`, `List`, `Updated`

{% hint style="info" %}
Use this event to refresh your session browser UI when new sessions become available.
{% endhint %}

---

## Network Object Events

### On Spawned

Called on a network object when it is spawned.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Spawned`

---

### On Despawned

Called on a network object when it is despawned.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Despawned`

---

### On State Authority Changed

Called on a network object when state authority is changed. The NetworkObject must have the flag 'Allow State Authority Override' enabled.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Authority`, `State`, `Changed`

---

### On State Authority Gained

Called when this client gains state authority over the network object. The NetworkObject must have the flag 'Allow State Authority Override' enabled.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Authority`, `State`, `Gained`, `Acquired`

{% hint style="success" %}
Use this event to initialize state that should only be set by the authority, such as spawning child objects or setting initial values.
{% endhint %}

---

### On State Authority Lost

Called when this client loses state authority over the network object. The NetworkObject must have the flag 'Allow State Authority Override' enabled.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Authority`, `State`, `Lost`, `Released`

{% hint style="info" %}
Use this event to clean up authority-specific logic when another client takes over.
{% endhint %}

---

### On Tick Timer Expired

Called on a network object when a tick timer has expired.

**Keywords:** `Network Object`, `Network`, `Fusion`, `Timer`

---

## Other Events

### On Receive Chat Message

Called when a chat message is received.

**Keywords:** `Chat`, `Message`, `Network`, `Fusion`, `Receive`

---

### On Region Selected Change

Triggers when the selected region changes using the UI dropdown menu.

**Keywords:** `Region`, `Changed`, `Network`, `Fusion`, `Selected`

---

## Event Flow Diagram

```
Session Lifecycle:
On Game Starting → On Connected Server → On Game Started
                                       ↓
                            On Player Spawned (local)
                                       ↓
                            On Player Joined (remotes)
                                       ↓
                              [Game Running]
                                       ↓
                            On Player Left (remotes)
                                       ↓
                            On Player Despawned
                                       ↓
On Shutdown ← On Disconnected From Server ← On Game Failed/Canceled

Authority Events:
On State Authority Gained → [Has Authority] → On State Authority Lost
```

{% hint style="success" %}
**Best Practice:** Always handle both success and failure events to provide a good user experience.
{% endhint %}
