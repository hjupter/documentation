# 🌐 Photon Factions

Photon Factions synchronizes Game Creator 2 Factions state over Photon PUN 2.
Add its network components to the same object as the relevant `PhotonView`; the
view controller is authoritative for the shared state.

{% hint style="success" %}
[**Get Photon Factions on the Unity Asset Store →**](https://www.ninjutsugames.com/go/photon-factions?src=docs_photon_factions_overview)
{% endhint %}

## What it synchronizes

* Member faction membership and absolute reputation points
* Faction variables supported by Photon Core serialization
* Directed relationship stances, including hostility and alliance-style states
  defined by your Factions project
* Complete state for runtime-spawned objects, late joiners, and controller changes

The module contains two components:

* **Member Network** synchronizes the `Member` component on the same object.
* **Faction Network** synchronizes one selected Faction asset's variables and
  relationships.

Photon Factions does not add duplicate Instructions, Conditions, Events, or
Properties. Use the standard Factions visual-scripting actions; the network
components observe and replicate the resulting state.

## Compatibility

Photon Factions 1.1.0 is validated with:

* Photon Module 2 / Core 1.5.0
* Photon PUN 2.55
* Game Creator 2 Core 2.18.60
* Factions 1.1.3
* Unity 6.3 and Unity 6.4

Unity 6.5 is not claimed for this release because Factions 1.1.3 itself has an
editor compile error on that Unity line.

## Continue

* [Install and configure Photon Factions](photon-factions/setup.md)
* [Understand synchronization and ownership](photon-factions/synchronization.md)
* [Troubleshoot multiplayer state](photon-factions/troubleshooting.md)
* [Read the Photon Factions 1.1.0 release notes](photon-factions/releases.md)

<figure><img src="../../.gitbook/assets/image (123).png" alt="Photon Factions in the Game Creator Install window"><figcaption>Install Photon Factions after its required packages.</figcaption></figure>
