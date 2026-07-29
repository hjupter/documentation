---
description: Install and configure Photon Stats
---

# Getting Started

## Requirements

Install these Asset Store packages into the same Unity project:

1. [Photon PUN 2](https://www.ninjutsugames.com/go/photon-pun-2?src=docs_photon_stats_setup_pun) 2.55
2. [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_photon_stats_setup_gc2) Core 2.18.60
3. [Stats 2](https://www.ninjutsugames.com/go/stats-2?src=docs_photon_stats_setup_stats) 2.6.23
4. [Photon Module 2](https://www.ninjutsugames.com/go/photon-module-2?src=docs_photon_stats_setup_core) / Core 1.5.0
5. [Photon Stats](https://www.ninjutsugames.com/go/photon-stats?src=docs_photon_stats_setup_module) 1.2.0

Open **Game Creator → Install** and install **Photon / Core** before
**Photon / Stats**. Install **Photon / Stats Examples** if you want the complete
sample scene and network character prefab.

## Configure the network character

On the root of every character prefab that Photon instantiates:

1. Add or configure the Game Creator `Traits` component and choose its Class.
2. Add a PUN `PhotonView`.
3. Add **Game Creator → Photon → Stats → Traits Network**.
4. Keep the same Class, Stat IDs, Attribute IDs, formulas, and Status Effect assets
   on every client build.

`Traits Network` sends RPCs through the `PhotonView`; it does not need to be added
to the PhotonView's Observed Components list.

## Register Status Effects

Every synchronized Status Effect must be listed in **Project Settings → Game
Creator → Stats → Status Effects** on every client. The String ID must match in
all builds.

{% hint style="warning" %}
An effect that exists as an asset but is missing from the Stats repository cannot
be resolved from its network ID. Photon Stats logs a warning and ignores that
effect instead of applying the wrong asset.
{% endhint %}

## Connect and test

1. Configure the same Photon Realtime App ID in both clients.
2. Connect to Photon Cloud and join the same room.
3. Instantiate the character prefab with Photon.
4. Change a Stat, Attribute, and Status Effect on the owning client.
5. Confirm the remote client receives the changes.
6. Join a second client after values have changed and confirm it receives the
   complete snapshot.

The room must use `PhotonNetwork.OfflineMode == false`. An offline or single-client
run does not validate network synchronization.

## Confirm the installed version

Open:

`Assets/Plugins/GameCreator/Installs/Photon.Stats@1.2.0/Version.txt`

The file must contain `1.2.0`. The optional examples have their own marker at:

`Assets/Plugins/GameCreator/Installs/Photon.StatsExamples@1.2.0/Version.txt`
