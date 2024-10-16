# Targets

When working with **targets** if you need to use **Invoker** this could be a problem on different situations this is the reason why **State Machines** have an auto-generated variable called **Invoker.**

To make your **State Machines** as much as re-usable as possible on some case you won't want to use **Player** as target.

## **Start Node Invoker**

Whitin a **Start Node** target type **invoker** can be used.

![](<../../../.gitbook/assets/image (74).png>)

{% hint style="info" %}
If **Start Node** has transitions to other nodes they will also be able to use the **Invoker** target.
{% endhint %}

## Trigger Targets

On some triggers like **On Tag Enter** the invoker would be whatever the object which triggered this.

![](<../../../.gitbook/assets/image (65).png>)

When using triggers like **On Key Down** these type of triggers doesn't have an **Invoker**, so in this case you would need to use the **Invoker** variable from the **State Machine** or use any other **Variable** created with the **Blackboard.**

![](<../../../.gitbook/assets/image (56).png>)
