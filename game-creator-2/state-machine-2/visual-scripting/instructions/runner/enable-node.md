---
description: Enables a State Machine node on a specific runner
---

# Enable State Machine Runner Node

Enables a State Machine node from a specific target runner.

## Description

Re-enables a previously disabled node on a State Machine Runner. Once enabled, the node can be executed normally through transitions or other instructions.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to enable on the specified State Machine |

## Keywords

`Enable`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Enable State Machine Runner Node
    ├─ Target: Player
    └─ Node: "SpecialAbilityNode"
```

This re-enables the "SpecialAbilityNode" on the Player's State Machine Runner.

{% hint style="info" %}
Nodes are enabled by default. Use this instruction to restore a node that was previously disabled with the **Disable State Machine Runner Node** instruction.
{% endhint %}
