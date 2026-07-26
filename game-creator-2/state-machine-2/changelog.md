---
description: State Machine 2 Releases
---

# Releases

## 2.7.20 (26th July 2026)

#### New <a href="#new-2720" id="new-2720"></a>

* Is Running condition - Check whether a State Machine still has anything running, available for both a State Machine asset and a Runner
* Wait Until Complete option on Run State Machine Runner Node and Run Runner Node with Variables, so you can run nodes one after another instead of all at once

#### Fixed <a href="#fixed-2720" id="fixed-2720"></a>

* Node, group, and toolbar icons no longer disappear at random and stay blank until the State Machine window is reopened
* Installing State Machine into a project with a stock Game Creator now compiles straight away and applies its Game Creator patch on its own, instead of reporting an error that had to be fixed by hand first
* Calling a State Machine from another State Machine or an Actions component now runs it on the intended GameObject without losing the caller or its variables
* State Machines started from a UI Button or a Game Creator instruction now run with the current GameObject and variables instead of the ones from a previous run
* The Runner's "Node Is Running" condition now shows its own name in the condition list instead of appearing as a duplicate of "Node Is Enabled"
* On Disable nodes now run immediately and only once, matching other On Disable logic
* Loop List with Node now runs every item in order and correctly waits for nodes that take time to finish
* Changing the State Machine assigned to a Runner during play now cleanly switches to the new one
* Sticky note titles and descriptions can now be edited reliably in Unity 6, with moving, resizing, undo, and redo working as expected
* Trigger nodes can now be started from UI Buttons and Game Creator instructions
* Relay nodes now work after either result of a Conditions node
* Saving a runner now also remembers disabled nodes and whether the runner itself was enabled
* Nested State Machines now wait for their child machine to finish and no longer start twice accidentally
* Node selectors now list every node, even when several nodes have the same name or type
* Editing runner variables no longer creates partial names, duplicate empty entries, or restores deleted variables
* Docked State Machine windows no longer become blank or stop accepting edits after reloads
* Connection lines no longer jump to incorrect positions when moving nodes
* Improved recovery from damaged or incomplete State Machine data
* Existing Runner State Machines continue to work after upgrading
* Prefabs and variants now keep their own object assignments when saved and reopened
* Changing a direct object reference no longer causes errors in the State Machine window
* The Open a State Machine button now shows the project's State Machine assets correctly

#### Enhanced <a href="#enhanced-2720" id="enhanced-2720"></a>

* Added support for Unity 6.5, while keeping Unity 6.4 LTS supported
* Updated networking compatibility for Fusion 2.1.1
* State Machine assets now import and refresh faster
* Improved editor stability when graph windows remain open for long sessions
* Direct scene and prefab objects now appear automatically on the Runner, with no variables or extra setup
* A State Machine can be shared by many prefabs and variants while each keeps its own referenced objects
* The References section now matches the clear, familiar layout used by Runner variables
* Runner setup is simpler: assign a State Machine and choose its referenced objects
* The Runner clearly shows missing required references and explains assignments that cannot be saved
* Reference lists stay tidy when reference nodes are renamed, duplicated, or removed
* Runners wait to start until every reference marked Required has an object


## 2.6.19 (20th December 2025)

#### Fixed <a href="#fixed-2619" id="fixed-2619"></a>

* Compatibility with Unity 6.2 and earlier versions

## 2.6.18 (17th December 2025)

#### New <a href="#new-2618" id="new-2618"></a>

* Main Toolbar Button - Quick access button in Unity's main toolbar to open State Machine assets

#### Fixed <a href="#fixed-2618" id="fixed-2618"></a>

* "Couldn't find node with id" error when creating nodes via drag-and-drop
* Variable list corruption when adding/removing variables from the blackboard
* Graph window freezing when making frequent changes
* Memory cleanup issues when disposing nodes
* Serialization warnings for port classes when using \[SerializeReference]
* Play mode node views not updating correctly after domain reload

#### Enhanced <a href="#enhanced-2618" id="enhanced-2618"></a>

* Updated documentation
* Graph updates are now significantly faster and more responsive
* Improved variable synchronization between the blackboard and runner inspector
* Better testability support with new runner factory pattern
* Internal architecture improvements for future extensibility
* Added support for Unity 6.3 (6000.3.1f1+)

## 2.6.17 (5th October 2025)

* Support for Unity 6000.0.58+ (Added Pointer events)

## 2.6.16 (2nd August 2025)

#### New <a href="#new" id="new"></a>

* Play Button in Node Inspector - Test individual nodes directly from the editor during play mode
* Run State Machine Node Instruction - New Visual Scripting instruction to execute specific nodes with parameters
* Loop List with Nodes Instruction - New Visual Scripting instruction to loop a list with an specific state machine node
* State Machine Runner Instances System - Centralized tracking and access to active state machine runners
* Auto-Instantiate Feature - Configure state machines to automatically start at game startup in Settings
* Node Search Functionality - New search system with filtering
* Global Search Node - Find and navigate to specific nodes across graphs
* Dynamic Transition Lists - Node inspector lists that update when edges are added/removed
* Open State Machine Asset Button - Direct access to all existing state machine assets
* Stats Module Properties - Property support for state machine variables integration
* Melee Module Properties - Property support for state machine variables integration
* Shooter Module Properties - Property support for state machine variables integration
* Inventory Module Properties - Property support for state machine variables integration
* Quest Module Properties - Property support for state machine variables integration

#### Enhanced <a href="#enhanced" id="enhanced"></a>

* Improved Minimap - Persistent minimap state

#### Fixed <a href="#fixed" id="fixed"></a>

* Variable Duplication and Conflicts - Prevented duplicate variables and conflicts during operations
* Node Runner Self Reference - Corrected self reference handling in run runner node instructions
* Duplicate Connections - Resolved duplicate edge connection creation issues
* Network Settings - Corrected network settings for sub state machine nodes
* Runtime Node Issues - Resolved nodes being incorrectly disabled at runtime
* Zoom Issues - Prevented unwanted zoom when using mouse wheel in blackboard and node inspectors
* Memory Leaks - Eliminated various memory leaks in graph view and node management

## 2.5.15 (29th December 2024)

* Reduced editor cache memory allocations
* Improved editor load graph performance
* Added support for sub state machine variables
* Added new instruction to loop lists using a state machine node
* Added Melee state machine values
* Added an option to disable the State Machine database. This is useful when using Addressables and you want to prevent all State Machine assets from being included in the build.
* Improved fields alignment on expanded nodes inspector
* Fixed an issue where the node selection context menu did not appear for expanded nodes
* Fixed an issue where Target and Self were not returning the appropriate objects
* Fixed issues with network settings not showing up
* Fixed an issue where certain nodes were incorrectly marked as deactivated
* Fixed issues where variables were duplicated or removed in certain cases
* Prevent mouse events from propagating when interacting with nodes or blackboard
* Added “State Machine Runner” option to the Create menu
* Overall performance improvements
* Updated examples

## 2.4.14 (18th October 2024)

* Unity 6 support
* Game Creator 2.17.51 support
* Added version manager in settings
* Prevent errors when SM graph window is open while a build is being made
* Added null check to prevent nodes running when runner is destroyed

{% hint style="info" %}
Updated the version convention to what it should have been from the start, as this is the second version.
{% endhint %}

## 2.3.13 (11th October 2024)

* Persist single expanded nodes state
* Allow duplicate runners with embedded graphs within the scene
* Prevent errors when converting state machine runners to prefabs
* Added info message for embedded graphs indicating prefabs are still not supported
* Updated button states when runners are prefabs or have empty State Machines
* Expand icon not showing after reload or restart
* Reload open nodes when exit play mode to fix icon disapearing
* Fixed an issue where nodes won’t stay expanded when reloading the project
* Fixed null errors in State Machine Runner



## 2.3.12 (1st October 2024)

* Addressed performance issues
* Refactored toolbar
* Added an option in toolbar to expand or collapse all nodes
* Added an option in State Machine settings to disable node inspector
* Disabled auto selection
* Fixed a null reference error in Run State Node instructions (Thank you Sinyiik)

## 2.3.11 (26th September 2024)

{% hint style="warning" %}
In order to upgrade, be sure to backup your project(s) first and uninstall any previous version.
{% endhint %}

{% hint style="info" %}
**State Machine core is no longer a GC install package, so make sure to uninstall the previous version before installing this one.**
{% endhint %}

* **New** _Embedded graphs_ in State Machine Runners which allows to use scene references directly
* **New** options to open multiple State Machine windows at the same time
* **New** collapsable controls in nodes allowing to edit nodes without leaving the graph
* Added new Exit node
* Added new Relay node for organization purposes only
* State Machine node has output port which works with the exit node within the Sub State Machine
* Added new auto rename nodes feature (Nodes will be auto renamed to their current trigger event name, or first action if they don't have custom name)
* Moved triggers documentation to an info button in the header of the inspector
* Refreshed inspector visuals
* Changed colors of Trigger, Condition and Start nodes
* Increased minimum window size of State Machine graph
* Compatibility with latest Game Creator 2.16.50
* Added State Machine uninstaller
* Added help url to State Machine Runner component
* Added empty view when State Machine graph is empty
* Auto update active SM graph when selecting new asset in runner
* Cached input and output nodes for improved performance
* Updated lock and disabled icon views
* **Fixed** an issue where `Self` and `Target` wasn't being passed correctly through nodes
* **Fixed** issues when synching variables from the runner and the State Machine Asset
* **Fixed** a race condition where some times triggers would register and trigger more than once
* **Fixed** issues with Photon Module integrations and uptated the demo package
* **Fixed** an issue where it wasn't possible to rename nodes in Unity 6
* **Fixed** some issues with live debugging
* **Fixed** issues with misaligned lables in State Machine instructions and properties
* **Fixed** right click error on node connections
* A lot of code cleanups and improvements

## 2.2.10 (21st Nov 2023)

{% hint style="warning" %}
Due to latest GC updates this version breaks compatibility with the previous versions.

In order to upgrade, be sure to backup your project(s) first and uninstall any previous version.
{% endhint %}

* Compatibility with latest Game Creator 2 version 2.13.45
* Fixed an issue where after state machine selection it wouldn’t refresh list of available variables&#x20;

## 2.2.9 (13th June 2023)

* Upgraded to Unity 2022.3 LTS
* Fixed issues with latest GC 2 update
* Updated State Machine variables system to match GC2's update
* Disabled game object or runner component will now prevent state machines to keep running

## **2.2.8 (19th May 2023)**

* Nodes will no longer lose their icon
* Fixed enable / disable nodes in graph
* Allow all node types to be picked
* Fixed an error when using Node Conditions in some cases
* Fixed title formatting on StateMachine Asset instructions
* Add new State Machine settings tab

## **2.2.7 (27th April 2023)**

* Fixed an issue with the Photon extension

## 2.2.6 (11st April 2023)

#### New

* Added new basic AI demo
* Added support for LocalVariables List only certain types are supported
* Added support for Quest variables
* Added support for Inventory variables
* Added new Run Node instruction for State Machine Asset
* Added new Stop, Enable, Disable instructions
* Added new Running and Enabled conditions
* Added new WebGL demo
* Allow copy & paste from different projects and Unity versions
* Is now allowed to pick trigger, sub state machine and start nodes

#### Fixes

* Preven copy & paste of Start Nodes
* Disabled re-order variables in Blackboard window to prevent UI issues.
* Fixed an issue making difficult to rename a trigger node

## **2.1.5** (26th March 2023)

* Fix for setters not allowing to change State Machine asset target

## 2.1.4 (26th March 2023)

* New: Added new demos to show how to use State Machine and State Machine Runner variables
* New: Tweaked the title of the StateMachine and added label with the path to make it easier to see what StateMachine asset is being edited
* Fix: Fixed issues with setting and getting SM and Runner variables
* Fix: Fixed bug with Groups and undo
* Fix: Fixed an issue where state machine fields where resetting after selecting the node preventing it from setting a different state machine asset

## 2.1.3

* FIX: Last GameCreator 2 version had some breaking changes, make sure to grab this update.

## 2.1.2

* New: Add documentation description for Trigger nodes that will show up in the node inspector
* New: Select All short cut. CTRL + A / CMD + A
* Fix: Some minor code cleanups and improvements

## 2.1.1

* FIX: Addressed few installation warnings and errors

## 2.1.0 (22th March 2023)

* NEW: Photon 2 integration
* NEW: Added new photon demo example package (Requires Photon Module 2)
* NEW: Added new instruction to run specific nodes from a runner
* NEW: Improved live debug visualization
* NEW: Added a title at the top right corner to show which State Machine is open
* FIX: Fix null reference when Trigger node updates
* FIX: Some set properties had wrong icons
* Some other minor internal improvements and tweaks

## &#x32;**.0.2 (20th March 2023)**

* Fixed an issue preventing new State Machines from being opened outside the examples folder
* Fixed an error trying to access a non existent Method
* Re-organized packages folder structure

## **2.0.1 (20th March 2023)**

* Compile error fix

## 2.0.0 (19th March 2023)

* First release.
* Keep in mind this is a beta version, if there is any issues or missing feature please don't hesitate to contact me through my email or discord server.

