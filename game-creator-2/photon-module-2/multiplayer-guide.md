---
description: Practical patterns for spawning, authority, shared state, scenes, and late joiners
---

# Multiplayer Guide

Reliable multiplayer comes from deciding which client owns a decision and where the lasting result is stored.

## Build one clear session flow

Keep connection and room state in one flow:

1. connect
2. wait for the connected Event
3. join or create a room
4. wait for the joined-room Event
5. spawn the local player
6. announce readiness with a player property
7. let the Master Client start the match

Disable repeated connect or join buttons while the operation is in progress. Use the failure Events to restore the UI and explain what happened.

## Spawn network objects correctly

Use **Photon Instantiate** for player-owned objects that every client must see. Use **Photon Instantiate Room Object** for objects that belong to the room rather than one player.

Do not use Unity Instantiate for shared objects. A local Unity object does not automatically exist on the other clients.

Before spawning:

* confirm the client is in a room
* confirm the prefab is in the Photon prefab list
* confirm every client has the same prefab and compatible package versions
* choose the owner that should control the object

Before destroying:

* confirm the local client owns the PhotonView or is the Master Client
* transfer or request ownership only when the object's rules allow it

## Separate input from presentation

Only the local owner should read input, aim, select targets, or initiate player Actions. Remote characters should receive synchronized movement and gameplay results.

Use **Photon Is Mine** or **Photon Is Owner** to guard owner-only logic. Use **Local Player** for this client's character and **RPC Sender** for the character that initiated a received network call.

## Choose where state lives

Use this rule:

| Type of information | Store or send it with |
| --- | --- |
| A temporary effect happening now | RPC |
| A player's team, readiness, score, or selection | Player property |
| The map, mode, round, objective, or match phase | Room property |
| A shared object that must exist for everyone | Photon network object |
| Continuous transform or character presentation | Photon synchronization component |

Avoid using a history of RPCs as a database. A property describes the current state directly and is easier for a late joiner to understand.

## Support late joiners

A late joiner does not see ordinary RPCs that finished before they arrived.

For correct late-join state:

1. Create persistent shared objects through Photon.
2. Store the current match phase and objective state in room properties.
3. Store player selections and readiness in player properties.
4. Apply those values when the player or room property Events run.
5. Spawn the player's character before equipping module-specific data.
6. Use buffered RPCs only for a small amount of replayable setup.
7. Replace or clear outdated buffered state when the setup changes.

{% hint style="warning" %}
Do not buffer frequent effects such as footsteps, damage numbers, aiming, or repeated movement Actions.
{% endhint %}

## Synchronize Game Creator modules

Photon Core synchronizes the common multiplayer layer. A local Action from another Game Creator module does not become networked automatically.

Use the matching Photon add-on for module state:

* Photon Stats for Stats
* Photon Shooter for Shooter
* Photon Melee for Melee
* Photon Inventory for Inventory
* Photon Abilities for Abilities

For custom gameplay, send the minimum required result through an RPC or property. Avoid running the same complete decision independently on every client.

## Change scenes

Let the Master Client choose the shared scene and use Photon scene synchronization. Keep compatible scenes at the same build index on every client.

Before loading:

* stop accepting new gameplay input
* store any state that must survive the transition
* make sure all required players have joined and are ready

After loading, wait until the network character and required room state are available before starting gameplay.

## Handle disconnects and authority changes

Use:

* **On Photon Disconnected** to return the player to a safe UI state
* **Photon Reconnect And Rejoin** when the session supports rejoining
* **On Photon Master Client Switched** to continue authority-dependent systems
* **On Photon Player Left Room** to clean up match UI and player-owned state

Do not assume the original Master Client remains for the whole match.

## Test the real multiplayer path

Test at least:

* two clients joining the same room
* room full and closed-room behavior
* owner and remote-player input
* network spawning and destruction
* player and room property updates
* the Master Client leaving
* a late joiner
* disconnect and rejoin
* a standalone build for every target platform

When debugging, display the cloud region, connection state, room name, actor number, ownership, player count, and room limit using Photon Core Properties.
