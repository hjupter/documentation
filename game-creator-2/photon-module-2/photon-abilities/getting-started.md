---
description: Install and configure Photon Abilities
---

# Getting Started

## Requirements

Import these Asset Store packages into the same Unity project:

1. [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_photon_abilities_setup_gc2) Core 2.18.60
2. [Abilities](https://www.ninjutsugames.com/go/abilities-2?src=docs_photon_abilities_setup_abilities) 2.0.1
3. [Photon PUN 2](https://www.ninjutsugames.com/go/photon-pun-2?src=docs_photon_abilities_setup_pun) 2.55
4. [Photon Module 2](https://www.ninjutsugames.com/go/photon-module-2?src=docs_photon_abilities_setup_core) / Core 1.5.0
5. [Photon Abilities](https://www.ninjutsugames.com/go/photon-abilities?src=docs_photon_abilities_setup_module) 1.1.0

In **Game Creator → Install**, install **Photon / Core** before
**Photon / Abilities**. Install **Photon / Abilities Examples** last if you want
the sample scene, Ability catalogue, and network character prefabs.

## Upgrade from 1.0.3

1. Back up the project.
2. Remove the old installed `Photon.Abilities@1.0.3` and
   `Photon.AbilitiesExamples@1.0.3` folders through the Install window.
3. Import Abilities 2.0.1 and Photon PUN 2.55.
4. Install **Photon / Core** 1.5.0.
5. Install **Photon / Abilities** 1.1.0.
6. Reinstall **Photon / Abilities Examples** last.

Do not copy new vendor files over an older Daimahou Abilities folder. A clean
Abilities import avoids stale scripts remaining beside 2.0.1.

## Configure the network character

On the root of every character prefab that Photon instantiates:

1. Add a Daimahou `Pawn`.
2. Add and configure the `Caster` feature on that Pawn.
3. Add a PUN `PhotonView`.
4. Add **Game Creator → Photon → Abilities → Pawn Network**.
5. Configure the same Ability assets and String IDs in every client build.
6. In every networked Ability, choose **Photon Synchronized Target** and place
   the Ability's previous targeting strategy in **Owner Targeting**.

The synchronization messages use the `PhotonView` on the same prefab root.
Existing 1.0.3 prefabs may keep `Pawn Network` in Observed Components for
serialization compatibility, but activation, target, slot, and snapshot updates
are sent through owner-validated RPCs.

## Configure Ability input

Choose **Photon Abilities Input** wherever the Abilities targeting setup asks for
an Ability input module. It reads the mouse, camera, and ground raycast only on
the owning client. Remote clients reuse the target sent by that owner.

**Photon Synchronized Target** is the network boundary for each Ability. Its nested
owner strategy can be Cast on Location, Direction, Crosshair, Closest Target, Self,
or another compatible Abilities targeting strategy. The owner runs that nested
strategy normally; remotes use the resolved target payload.

To migrate existing Ability assets, select them in the Project window and use
**Tools → Game Creator → Photon → Abilities → Wrap Selected Targeting for Photon**.
The companion **Restore Selected Owner Targeting** command reverses the wrapper.
Before uninstalling Photon Abilities, use **Restore All Targeting Before Uninstall**
from the same menu so project Ability assets no longer reference the add-on type.

See [Visual Scripting Reference](visual-scripting-reference.md) for the exact
title and category exposed by Photon Abilities.

## Connect and test

1. Configure the same Photon Realtime App ID in both clients.
2. Connect both clients to Photon Cloud and join the same room.
3. Instantiate the character prefab with Photon.
4. Cast location, direction, self, and network-object-targeted Abilities.
5. End and cancel a channeled Ability.
6. Learn and unlearn Abilities in non-zero slots.
7. Join after a cooldown has started and verify the remaining time.
8. Disconnect and rejoin, then verify stale casts do not continue.

The room must use `PhotonNetwork.OfflineMode == false`. An offline or single-client
run does not validate Photon Abilities synchronization.

## Confirm the installed version

Open:

`Assets/Plugins/GameCreator/Installs/Photon.Abilities@1.1.0/Version.txt`

The file must contain `1.1.0`. The optional examples marker is:

`Assets/Plugins/GameCreator/Installs/Photon.AbilitiesExamples@1.1.0/Version.txt`
