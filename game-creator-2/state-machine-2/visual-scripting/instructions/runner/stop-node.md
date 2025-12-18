---
description: Stops a running State Machine node on a specific runner
---

# Stop State Machine Runner Node

Stops a State Machine node from a specific target runner.

## Description

Immediately stops a currently executing node on a State Machine Runner. The node's execution is cancelled and any ongoing actions are interrupted.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to stop on the specified State Machine |

## Keywords

`Stop`, `Cancel`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Stop State Machine Runner Node
    ├─ Target: Enemy
    └─ Node: "PatrolNode"
```

This immediately stops the "PatrolNode" on the Enemy's State Machine Runner.

{% hint style="danger" %}
Stopping a node interrupts it mid-execution. Any actions that were running will be cancelled. Use with care to avoid leaving the game in an inconsistent state.
{% endhint %}
