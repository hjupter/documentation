---
description: Network conditions for checking Fusion multiplayer states
---

# Conditions

Conditions check network states and properties to control the flow of your visual scripting logic.

## Quick Reference

| Condition | Category | Description |
|-----------|----------|-------------|
| **Is Local Player** | Network Object | Target is the local player |
| **Is Proxy** | Network Object | LocalPlayer has no authority over entity |
| **Has Input Authority** | Network Object | Local player has input authority |
| **Has State Authority** | Network Object | Local player has state authority |
| **Tick Timer Running** | Network Object | Timer is currently running |
| **Tick Timer Expired** | Network Object | Timer has expired |
| **Is Connected** | Session | Client is connected to server |
| **Is In Session** | Session | Session is in progress |
| **Is Server** | Session | Simulation is a server connection |
| **Is Host** | Network | Local peer is host (server with player) |
| **Is Dedicated Server** | Network | Local peer is dedicated server |
| **Is Player** | Session | Runner represents Client or Host |
| **Is Scene Authority** | Session | Runner is scene authority |
| **Is Single Player** | Session | Simulation is in single player mode |
| **Is Shared Mode Master Client** | Session | Local peer is room master client |
| **Is Session Open** | Session | Session is accepting joins |
| **Is Session Visible** | Session | Session is visible in lobby |
| **Compare Network Status** | Session | Check last network status |
| **Compare Disconnect Reason** | Session | Check last disconnect reason |
| **Compare Shutdown Reason** | Session | Check last shutdown reason |
| **In Lobby** | Lobby | Peer is in lobby session |
| **Is Internet Reachable** | Network | Internet connection available |

---

## Network Object

### Is Local Player

Returns true if the target is the local player.

**Keywords:** `Fusion`, `Is Player`, `Player`, `Local Player`

{% hint style="info" %}
Use this to filter operations that should only run on the local client's character.
{% endhint %}

---

### Is Proxy

Returns if LocalPlayer is neither the Input nor State Source for this network entity.

**Keywords:** `Fusion`, `Is Proxy`, `Proxy`, `Local Player`

{% hint style="info" %}
Proxies are remote representations of objects. Use this to skip logic that should only run on authoritative clients.
{% endhint %}

---

### Has Input Authority

Returns true if local player has input authority over the specified object.

**Keywords:** `Fusion`, `Authority`, `Input Authority`, `Player`

---

### Has State Authority

Returns true if local player has state authority over the specified object.

**Keywords:** `Fusion`, `Authority`, `State Authority`, `Player`

{% hint style="warning" %}
Always check state authority before modifying networked properties to avoid conflicts.
{% endhint %}

---

### Tick Timer Running

Returns true if the Tick Timer is running.

**Keywords:** `Fusion`, `Running`, `Timer`, `Time`, `Session`, `Network`

---

### Tick Timer Expired

Returns true if the Tick Timer has expired.

**Keywords:** `Fusion`, `Tick Timer Expired`, `Expired`, `Timer`, `Time`, `Session`, `Network`

---

## Session

### Is Connected

Returns true if the client is connected to the server.

**Keywords:** `Fusion`, `Is Connected`, `Connected`

---

### Is In Session

Returns true if the current session is in progress.

**Keywords:** `Fusion`, `Is In Session`, `Session`

---

### Is Server

Returns true if this Simulation represents a Server connection.

**Keywords:** `Fusion`, `Is Server`, `Server`

{% hint style="info" %}
This returns true for both dedicated servers and hosts. Use **Is Host** or **Is Dedicated Server** for more specific checks.
{% endhint %}

---

### Is Player

Returns true if this runner represents a Client or Host. Dedicated servers have no local player and will return false.

**Keywords:** `Fusion`, `Is Player`, `Player`, `Local Player`

---

### Is Scene Authority

Returns true if this runner is the scene authority.

**Keywords:** `Fusion`, `Is Scene Authority`, `Scene`, `Authority`

---

### Is Single Player

Returns true if the Simulation is in Single Player mode.

**Keywords:** `Fusion`, `Is Single Player`, `Single Player`

---

### Is Shared Mode Master Client

Signal if the Local Peer is in a Room and is the Room Master Client.

**Keywords:** `Fusion`, `Is Server`, `Server`

{% hint style="info" %}
In Shared Mode, the Master Client has special privileges similar to a host in other topologies.
{% endhint %}

---

### Is Session Open

Returns true if the current session is open.

**Keywords:** `Fusion`, `Is Session`, `Session`, `Open`

---

### Is Session Visible

Returns true if the current session is visible.

**Keywords:** `Fusion`, `Is Session`, `Session`, `Visible`

---

### Compare Network Status

Returns true if the last network status matches the comparison.

**Keywords:** `Fusion`, `Server`, `Network`, `Status`

---

### Compare Disconnect Reason

Returns true if the last disconnect reason matches the comparison.

**Keywords:** `Fusion`, `Server`, `Disconnect`, `Reason`

---

### Compare Shutdown Reason

Returns true if the last shutdown reason matches the comparison.

**Keywords:** `Fusion`, `Shutdown`, `Server`, `Reason`

---

## Network

### Is Host

Returns true if the local peer is the host (server with local player). Different from IsServer which includes dedicated servers.

**Keywords:** `Host`, `Server`, `Listen`, `Authority`, `Fusion`

{% hint style="info" %}
A host is a server that also has a local player (listen server). Use this for host-only operations like session management.
{% endhint %}

---

### Is Dedicated Server

Returns true if the local peer is a dedicated server (no local player).

**Keywords:** `Dedicated`, `Server`, `Headless`, `Authority`, `Fusion`

{% hint style="info" %}
Dedicated servers run headless without a local player. Use this to skip player-specific logic on servers.
{% endhint %}

---

### Is Internet Reachable

Returns true if the internet connection is reachable.

**Keywords:** `Fusion`, `Server`, `Internet`, `Networking`, `Reachable`

---

## Lobby

### In Lobby

Returns true if peer is in a lobby session.

**Keywords:** `Fusion`, `In Lobby`, `Lobby`

---

## Authority Decision Tree

Use this flowchart to determine which authority check to use:

```
Need to modify networked state?
├── Yes → Check Has State Authority
│   ├── Shared Mode → Request authority if needed
│   └── Host/Server Mode → Only server can modify
└── No, need to send input?
    └── Check Has Input Authority

Running server-side logic?
├── Is it host-only? → Use Is Host
├── Is it server-only? → Use Is Server
└── Is it dedicated server? → Use Is Dedicated Server
```

{% hint style="success" %}
**Best Practice:** Always use the most specific authority check for your use case to ensure correct behavior across all Fusion topologies.
{% endhint %}
