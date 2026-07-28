---
description: Fix common Photon Core connection, room, player, ownership, and late-join problems
---

# Troubleshooting

Start by checking the Console on every client. A problem may appear only on the owner, the Master Client, a remote client, or a standalone build.

## Players do not meet in the same room

Confirm both clients use the same:

* Photon App ID
* App Version
* cloud region
* room name
* scene and compatible package versions

Display **Photon Cloud Region**, **Photon Connection State**, and **Room Name** while testing. Two clients in different regions cannot see the same room.

## Connection or authentication fails

Use **On Photon Disconnected**, **On Photon Error Info**, and **On Photon Custom Authentication Failed** to capture the result.

Check:

* the Realtime App ID is valid
* the Photon application is enabled
* the client has internet access
* custom authentication settings match the Photon dashboard
* the selected region is available to the application

Use **On Photon Region List Received** when presenting or logging available regions.

## An Action runs only locally

A normal Game Creator Action is local by design. Add **Actions RPC** or **Trigger RPC**, confirm the object has a PhotonView, and choose the intended RPC target.

If the sender already performed the effect locally, use **Others** to avoid running it twice on that client.

## The wrong player is affected

Check the selected reference:

* **Self** is the object running the visual scripting
* **Local Player** is this client's character
* **RPC Sender** is the character associated with the client that sent the call
* an Event's player output is the player involved in that Event

Do not assume Self becomes the sender on remote clients.

## A late joiner is missing state

Move lasting values into player or room properties. Apply them when the matching property update Event runs and when the late joiner finishes spawning.

Use buffered RPCs only for replayable setup. **Send State to New Players** only helps while that RPC is still running.

## A room property does not update gameplay

Confirm:

* the property name uses the same spelling and capitalization everywhere
* **Photon Has Room Property** succeeds before reading an optional value
* **On Photon Room Properties Update** listens for the intended property
* only the intended authority writes the property

Use player property tools instead when the value belongs to one player.

## Kick Player does nothing

Run **Photon Allow Kicking Players** first. Only the Master Client can kick another player. Confirm the selected target is not the local Master Client.

## A network object cannot be destroyed

The local client must own the PhotonView or be the Master Client. Check **Photon Is Mine** or **Photon Is Owner** before using **Photon Destroy**.

If an ownership request fails, handle **On Ownership Transfer Failed** and keep the current owner unchanged.

## Room timers disagree

Let the Master Client start the room timer and display the shared Photon time on every client. Do not start unrelated local countdowns on each device.

Check that the room exists before reading elapsed or remaining time.

## Remote movement or models look wrong

Confirm:

* only the local owner processes input
* the player prefab has the required Photon Core character component
* all clients use the same prefab and model list
* every client has compatible Game Creator and Photon module versions
* module-specific components are installed for Stats, Shooter, Melee, Inventory, or Abilities

## It works in the Editor but not in a build

Test that:

* network prefabs are available to the build
* required scenes are in Build Settings in the same order
* every package compiled for the target platform
* the build uses the same App ID, App Version, and region
* stripping or platform settings did not remove required content

Always test two standalone clients when the target platform allows it.

## Still need help?

Join the Photon Module channel in the [Game Creator Discord server](https://discord.com/invite/99bbWBzKDX). Include:

* Unity version
* Game Creator Core version
* Photon PUN version
* Photon Core and add-on versions
* Console errors from the affected client
* whether the issue happens in the Editor, a build, or both
* the exact connection, room, and spawning steps
