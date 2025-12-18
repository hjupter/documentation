---
description: Disables a State Machine node on a specific runner
---

# Disable State Machine Runner Node

Disables a State Machine node from a specific target runner.

## Description

Disables a node on a State Machine Runner, preventing it from executing. The node remains in the graph but will not run until it is enabled again.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to disable on the specified State Machine |

## Keywords

`Disable`, `Cancel`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Disable State Machine Runner Node
    ├─ Target: Player
    └─ Node: "SprintNode"
```

This disables the "SprintNode" on the Player's State Machine Runner, preventing sprinting.

{% hint style="warning" %}
Disabled nodes will not execute even if transitions lead to them. Make sure to re-enable nodes when appropriate using **Enable State Machine Runner Node**.
{% endhint %}
