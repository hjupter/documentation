# Releases

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
