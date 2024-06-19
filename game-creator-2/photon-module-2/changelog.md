---
description: Photon Module 2 Releases
---

# Releases

## v1.3.6 (Jun 19th 2024)

* New Set Offline Mode instruction
* Photon Instantiate event will pass the proper target object
* Added new Color Ping property
* Added new number properties Player Number, Ping and Score
* Added new Player Spawned and Despawned events
* Floating text will now pass the proper target object
* Changed room chat component colors to GC properties

## v1.3.5 (Dec 23th 2023)

* Updated demos

## v1.3.4 (Nov 14th 2023)

* Support for Game Creator 2 version 2.13.45
* Added sprite field to photon models list
* Updated demos

## v1.3.3 (Sep 9th 2023)

* Support for latest GC 2 version
* Support for latest Ready Player Me SDK
* Updated demos

## v1.3.2 (June 14th 2023)

* Fixed issues with latest GC2 update
* Added new Preload Avatars instruction for Ready Player Me
* Updated demos

## v1.3.0 (May 17th 2023)

#### New

* Room Chat component
* ReadyPlayerMe support
* Change Model network synchronization
* Local and Global List Variables Network component, lists can be use for Player List, Network Instantiation or Synchronize their values through the network.
* New floating UI text system
* New Character Selection demo
* New SyncScene demo
* New Photon Models List component to be able to sync model changes
* Teleport if player is too distant from its real position
* New Player Count getter
* New UnitPhotonDirectional for remote players and changed how position is sync
* Unity Random seed synchronization
* New InputReference
* New Getters Last Chat Player and Last Message from Player
* New Is Message Queue Running instruction
* New Don't Destroy On Load instruction
* New Condition Photon State

#### Enhanced

* Reset kernel facing and player when master client switches
* Sync when vertical speed is reset
* Improved position and rotation synchronization
* Photon Player Name getter will return local set nickname if no target is set
* Changed PhotonLoadLevelIndex to use Scene getter from GameCreator instead

#### Fixed

* Prevent RPC and LocalNameVariablesNetwork to execute network calls when not in a room
* Fixed issues initializing NetworkManager
* Fixed an issue resetting player making unable to perform certain actions after viewing a character inspector
* Fixed issues with Player and Room name getters
* Fixed another issue with VisualScriptingNetworking component
* Fixed a null ref issue with TriggerRPC and ActionsRPC
* Fixed an issue with Photon Instantiation variables
* Fixed issues with track and untrack objects

## v1.2.2

* Fixed a bug with latest GC2 update

\
v1.2.1
------

* Fixed an issue with RPC's not initializing correctly

## **v1.2.0 (March 27th 2023)**

* **NEW** Character attachments synchronization
* **NEW** Photon Attachment component
* **NEW** Update demo scene with an attachment see it in action, also update live demo.
* **NEW** Request Ownership instruction
* **NEW** OnOwnershipRequest event
* **NEW** OnOwnershipTransfered event
* **NEW** OnOwnershipFailed event
* **NEW** Is Owner condition
* Fixed some internal issues with the Visual Scripting Network components
* Updated some property icons
* Updated to latest Game Creator 2
* Updated to Unity 2021.3.20f1



## **v1.1.0**

* **New** Local Name Variables synscronization
* **New** Global Name Variables synscronization
* Improved facing direction syncronization to work with any type of character configuration
* Fixed an issue with VisualScriptingNetworking not cleaning up properly
* Fixed issues with ragdoll sync
* Is Mine will no longer throw an error if the Game Object doesn't have a Photon View
* Fix rotation issue for NPCs\


## **v1.0.2**

* Fixed an issue prevent builds to run properly
* Updated WebGL demo



## **v1.0.1**

* Fixed issues with RPCs not running on builds
* Added new OnPhotonInstantiate event
* Improved PhotonInstantiate and InstantiateRoomObject instructions to accept both Local and Global name variables
* Updated WebGL demo
* Known Issues: Player nickname are not showing in builds, this will be fixed in the next update coming soon.

## 1.0.0 (2nd March 2023)

* First release.
* Keep in mind this is a beta version, if there is any issues or missing feature please don't hesitate to contact me through my email or discord server.

