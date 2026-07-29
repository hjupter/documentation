---
description: Install Photon Melee 1.2 and prepare a network Melee character
---

# Getting Started

## Install in the supported order

Back up or commit the project, then install:

1. Game Creator 2 Core 2.18.60
2. Game Creator 2 Melee 2.2.14
3. Photon PUN 2.55
4. Photon Core 1.5.0
5. Photon Melee 1.2.0
6. Photon Melee Examples 1.2.0, if you want the Brawl and Sword samples

Use a Unity 6000.3, 6000.4, or 6000.5 final editor.

{% hint style="warning" %}
Melee 2 is a base Asset Store asset, not a Game Creator Install-window package.
Import it before Photon Melee. The installer cannot download that dependency for
you.
{% endhint %}

After Photon Core is installed:

1. Verify `Assets/Plugins/GameCreator/Packages/Melee/Editor/Version.txt` contains
   `2.2.14`.
2. Open **Game Creator → Install...**.
3. Install Photon Melee 1.2.0.
4. Install Photon Melee Examples 1.2.0 if you want the samples.

The Game Creator dependency schema checks the serialized Photon Core and example
Installer dependencies. It cannot declare the base Melee Asset Store package
because that package has no Installer ID. Photon Melee's installer shell validates
the exact Melee 2.2.14 marker before applying its compatibility seam.

## Configure Photon

1. Create or open a Photon PUN application in the [Photon
   dashboard](https://dashboard.photonengine.com/).
2. Open **Window → Photon Unity Networking → PUN Wizard**.
3. Save the Realtime App ID in Photon Server Settings.
4. Give both test clients the same App ID, App Version, and region.
5. Follow Photon Core [Getting Started](../getting-started.md) to connect, join a
   room, and spawn a network player.

## Prepare the player prefab

Keep these components on the same root object:

* Game Creator `Character`
* Photon `Photon View`
* Photon Core `Character Network`
* Photon Melee `Melee Network`

On the Photon View:

1. Add Character Network to **Observed Components**.
2. Add Melee Network to **Observed Components**.

On Melee Network:

1. Add every Melee Weapon that can be selected or equipped at runtime to
   **Synchronized Weapons**.
2. Enable **Synchronize Equipment**.
3. Enable **Synchronize Combo Selection**.

The included `Player_Melee_Brawl` and `Player_Melee_Sword` prefabs are complete
references.

{% hint style="danger" %}
Spawn the player with Photon Core's **Photon Instantiate** instruction or an
equivalent PUN network-instantiation flow. Unity's regular Instantiate instruction
does not create a networked PhotonView.
{% endhint %}

## First two-client test

1. Start client A and join a Photon Cloud room.
2. Start client B from a standalone build or supported clone.
3. Join the same room and confirm each client owns only its local character.
4. Equip and swap a weapon on A; confirm B sees the same weapon.
5. Test tap attacks, a held charge, and at least two combo branches.
6. Raise and lower guard; test the project's block/parry authority flow.
7. Start client C late or reconnect B and confirm current equipment and defensive
   state appear without another input.
8. Disconnect the current target and confirm stale targeting is cleared.

One Play-mode client or Photon Offline Mode is not multiplayer proof.

## Upgrade from 1.1.6

1. Back up the project and import clean copies of the supported dependencies above,
   including the exact Melee 2.2.14 package.
2. Install Photon Melee 1.2.0 from **Game Creator → Install...**. The installer
   replaces the 1.1.6 module folder and applies the audited Melee event seam.
3. Install Photon Melee Examples 1.2.0 from the same window if you use the samples;
   the installer replaces the 1.1.6 examples folder.
4. Confirm `CUSTOM_MELEE_EVENTS` is absent from scripting define symbols. The 1.2
   installer removes it automatically.
5. Populate Synchronized Weapons on every network character prefab.
6. Confirm Melee Network is observed by Photon View.
7. Rebuild Addressables or AssetBundles that include updated prefabs.

The Melee Network component type and script GUID remain compatible, so existing
prefab component references migrate in place. The new synchronization options
default to enabled.
