---
description: Synchronize Game Creator 2 Shooter combat with Photon PUN 2
---

# 🔫 Photon Shooter

Photon Shooter synchronizes the Shooter 2 combat state of a network character. The
PhotonView owner publishes its equipped weapon, target, sight, magazine, trigger, reload,
jam, and lean values; remote players apply that state to their local representation.

{% hint style="success" %}
Photon Shooter 1.2 supports Unity 6.3 LTS, Unity 6.4, and Unity 6.5 with Photon Core 1.5,
Photon PUN 2.55, Game Creator Core 2.18.60, and Shooter 2.2.7.
{% endhint %}

## What is synchronized

* Equipped Shooter weapon, identified by its stable Shooter weapon ID
* Weapon swaps and explicit unequip operations
* Current combat target, including clearing a target
* Active sight
* Magazine count
* Pull, release, reload, and jam state
* Human Shooter lean amount and decay
* Full owner snapshots for players who join after a weapon was equipped

Photon Shooter accepts state only from the PhotonView owner. If the player prefab or its
equipment arrives after a state message, the component waits for the matching weapon and
then applies the snapshot.

## Requirements

| Package | Required version |
| --- | --- |
| Unity | 6.3 LTS, 6.4, or 6.5 |
| Game Creator 2 Core | 2.18.60 or newer |
| Game Creator 2 Shooter | 2.2.7 or newer compatible release |
| Photon Unity Networking 2 | 2.55 |
| Photon Core | 1.5 or newer |
| Photon Shooter | 1.2 |

Import Photon PUN, Game Creator Core, and Shooter through their supported package channels.
Install Photon Core and Photon Shooter through the **Game Creator Install** window. Do not
manually merge versioned package folders under `Assets/Plugins/GameCreator/Installs`.

## Settings ownership

Photon Shooter does not add a **Game Creator > Settings** panel because it has no project-wide
defaults of its own:

* Photon Core owns network rates and player defaults.
* PUN's `PhotonServerSettings` owns the App ID and connection configuration.
* Shooter weapon assets and visual scripting own fire, projectile, ammo, reload, and hit rules.
* The player prefab owns its `PhotonView` observed-components list.

Shooter Network keeps one fixed synchronization and owner-authority contract for every client.
The module does not serialize an App ID, API key, access token, or other secret. The package
repository keeps all tracked `PhotonServerSettings` App ID fields blank; automated Cloud
validation provides its protected Realtime App ID only to the running validation processes,
not to compile, export, or build steps. Since Photon Shooter creates no settings repository or
asset, upgrade and uninstall cannot leave behind a Shooter-owned settings file.

## Start here

1. Follow [Getting Started](getting-started.md) to configure the player prefab.
2. Read [Synchronization and Authority](synchronization-and-authority.md) before adding
   equip, swap, fire, reload, projectile, hit, or reconnect logic.
3. Use the [Visual Scripting Reference](visual-scripting-reference.md) to match the titles
   in Shooter 2.2.7 and understand which values Photon Shooter observes.
4. Check [Troubleshooting](troubleshooting.md) when remote equipment or combat state differs.

{% hint style="success" %}
Try the [Photon Shooter browser demo](https://hjupter.itch.io/photon-shooter-2).
{% endhint %}

## Get Photon Shooter

[Get Photon Shooter 2 on the Unity Asset Store](https://www.ninjutsugames.com/go/photon-shooter?src=docs_photon_shooter_overview).

For support, join the Photon Module channel in the
[Game Creator Discord server](https://discord.com/invite/99bbWBzKDX).
