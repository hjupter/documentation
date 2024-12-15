# Changelog

## 0.3.6 (4th June 2022)

* **Fix** Room creation actions now will send properties for lobby, this fixes a problem where players were unable to join rooms with specific properties
* **Add** Room properties listed in lobby in Photon Info tab
* **Fixed** issues with demo scenes

## 0.3.4 (27th July 2021)

* **Improved** character movement synchronization
* **Improved** face and aim direction synchronizations
* **Added** new **room properties** option to **Create Room** action
* **Added** new **room properties** option to **JoinOrCreate** action
* **Added** new options to **JoinRandomRoom**
* **Added** a new option for **ListVariables** where it will store a list of Players game objects
* **Added** a new room with properties demo scene
* **Added** a new **Join Random Or Create Room** action
* **Added** a new **On Player Instantiate** trigger
* **Added** new **Stats** example module
* **Added** new simple RPC action
* **Added** new **OnChatOpen** and **OnChatClose** triggers
* **Added** new automatic sync character properties like:\
  **gravity, isBusy, detectCollisions** and **IK**
* **Updated** some icons
* **Fixed** an error with module initialization
* **Fixed** issues with initial character rotation and direction
* **Fixed** an issue were **Sync** option was not being saved properly on prefabs
* **Updated** support for newest Game Creator and PUN 2
* **Removed** some warnings on multiple scripts
* Cleaned up demos and prefabs
* Some minor bug fixes and code improvements

## 0.3.3 (25th February 2021)

* **Fixed** an error with **PUN 2.28**
* **Fixed** a bug in ListVariablesNetwork not initializing correctly for network instantiation
* **Added** new action to Set Player Number
* **Changed** Player Number condition to use the Numbering System from PUN
* **Changed** On Photon Player Property trigger invoker to be the Player who triggered the event
*   **Changed** On Photon Room Events trigger invoker to be the Player who triggered the event.

    This includes **On Player Entered Room**, **On Player Left Room** and **On Master Client Switched**

## 0.3.2 (10th February 2021)

* **Fixed** issue with Character animation sync

## 0.3.1 (25th January 2021)

* Updated support for PUN 2.27
* Updated support for GC 1.1.12
* Added new Join and Leave Lobby actions
* Added new PhotonLoadLevel action
* Added new Photon Offline mode action and condition
* Added new InLobby condition
* Added new target “LastJoinedPlayer” across all actions and conditions
* Added new On Scoreboard Leader which will trigger whenever a player gets to #1
* Added new Send and Receive data options. Is now possible to send and receive custom data from Photon Instantiate and RPC's
* Revamped Scoreboard and now made it part of the module as prefab
* Improved chat, player messages can now show up on top of players head. RoomChat prefab is now part of the module.
* On Photon Player Property trigger will now have the correct invoker = Player who triggered the event.
* Added new PhotonVariable action which will put any network property (player prop, room prop, etc) in a variable
* Added a Automatically Sync Scene action which will make other players match Master scene when use in combo with Photon Load scene
* Fixed sync issue with LocalVariables
* Fixed issues with some actions and conditions like JoinOrCreate room trying to access runtime value at editor time
* Fixed race condition where installing module throw some errors due to a missing Scripting Define Symbol
* Fixed error in actions network tab when selecting player as target
* Fixed typo in Photon Matchmaking trigger

## 0.2.7 (21th August 2020)

* Fixed a bug in CreateRoom action introduced in previous update

## 0.2.6 (18th August 2020)

* Updated support PUN 2.20.4&#x20;
* Fixed duplicated component triggering RPCs errors&#x20;
* Fast Play mode support&#x20;
* Added EmptyRoomTtl and PlayerTtl to create room actions

## 0.2.5 (18th July 2020)

* Fixed an issue LocalVariables Fixed ListVariables instantiation option not working properly
* Updated Instantiate and Game demo examples&#x20;
* Added variable support on the RPC action

## 0.2.4 (7th July 2020)

* Fixed an error with Stats integration that was introduced with previous update.

## 0.2.3 (6th July 2020)

* **NEW** List Variables GameObject type can be used for network instantiation.\
  This is useful to keep network prefab references out of resources or main binary.\
  GameIO scene has been updated to use this method.
* **Improved** Character face direction and position sync to be more smooth&#x20;
* **Fixed** LocalVariables sync issues
* **Fixed** an issue with module initialization
* **Fixed** an issue where OnPhotonInstantiate trigger would not execute&#x20;
* **Fixed** all settings for Character or ListVariables not saving when changing inside a prefab
* **Fixed** an issue when NavMeshAgent is disabled, force it to be enable when its needed
* **Updated** support for latest GC 1.1.9 and PUN 2.19.2

## 0.2.2 (2nd January 2020)

* **Added** Local Variables network sync
* **Fixed** issues with zones demo

## 0.2.1 (29th December 2019)

* **Added** PUN2 2.16 support
* **Added** Game Creator 1.1.2 support
* **Added** support for Unity 2019.3
* **Added** Actions to debug Player and Room variables
* **Added** new Action to change Room state (visible, open).
* **Added** new Condition to check Room state (visible, open).
* **Added** new Condition to check if Room Chat is open
* **Added** an option to store GameObject reference on PhotonInstantiate action.
* **Added** an option in OnPhotonInstantiate trigger to store the Owner(GameObject).
* **Added** new options on CharacterNetwork component that lets you specify what you need to synchronize on each character.
* **Added** new Is Connected and Ready condition.\
  &#xNAN;_&#x41; refined version of connected which is true only if your connection to the server is ready to accept operations like join, leave, etc._
* **Improved** how Characters move, rotate, dash and jump.
* **Improved** how Character and Stats are synchronized.
* **Improved** how Target types are cached for performance. \
  All actions, conditions and triggers has been updated to match this change.
* **Fixed** issues with new version of GC and cleaned up demos.
* **Fixed** an issue with Sync Actions not working correctly.
* **Updated** game demo scene which will show how to do the following things:
  * **Multi Zone Game:** Creating and joining rooms when switch between scenes/zones
  * **Random Character Selection**: Spawns a random character per player
  * **Random Spawn Point:** spawn player character by picking a random position from a GC List.
  * **Synchronized Actions:** shows how to sync an actions list and keep it in sync between players

## 0.1.4 (22th February 2019)

* **Added** PUN2 version 2.7 support
* **Added** Game Creator 0.8.2 support
* **NEW** Ping update functionality
  * A new option under settings has been added to update your ping to other players every certain time.
  * Photon Change Text Action has been updated to reflect these changes
* **NEW** Master Client switch functionality
  * Under options if this on Master Client can be switch if there is too much lag or master has client errors
* **NEW** CharacterNetwork now has built-in network culling. Read more [**here**](https://doc.photonengine.com/en-us/pun/current/demos-and-tutorials/package-demos/culling-demo)
* **F**IX some bug fixes on the Character Network and Stats Network component

## 0.1.3 (3rd December 2018)

* **Added** PUN2 version 2.5 support
* **Added** Game Creator 0.7.3 support
* **Fixed** other minor issues

## 0.1.2 (31th October 2018)

* **Added** PUN 2 version 2.4+ support
* **Added** Game Creator 0.7+ support
* Improved Network Items inspector and events
* **Fix:** better handling of **Stats** module when enabled.

## 0.1.1 (25th September 2018)

* **Unity Asset Store Release!**
* **Breaking Change:** We have replaced our [**PUN Classic**](https://assetstore.unity.com/packages/tools/network/photon-pun-classic-12080) library with the brand new [**PUN 2**](https://assetstore.unity.com/packages/tools/network/pun-2-free-119922) library. \
  Please read PUN 2 [**migration notes**](https://doc.photonengine.com/en-us/pun/v2/getting-started/migration-notes).
* **Added** support for new Game Creator [**Stats**](https://docs.gamecreator.io/stats/stats) module.
* **New** Network Destroy Action
* **Fixed** some random minor bug fixes

## 0.0.1 (5th July 2018)

* First private beta release on [itch.io](https://hjupter.itch.io/photon-network-for-game-creator?secret=Gg1WdyTmiJu8Z1zOg8RWNsHjSU).

