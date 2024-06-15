# Changelog

## 0.2.3 (10th August 2021)

* **Fixed** bug prevent Local Variables popup to show when clicking inside the State Machine
* **Fixed** issues with some of the State Machine demos due to the order of execution of the scripts

## 0.2.2 (30th July 2021)

* **Fixed** issues when adding new blackboard variables and not appearing in the list
* **Fixed** an issue when renaming a blackboard variable would not update the list immediately&#x20;
* **New** State Machine Controller variables will now be ordered by the same order of the blackboard list

## 0.2.1 (5th May 2021)

* **Added** new shortcut keys to create Actions (A) and Triggers (T)
* **Added** new shortcut key to create a transition pressing T when have a state selected or mouse over
* **Added** color to transitions with conditions
* **Added** new Lights demo
* **Added** new AI demo
* **Added** minor performance improvements
* **Added** the missing up node when copy\&paste a sub-state machine
* **Added** new comments feature to states
* **Added** a new feature to copy and paste conditions from the list menu
* **Added** better handling of nodes without names
* **Added** new Variable Change demo
* **Updated** patrol demo scene
* Moved examples prefabs to their own folder to prevent losing your own State Machine prefabs when disabling the Examples module&#x20;
* **Fixed** cancel transition if mouse is up outside of the canvas
* **Fixed** allow to make the action transition only if mouse position is on the empty canvas
* **Fixed** variable not being updated in the State Machine Controller
* **Fixed** an issue when creating variables in the Blackboard would delete actions
* **Fixed** an issue when deleting transitions from list menu
* **Fixed** triggers being removed if new variable was removed
* **Fixed** disabled Export button on Sub-SMs
* **Fixed** got rid of auto select SM annoying behavior
* **Fixed** an issue with State Machine initialization
* **Fixed** issues with Local and List Variables with State Machine
* **Fixed** some issues with transitions selection
* **Fixed** transition mode will now be included when copy & paste
* **Fixed** issues when duplicating State Machines
* **Fixed** up node when copy & pasting a state machine
* **Fixed** drawing of transitions for some specific cases
* **Fixed** issues when drag and drop scene actions/conditions/triggers to a State Machine
* **Fixed** bug when adding Trigger at runtime
* **Fixed** random delete issue
* **Fixed** ListVariable invoker from State Machine
* **Fixed** get & set SM variables from outside

## 0.1.3 (1st March 2021)

* **Added** the ability to preview and edit colliders from the State Machine
* **Added** the ability to **drag & drop Action, Conditions and Triggers** from the **Scene** to a State Machine
* **Added** a new option in State Machine Controller inspector called **Override Collider Values**&#x20;
  * If set to **false** you will be able to have custom collider values per SM Controller
  * If set to **true** changing the values in controller collider will change the values in the State Machine
* **Added** new **Transition Mode** which gives you two options to run transitions:
  * **Parallel:** All transitions are executed at once.
  * **Selective:** Tries executing the first transition if its not successful it will continue. \
    This useful for If/Else cases.
* **Added** new shortcut to make transitions. Press the key **T** with a node selected or mouse over and it will start making a transition.
* **Added** new way to cancel Transition making by pressing the key **ESC**
* **Added** when making a transition clicking on the Canvas it will auto create an **action node.**
* **Added** new Door demo
* **Fixed** any missing monobehavior will get automatically cleaned up from the StateMachine
* **Fixed** create or pasting nodes was not being place in the center of mouse position.
* **Fixed** issues with **Triggers** that needs **Colliders**
* **Fixed** issues with **Blackboard** variables
* **Fixed** breaking changes when trying to **Undo** any change

## 0.1.2 (25th February 2021)&#x20;

* **Added** the ability to drag the canvas with middle mouse button
* **Fixed** a bug preventing Windows users to right click and see context menu
* **Fixed** demo examples

## 0.1.1 (15th February 2021)

* First release.

