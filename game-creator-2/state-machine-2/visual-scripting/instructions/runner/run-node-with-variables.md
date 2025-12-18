---
description: Executes a node and passes variable values to the runner
---

# Run Runner Node with Variables

Executes a State Machine node from a specific target runner with variables.

## Description

This instruction sets variable values on the State Machine Runner before executing a node. This is useful for passing data to the state machine, such as targets, damage values, or other parameters.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Variables** | List of variable name-value pairs to set before execution |

## Keywords

`Execute`, `Call`, `Instruction`, `Action`, `State Machine`, `Run`

## Example

```
Actions Component:
└─ Run Runner Node with Variables
    ├─ Target: Enemy
    ├─ Variables:
    │   ├─ DamageAmount: 25
    │   └─ Attacker: Player
    └─ Node: "TakeDamageNode"
```

This sets `DamageAmount` and `Attacker` variables on the Enemy runner, then executes "TakeDamageNode".

{% hint style="success" %}
Use this instruction when you need to pass context-specific data to a state machine, such as who triggered an event or what values to use.
{% endhint %}

{% hint style="info" %}
If the target has a **State Machine Runner Instances** component, it will automatically find the correct runner for the specified State Machine.
{% endhint %}
