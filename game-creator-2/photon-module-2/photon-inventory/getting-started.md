---
description: Install Photon Inventory and configure a networked Bag
---

# Getting Started

## Install the dependencies

Install these packages in order:

1. Game Creator 2 Core 2.18.60
2. Game Creator 2 Inventory 2.8.23
3. Photon PUN 2.55
4. Photon Core 1.5.0
5. Photon Inventory 1.1

Open the **Game Creator Install** window and install Photon Inventory. Install the Inventory and Photon examples if you want to use the included demo scene.

{% hint style="info" %}
Game Creator's Install dependency list can resolve Photon Core and install-window subpackages, but not the separately imported base Inventory asset. Install exactly Inventory 2.8.23 before selecting Photon Inventory. Photon Inventory CI and the installer description enforce this requirement without inventing a dependency ID.
{% endhint %}

## Configure Photon

Follow Photon Core's [Getting Started](../getting-started.md) guide to set the Photon App ID, connect to Photon Cloud, create or join a room, and spawn a network player.

{% hint style="warning" %}
Do not use PUN Offline Mode as multiplayer validation. Test with two clients connected to the same Photon Cloud room.
{% endhint %}

## Configure the player prefab

On the same player GameObject, add:

* **Bag** from Game Creator Inventory
* **Photon View** from PUN
* **Bag Network** from **Game Creator > Photon > Inventory > Bag Network**

`Bag Network` requires both `Bag` and `Photon View`, so Unity adds missing required components automatically.

Spawn the prefab using Photon Core. The local instance should own its Photon View; the corresponding instance on the other client should be remote.

## Verify the setup

Use two standalone clients:

1. Join both clients to the same Photon Cloud room.
2. Add multiple copies of one stackable item to client A's local Bag.
3. Equip an item, attach a socket item, and change a currency on client A.
4. Confirm client B sees the same stack, equipment, attachment, and wealth on A's remote Bag.
5. Remove and drop items on client A and confirm client B's mirrored Bag count updates.
6. Join a fresh client after these changes and confirm it receives the current state.
7. Disconnect and rejoin client B and confirm the state is restored.

Enable **Log State Changes** on Bag Network if you need to see snapshot requests, sends, and applies in the Console.
