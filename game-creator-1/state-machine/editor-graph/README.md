# Editor Graph

The editor graph works and look pretty much like the Animator graph, this is the editor for the **State Machines** they are composed of nodes with **Actions**, **Triggers** and **Transitions** where you can add **Conditions.**

![Example of a Connection Manager which takes care of room creation and player instantiation](<../../../.gitbook/assets/image (78).png>)

## The State Machine asset

To create a Behavior Graph asset right click on your Project Panel and select **`Create → Game Creator → State Machine`**. You can name it however you want as well as place it anywhere.&#x20;

{% hint style="success" %}
I recommend creating a **`State Machines/`** folder at the root of your project and organize all your trees there.
{% endhint %}

{% hint style="success" %}
**State Machines** can be duplicated by simply selecting the SM asset and press **CTRL+D**
{% endhint %}

## The Controller

In order to **run** a **State Machine** you have to use a **State Machine Controller** component. You can add it manually to a Game Object or simply drag and drop a **State Machine asset** in an object this will auto-create a State Machine Controller and assign the State Machine reference.

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 10.07.05 PM.2021-02-13 22\_08\_01.gif>)

## The State Machine Graph Window

To bring up the StateMachine Graph window simply go to the top toolbar and select **`Window → State Machine`**. Alternatively, when you double click on a **State Machine** asset it will automatically open the window.

![(A state machine with a transition selected)](<../../../.gitbook/assets/image (49).png>)

## Live debugging

When playing Unity you can preview where the State Machine is currently running.

![](<../../../.gitbook/assets/image (14).png>)

## Context Menus

Once you right click somewhere in the Graph it will show a different context menu depending on what you have selected.

![](<../../../.gitbook/assets/Screen Recording 2021-02-12 at 1.15.00 PM.2021-02-12 13\_25\_48.gif>)

## Export

One neat feature of the State Machine is that you can easily export them to re-use them on other projects.&#x20;

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 7.44.38 PM.2021-02-13 19\_54\_54 (1).gif>)

{% hint style="info" %}
This option will package a SM in a Unity Package containing the SM with all its nodes, actions, conditions and triggers.
{% endhint %}
