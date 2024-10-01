---
description: State Machine 2 Releases
---

# Releases

## 1.3.1 (1st October 2024)

* Addressed performance issues
* Refactored toolbar
* Added an option in toolbar to expand or collapse all nodes
* Added an option in State Machine settings to disable node inspector
* Disabled auto selection
* Fixed a null reference error in Run State Node instructions (Thank you Sinyiik)

## 1.3.0 (26th September 2024)

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

## 1.2.4 (21st Nov 2023)

{% hint style="warning" %}
Due to latest GC updates this version breaks compatibility with the previous versions.

In order to upgrade, be sure to backup your project(s) first and uninstall any previous version.
{% endhint %}

* Compatibility with latest Game Creator 2 version 2.13.45
* Fixed an issue where after state machine selection it wouldn’t refresh list of available variables&#x20;

## 1.2.3 (13th June 2023)

* Upgraded to Unity 2022.3 LTS
* Fixed issues with latest GC 2 update
* Updated State Machine variables system to match GC2's update
* Disabled game object or runner component will now prevent state machines to keep running

## **1.2.2 (19th May 2023)**

* Nodes will no longer lose their icon
* Fixed enable / disable nodes in graph
* Allow all node types to be picked
* Fixed an error when using Node Conditions in some cases
* Fixed title formatting on StateMachine Asset instructions
* Add new State Machine settings tab

## **1.2.1 (27th April 2023)**

* Fixed an issue with the Photon extension

## 1.2.0 (11st April 2023)

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

## **1.1.5** (26th March 2023)

* Fix for setters not allowing to change State Machine asset target

## 1.1.4 (26th March 2023)

* New: Added new demos to show how to use State Machine and State Machine Runner variables
* New: Tweaked the title of the StateMachine and added label with the path to make it easier to see what StateMachine asset is being edited
* Fix: Fixed issues with setting and getting SM and Runner variables
* Fix: Fixed bug with Groups and undo
* Fix: Fixed an issue where state machine fields where resetting after selecting the node preventing it from setting a different state machine asset

## 1.1.3

* FIX: Last GameCreator 2 version had some breaking changes, make sure to grab this update.

## 1.1.2

* New: Add documentation description for Trigger nodes that will show up in the node inspector
* New: Select All short cut. CTRL + A / CMD + A
* Fix: Some minor code cleanups and improvements

## 1.1.1

* FIX: Addressed few installation warnings and errors

## 1.1.0 (22th March 2023)

* NEW: Photon 2 integration
* NEW: Added new photon demo example package (Requires Photon Module 2)
* NEW: Added new instruction to run specific nodes from a runner
* NEW: Improved live debug visualization
* NEW: Added a title at the top right corner to show which State Machine is open
* FIX: Fix null reference when Trigger node updates
* FIX: Some set properties had wrong icons
* Some other minor internal improvements and tweaks

## 1**.0.2 (20th March 2023)**

* Fixed an issue preventing new State Machines from being opened outside the examples folder
* Fixed an error trying to access a non existent Method
* Re-organized packages folder structure

## **1.0.1 (20th March 2023)**

* Compile error fix

## 1.0.0 (19th March 2023)

* First release.
* Keep in mind this is a beta version, if there is any issues or missing feature please don't hesitate to contact me through my email or discord server.

