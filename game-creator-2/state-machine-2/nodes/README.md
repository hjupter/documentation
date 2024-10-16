# Nodes

There are multiple types of nodes that you can use in the State Machine 2

## Entry Node

This node is entry point of the State Machine graph, it will be executed when the state machine is started. This node can also run actions.

This only have one output but can be connected to any node except a trigger.

<img src="../../../.gitbook/assets/image (61).png" alt="" data-size="original">

{% hint style="info" %}
This node can't be deleted
{% endhint %}

## Trigger Node

This node can trigger any type of event including collision events. This has one output which can be connected to any node that has vertical input.

![](<../../../.gitbook/assets/image (101).png>)

## Actions Node

This node can run actions, can receive input from any other type of node

![](<../../../.gitbook/assets/image (51).png>)

## Branch Node

This node can run a single branch which is a combination of conditions and actions, that output will only execute if the conditions are not met.

![](<../../../.gitbook/assets/image (48).png>)

## Conditions Node

This node can run conditions, it has an horizontal input for any other node, a vertical input for triggers only and two outputs, one for when conditions are met and another when they are not.

![](<../../../.gitbook/assets/image (67).png>)
