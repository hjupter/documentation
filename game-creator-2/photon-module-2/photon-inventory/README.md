---
description: Synchronize Game Creator 2 Inventory bags with Photon PUN 2
---

# 📦 Photon Inventory

Photon Inventory synchronizes Game Creator 2 Inventory bags over Photon PUN 2. The player who owns the bag's Photon View is authoritative; other clients receive the complete current bag state.

{% hint style="success" %}
Photon Inventory 1.1 supports Unity 6.3 LTS, Unity 6.4, and Unity 6.5 with the validated package baseline: Game Creator 2 Core 2.18.60, Inventory 2.8.23, Photon PUN 2.55, and Photon Core 1.5.0.
{% endhint %}

## What it synchronizes

* Items, stacks, and each runtime item's properties
* Equipment and unequipment state
* Socket attachments
* Wealth and currencies
* Bag shape and size
* Item cooldowns
* Current state for late joiners and reconnecting players

## Start here

1. Follow [Getting Started](getting-started.md) to install the packages and configure a networked Bag.
2. Read [Ownership and Synchronization](ownership-and-synchronization.md) before changing Inventory state.
3. Use the [Bag Network Reference](bag-network-reference.md) for the complete Photon Inventory surface.
4. Check [Troubleshooting](troubleshooting.md) if clients do not show the same bag state.
5. Review [Releases](changelog.md) when upgrading an existing project.

{% hint style="info" %}
Photon Inventory adds a single component named **Bag Network**. Continue using the Instructions, Conditions, Events, and Properties supplied by Game Creator Inventory; Bag Network synchronizes the resulting owner-side Bag state.
{% endhint %}

## Requirements

| Package | Required version |
| --- | --- |
| Unity | 6.3 LTS, 6.4, or 6.5 |
| Game Creator 2 Core | 2.18.60 |
| Game Creator 2 Inventory | 2.8.23 |
| Photon Unity Networking | 2.55 |
| Photon Core | 1.5.0 |

Get [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_photon_inventory_setup_gc2), [Inventory 2](https://www.ninjutsugames.com/go/inventory-2?src=docs_photon_inventory_setup_inventory), [Photon PUN 2](https://www.ninjutsugames.com/go/photon-pun-2?src=docs_photon_inventory_setup_pun), [Photon Module 2](https://www.ninjutsugames.com/go/photon-module-2?src=docs_photon_inventory_setup_core), and [Photon Inventory 2](https://www.ninjutsugames.com/go/photon-inventory?src=docs_photon_inventory_setup_module).

{% hint style="danger" %}
Install Photon Inventory through the **Game Creator Install** window. Do not manually extract its package into a `Plugins` folder.
{% endhint %}

Try the [browser demo](https://hjupter.itch.io/photon-inventory-game-creator-2) or [get Photon Inventory 2 on the Unity Asset Store](https://www.ninjutsugames.com/go/photon-inventory?src=docs_photon_inventory_overview).

## Support

Join the Photon Module channel in the [Game Creator Discord server](https://discord.com/invite/99bbWBzKDX). Include your Unity, Game Creator Core, Inventory, Photon PUN, Photon Core, and Photon Inventory versions when reporting a problem.
