---
description: Targets, Enemies, Goals and all you can think of!
---

# Blackboard

**State Machine Graphs** can not reference scene objects due to living in the Project Panel. To overcome this, we've created the **Blackboard**, where the developer writes down the input fields he/she'll need and these are filled at runtime.

![](<../../../.gitbook/assets/Screen Recording 2021-02-13 at 8.01.46 PM.2021-02-13 20\_03\_27.gif>)

{% hint style="info" %}
As you may have noticed in the image above, to access the value of a **Blackboard** entry is done as if it was a **Local Variable**. This is because under the hood, the **State Machine** component generates a new **Local Variable** component and fills it with all the entries from the **Blackboard**.
{% endhint %}

Once the **Blackboard** is filled with some entries, the **State Machine** component is automatically updated, adding new entries and removing those that no longer exist in the **Blackboard**.

![](<../../../.gitbook/assets/image (69).png>)

For example, let's say our game has a _Guard_ that can attack anything when it has a **`target`** defined. We could create a **`target`** entry in the **State Machine** and ask if it's different than _null_. If so, follow it and attack when it's within in range.

![(Can't have a Local Variable with the same name as a Blackboard entry)](<../../../.gitbook/assets/Screen Shot 2021-02-13 at 8.12.24 PM (1).png>)

{% hint style="danger" %}
Because the **StateMachine** component generates a **Local Variable** object with the **Blackboard** entries, it will throw a conflict error.
{% endhint %}

{% hint style="warning" %}
**Invoker** is a variable automatically generated and it will always have the game object where the State Machine is as reference.
{% endhint %}
