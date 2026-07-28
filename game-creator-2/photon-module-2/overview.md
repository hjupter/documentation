---
description: Photon rooms, players, ownership, targets, and shared state
---

# Overview

Photon Core connects Game Creator's visual scripting to Photon PUN 2. Understanding a few multiplayer concepts will make the module much easier to use.

## Connection flow

A typical session follows this order:

1. Connect to Photon.
2. Wait for **On Photon Connected to Master**.
3. Join a lobby if your room browser needs one.
4. Create, join, or match into a room.
5. Wait for **On Photon Joined Room**.
6. Spawn the local network character.
7. Start room gameplay after every required player is ready.

Do not spawn a shared object before the client has joined a room.

## Players and rooms

### Player

Each client has one Photon player. Inside a room, Photon gives that player an actor number. Photon Core links the Photon player to its spawned GameObject so visual scripting can find the local player, the Master Client, the player who sent an RPC, or a player by actor number.

### Room

A room is the multiplayer session where players exchange gameplay messages. A client can only be active in one room at a time.

Room settings control its name, visibility, whether new players can join, and its player limit. Room properties hold shared match state such as the selected map, game phase, countdown, or winning team.

### Master Client

The Master Client is the current room authority selected by Photon. Use it for decisions that should happen once, such as starting a match, changing the scene, creating room-owned objects, or kicking a player.

The Master Client can leave. Handle **On Photon Master Client Switched** when authority must continue on the replacement client.

{% hint style="warning" %}
The Master Client is not a dedicated server. Do not treat it as protection against cheating.
{% endhint %}

## Ownership

Every network object with a PhotonView has an owner or controller.

* **Is Mine** checks whether the local client controls the PhotonView.
* **Is Owner** checks the selected object's owner.
* **Request Ownership** asks the current owner to transfer control.
* **Transfer Ownership** assigns control when the current rules allow it.
* **Photon Destroy** works for the owner or the Master Client.

Run player input and local-only decisions only on the locally controlled character. Remote characters should display synchronized results, not process the same input again.

## Self, Local Player, and RPC Sender

These references are intentionally different:

| Reference | Meaning |
| --- | --- |
| **Self** | The GameObject that owns the running Trigger or Actions |
| **Local Player** | This client's spawned network character |
| **RPC Sender** | The network character associated with the client that sent the current network call |
| **Master Client** | The spawned character associated with the current room authority |
| Event player output | The player supplied by events such as joined, left, spawned, or property updated |

{% hint style="warning" %}
When an RPC runs on another client, **Self does not automatically become that client's player**. Use **RPC Sender**, **Local Player**, or the event's player output for the role your logic needs.
{% endhint %}

## RPC targets

An RPC runs visual scripting on selected clients.

| Target | Who runs it | Common use |
| --- | --- | --- |
| **All** | The sender immediately and all other current clients | Effects everyone should see now |
| **Others** | All other current clients | Replicate something the sender already performed locally |
| **Master Client** | The current Master Client | Ask room authority to make one decision |
| **All Via Server** | Every current client in the same server order | Ordered shared events |
| **Buffered targets** | Current clients and players who join later | A small amount of setup that must replay |

Use buffered RPCs carefully. Replaying obsolete calls can restore old weapons, doors, or effects for a late joiner. Room and player properties are usually a better home for durable state.

The **Send State to New Players** option is for an RPC that is still running when someone joins. It does not replace saved room state after an Action has already finished.

## Player and room properties

Custom properties are named values synchronized by Photon.

### Player properties

Use player properties for values owned by one player:

* team
* ready state
* selected character
* score
* loadout identifier

### Room properties

Use room properties for values shared by the match:

* map
* game mode
* match phase
* round number
* timer start
* objective state

Use **Photon Has Player Property** or **Photon Has Room Property** before reading optional data. React to **On Photon Player Properties Update** or **On Photon Room Properties Update** when gameplay must respond to a change.

## Network time and timers

Photon Network Time gives every client a shared time source. Prefer a shared start timestamp or Photon Core's room timer tools over starting unrelated local timers on every device.

Only the Master Client should start authoritative room countdowns. Other clients should display the synchronized remaining time.

## Next steps

Continue with [Getting Started](getting-started.md), review the [Visual Scripting Reference](visual-scripting.md), or use the [Multiplayer Guide](multiplayer-guide.md) for production patterns.
