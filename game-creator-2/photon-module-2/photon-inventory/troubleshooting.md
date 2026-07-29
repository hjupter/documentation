---
description: Diagnose Photon Inventory setup and synchronization
---

# Troubleshooting

## The remote Bag never updates

Check that:

* Both clients are in the same Photon Cloud room and PUN Offline Mode is false.
* The player was spawned as a Photon network object.
* `Bag`, `Photon View`, and `Bag Network` are on the same GameObject.
* The local player owns its Photon View.
* Inventory changes execute only on that owner.

Enable **Log State Changes** and look for a request on the remote instance, followed by a send on the owner and an apply on the remote.

## A late joiner sees an empty Bag

Confirm the owner is still connected and its network player exists when the late joiner enters. The remote instance must know the current Photon View owner before it can request state.

If your room logic destroys and respawns players during scene changes, wait for Photon Core to recreate the network player before reading the Bag.

## The wrong duplicate item is equipped or attached

Upgrade to Photon Inventory 1.1. It preserves per-runtime-item identifiers and state. Earlier item-type messages could not distinguish multiple instances of the same Item asset.

## A dropped item disappears from the Bag but not from the world

Bag removal and the dropped prop are separate concerns. Photon Inventory synchronizes the Bag removal. Spawn or synchronize the world prop with Photon Core if every client must see it.

## A shared chest is overwritten

Only the current Photon View owner should change the chest Bag. Route chest operations to that owner and define what happens when the Master Client or owner changes.

## Information to include with a support request

Include:

* Unity version
* Game Creator Core and Inventory versions
* Photon PUN, Photon Core, and Photon Inventory versions
* Whether the issue occurs in the Editor, a standalone build, or both
* Which client owns the affected Photon View
* Whether a fresh late join and disconnect/rejoin show the same result
