# Releases

## 1.3.9 (25th October 2025) <a href="#id-139-25th-october-2025" id="id-139-25th-october-2025"></a>

**Fixed**

* Fixed network prop attachment synchronization bug (Thanks Tosh)
* Support for latest Game Creator version 2.18.58

## 1.3.8 (14th September 2025)

**New**

* Region selection tools — Select Best Region instruction and ping shown in dropdowns
* Tick timers — Stop TickTimer instruction
* NetworkCharacter — Addressable model support for character models
* Register Character Models instruction — Quickly register model prefabs for replication
* Network status & helpers — Conditions for session/internet status plus simple disconnect/shutdown checks
* Session & player data — Last player left, visibility/open checks, user ID and last joined player info
* Chat & authentication — Optional profanity filter and custom authentication; centralized auth settings
* Fail‑Safe system — Configurable protections against common runtime issues
* Error messages library — Curated, editable network message texts
* WebGL — Clipboard copy support
* Addressables

**Enhanced**

* Scene loading — Smoother transitions with clearer Start/Done events and fewer allocations
* Region selection — Auto‑best option, cleaned lists, improved ping detection and display
* Networking stability — Safer authority guards
* Pooling options — Can disable pooling per module; increased capacities where needed
* UI/UX — More reliable room chat, lobby control activations, clearer shutdown reasons and error messages
* NetworkSceneManager — Better orchestration for multi‑scene management

**Changed**

* Authority handling — Automatic ownership transfer when overriding authority; request authority for orphaned objects
* Spawning — Aligned Spawn and SpawnAsync behavior

**Fixed**

* Stability — Many null‑reference protections and safer error paths
* Scene, spawn & lifecycle — Reliable Spawned/Despawned events and player spawn/despawn; regressions addressed in NetworkSceneManager
* Chat & lobby — Robust initialization even if prefabs or addressables aren’t loaded; authentication method support
* Regions & ping — Edge‑case handling and invalid values; dropdowns show accurate ping
* WebGL & platform — Loading and Network Object Provider behavior; clipboard follow‑ups; compile/build fixes
* Authority & state — Correct dead‑state sync and facing on authority change; guard checks
* Addressables & errors — Better shutdown reason retrieval; auto‑release of handles; safer StartGameAsync and related flows

## 1.2.7 (29th December 2024)

* Support for latest Photon Fusion SDK 2.0.4
* Restructured the Start Game instruction to support loading scenes by string, enabling the use of scenes from Addressable bundles.
* The master client will now automatically take network authority over objects (with “Allow State Authority Override” enabled) when players leave the session.
* RPCs no longer require a player to be instantiated in order to call them
* **Added** an option in Fusion settings to specify a custom runner prefab. This is useful for cases where customization is needed, such as integrating the Fusion Physics addon.
* **Added** an option in Fusion settings to customize the default pool size for network-spawned objects.
* **Added** a new property to retrieve the network-synchronized input direction value from a character.
* **Added** new numeric properties to return the network simulation time, local render time, and the last server tick.
* **Fixed** an issue with Spawned and Despawned network object events
* **Fixed** an issue where the Local Player property did not return the correct object.
* **Fixed** an issue where the Player Username property did not return the correct value.
* **Fixed** an issue where RoomChat failed to initialize properly in certain cases.
* **Fixed** an issue where the NavMeshAgent failed to initialize correctly after being spawned in certain cases.
* **Fixed** multiple issues affecting NPC characters.
* Username is no longer stored in PlayerPrefs
* Updated demos

## 1.1.6 (30th October 2024)

* Fixed cached rpcs issue being interrupted by model change calls
* Fixed an error in NetworkCharacterEditor
* Fixed an issue in sub modules version manager
* Updated Fusion Uninstall to prevent removing sub modules

## 1.1.5 (21th October 2024)

* Unity 6 support
* Game Creator 2.51.17 support
* Added new NPC demo scene
* Added version in manager in settings
* Deactivate nested network objects instead of destroying
* Internal changes to prepare for upcoming sub-modules
* Bug fixes in NetworkCharacter to make NPCs work properly
* Added is master client bool and string properties
* Player ping is now exposed over the network
* Updated Network Character inspector at runtime

## 1.0.4 (1st October 2024)

* Fixed an issue with Single player mode
* Added single player demo
* Reverted a change that caused an order of events issue with cached RPCs
* Improved bone finding for network attachment props

## 1.0.3 (26th September 2024)

* Support for latest Fusion 2.0.3
* New Name Variables demo scene
* Reduced arrays and dictionaries limit capacity to reduce pre-allocated heap
* Added help urls to components
* Fixed an error when using attach props without adding them to fusion
* Fix for variables not replicating boolean states
* Fixed an issue in TickTimer scene
* Name Variables can now sync NetworkPrefabRef type
* List Variables now support vector 3 and NetworkPrefabRef
* Renamed Despawn instruction title
* Fixed an issue where fusion was deactivating non instantiated network objects instead of destroying them

## 1.0.2 (23th August 2024)

* Support for latest Fusion 2.0.2
* Improved attachment synchronization to work with different rigs
* Added setters for Network Prefab Ref
* Added new Set Network Prefab Ref instruction
* Added new is scene authority condition
* Added new load and unload scenes instructions for fusion
* Fixed some minor issues on demo scenes

## 1.0.1 (19th August 2024)

* **Breaking Change:** Fusion Character Controller Directional is no longer required to synchronize characters; only attaching the Network Character component is required.
* **New:** all other controller types like navmesh, rigidbody, tank, etc are now supported
* **Added** option to select Network Prefab Ref from variables in Spawn Player instruction
* **New** navmesh demo
* **Added** all demo scenes to map selection in lobby
* **Fixed** issue with Fusion Character Controller not setting up Network Transform properly
* **Renamed** component menu path on some network components
* **Renamed** disconnect game and lobby to shutdown game and shutdown lobby to avoid confussion
* **Added** max width to default chat bubble
* Updated all demo scenes

## 1.0.0 (19th August 2024)

First release.
