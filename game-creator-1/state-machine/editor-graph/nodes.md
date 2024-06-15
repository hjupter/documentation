# Nodes

By default **Action** and **Trigger** node types are generated with the name and icon of the first action or igniter/trigger selected. You can rename them as you like the name won't be changed unless it's empty.

## Start Node

When a **State Machine** is created it comes with a **Start Node** which it runs whenever the State Machine is executed. This special node is the same as an **Action Node.**

![](<../../../.gitbook/assets/Screen Recording 2021-02-12 at 1.01.45 PM.2021-02-12 13\_02\_58 (1).gif>)

{% hint style="info" %}
**Start Nodes** can be changed if it's needed. Just create a new **Action Node** then right click and set the new node as the **default node.**
{% endhint %}

{% hint style="success" %}
The **Invoker** target is always available in Start Node.
{% endhint %}

## Action Nodes

This type of node works the same way as a GC **Actions List** it can have as many actions as you like.

![](<../../../.gitbook/assets/image (71).png>)

{% hint style="info" %}
Once execution is completed it will move to the next **Transition** and **Action Node** if there is any.
{% endhint %}

## Trigger Nodes

Use triggers to execute specific action nodes.&#x20;

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 1.16.06 PM.2021-02-13 13\_17\_50.gif>)

{% hint style="info" %}
Keep in mind that in some triggers the target **Invoker** can be used like **On Player Enter.** There are other cases like **On Input Key** where there is no invoker in this case it is required to use the **Invoker** variable from the **State Machine.** [Click here to **learn more**](targets.md)
{% endhint %}

## Transition Nodes

Add transitions to move between **Action** and **Trigger** nodes. These transitions can have conditions if the conditions are met they will keep going. If no **conditions** are assigned they will simply go to the next node.

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 1.22.36 PM.2021-02-13 13\_24\_36.gif>)

{% hint style="info" %}
To **delete** transitions select it on the graph then select the transition you want to delete on the list in the inspector the click on the minus icon.
{% endhint %}

### Mute Transitions

Transitions can be disabled or turned off by enabling **Mute** toggle. This will make the State Machine ignore this transition.

![](<../../../.gitbook/assets/Screen Recording 2021-02-12 at 12.36.05 PM.2021-02-12 12\_39\_45.gif>)

## Sub-State Machine Nodes

It is possible create Sub-State Machines when another level of organization is needed. Transitions from action or triggers to sub-state machines are possible as well, this will popup a context menu to select where the transition should go.

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 10.45.54 PM.2021-02-13 22\_47\_23.gif>)

You can even drag and drop another State Machine and it will automatically create a copy and paste it as a Sub-State machine.
