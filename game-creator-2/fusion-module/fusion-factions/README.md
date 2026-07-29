# 🤝 Fusion Factions

Fusion Factions keeps Game Creator 2 faction state consistent in a Photon Fusion session.
It uses persistent Fusion snapshots, so a player who joins late or reconnects receives the
current state instead of only changes that happened after they connected.

It synchronizes:

* Member faction membership
* Member reputation points and derived reputation status
* Runtime Faction relationships
* Supported Faction variables
* Factions memory restores performed by State Authority

{% hint style="success" %}
[**Get Fusion Factions on the Unity Asset Store →**](https://www.ninjutsugames.com/go/fusion-factions?src=docs_fusion_factions_overview)
{% endhint %}

## Requirements

* Unity `6000.0.60f1` or `6000.3.14f1`
* [Game Creator 2 `2.18.60`](https://www.ninjutsugames.com/go/game-creator-2?src=docs_fusion_factions_requirement_gc2)
* [Photon Fusion `2.1.1 Stable Build 2177`](https://www.ninjutsugames.com/go/photon-fusion?src=docs_fusion_factions_requirement_sdk)
* [Fusion `1.4.0`](https://www.ninjutsugames.com/go/fusion?src=docs_fusion_factions_requirement_core)
* [Factions `1.2.0`](https://www.ninjutsugames.com/go/factions?src=docs_fusion_factions_requirement_factions)

Install and compile these dependencies before importing Fusion Factions.

## Install

1. Open **Window → Package Manager → My Assets**.
2. Download and import the latest Fusion Factions package.
3. Wait for Unity and the Fusion Weaver to finish.
4. Open **Tools → Fusion → Rebuild Prefab Table**.
5. To install the samples, use **Tools → Ninjutsu Games → Fusion Factions → Safe Install →
   Examples**.

The sample command uses Fusion Core's guarded dependency preflight. It verifies Factions 1.2.0
from `Assets/Plugins/NinjutsuGames/Packages/Factions/Editor/Version.txt` before changing the
project.

## Choose authority

Fusion Factions accepts changes only from the `NetworkObject` State Authority.

| State | Recommended authority |
| --- | --- |
| A player's Member and reputation | The player in Shared Mode; the host/server in Host or Server Mode |
| Global Faction relationships and variables | A scene object owned by the host, server, or Shared Mode master client |
| Saved Factions memory | Load it on the same peer that owns State Authority |

If an instruction changes a proxy, the component restores the replicated snapshot so that a
local-only change cannot remain out of sync.

## Add the components

* Add [**Member Network**](member-network.md) to every networked object with a Factions
  `Member`.
* Add [**Faction Network**](faction-network.md) to one persistent network scene object for
  every mutable Faction asset.

Both components require a Fusion `NetworkObject`. Every client must use the same Factions
catalogue and asset identifiers.

{% hint style="warning" %}
Do not add multiple authoritative Faction Network components for the same Faction asset.
Competing writers can overwrite one another.
{% endhint %}

## Late join and reconnect

Membership, reputation, relationships, and supported variables live in replicated snapshots.
Late joiners receive the current snapshot when their network objects spawn. Reconnecting players
receive it again after their objects are reconstructed.

If your game despawns player objects on disconnect, recreate the object first and then load or
assign saved Member state on State Authority.

## Upgrade

Existing `MemberNetwork` and `FactionNetwork` component references are preserved. Follow the
[1.0.1 upgrade guide](upgrade-from-1.0.1.md) to rebake prefabs, reinstall the example, and verify
your authority placement.

## Next

* [Member Network](member-network.md)
* [Faction Network](faction-network.md)
* [Upgrade from 1.0.1](upgrade-from-1.0.1.md)
* [Releases](releases.md)
