---
description: Iterates through a list and executes a node for each element
---

# Loop List with Node

Loops a Game Object List Variable and executes a State Machine Node for each value.

## Description

Iterates through a list of GameObjects and executes a specific node for each element. The **Target** argument of any instruction inside the node contains the current object being processed.

## Parameters

| Name | Description |
|------|-------------|
| **List Variable** | Local List or Global List whose elements are iterated |
| **Node** | The node to execute for each element in the list |
| **Target** | The target GameObject that contains the State Machine Runner |

## Keywords

`Iterate`, `Cycle`, `Every`, `All`, `Stack`

## Example

```
Actions Component:
└─ Loop List with Node
    ├─ List Variable: EnemiesInRange
    ├─ Node: "ApplyDamageNode"
    └─ Target: Self
```

This iterates through all enemies in the `EnemiesInRange` list and executes the "ApplyDamageNode" for each one.

{% hint style="success" %}
This is perfect for applying effects to multiple targets, such as:
- Area of effect damage
- Buff/debuff all allies
- Process all items in an inventory
{% endhint %}

{% hint style="info" %}
Inside the executed node, use the **Target** reference to access the current element being processed.
{% endhint %}
