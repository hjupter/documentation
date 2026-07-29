---
description: Authority, late join, reconnect, and shared Inventory guidance
---

# Ownership and Synchronization

## The Photon View owner writes

Bag Network uses the Photon View owner as the authority for that Bag:

* The owner observes local Inventory changes and publishes snapshots.
* Remote clients accept snapshots only from the current owner.
* Remote Bag changes are mirrors and are not sent back to the owner.

Run Inventory Instructions on the owning client. If input can execute on every client, guard it with Photon Core's ownership Conditions or route the request to the owner first.

## Late join

When a player enters the room, existing owners send their current Bag snapshots to that player. A remote Bag also explicitly requests a snapshot from its owner when it starts or joins a room.

Late join therefore includes current items and state, not just future changes.

## Disconnect and rejoin

After reconnecting and joining the room again, remote Bag instances request fresh owner snapshots. Do not treat cached local remote state as authoritative.

The Photon room and player prefab must exist again before a Bag can recover. Use Photon Core for connection, room rejoin, and network-player spawning.

## Ownership transfer

When Photon View ownership changes:

* The new local owner publishes its current state.
* Other clients reset their snapshot sequence and request the new owner's state.

Decide which client is allowed to take ownership of shared containers before enabling transfers. For Master Client-owned chests, transfer or recreate ownership deliberately when the Master Client changes.

## What causes synchronization

Bag Network observes:

* Bag content changes such as add, remove, drop, and stack changes
* Runtime item property changes
* Socket attachment changes
* Equipment, wealth, shape, and cooldown state captured with the next snapshot

Related changes in one frame are coalesced into one snapshot.

{% hint style="info" %}
Photon Inventory synchronizes Bag state. Use Photon Core network spawning and ownership for world objects created by an Inventory action, including dropped item props.
{% endhint %}
