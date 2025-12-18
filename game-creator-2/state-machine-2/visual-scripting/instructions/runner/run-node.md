---
description: Executes a State Machine node from a specific target runner
---

# Run State Machine Runner Node

Executes a State Machine node from an specific target runner.

## Description

This instruction triggers execution of a specific node on a State Machine Runner component. The node begins execution immediately when this instruction runs.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to execute from the specified State Machine |

## Keywords

`Execute`, `Call`, `Instruction`, `Action`, `State Machine`, `Run`

## Example

```
Actions Component:
└─ Run State Machine Runner Node
    ├─ Target: Enemy
    └─ Node: "AttackNode"
```

This triggers the "AttackNode" on the Enemy's State Machine Runner.

{% hint style="info" %}
The **Self** argument of the runner changes to the target GameObject during execution.
{% endhint %}
