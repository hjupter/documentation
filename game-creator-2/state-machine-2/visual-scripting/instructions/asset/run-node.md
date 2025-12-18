---
description: Executes a node directly on a State Machine asset
---

# Run State Machine Node

Executes a node from State Machine asset.

## Description

This instruction triggers execution of a specific node directly on a State Machine asset. Unlike runner instructions, this affects the asset itself and all runners using it.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to execute from the specified State Machine |

## Keywords

`Execute`, `Call`, `Instruction`, `Action`, `State Machine`, `Run`

## Example

```
Actions Component:
└─ Run State Machine Node
    └─ Node: "GlobalEventNode"
```

This executes the "GlobalEventNode" on the State Machine asset.

{% hint style="warning" %}
This instruction affects **all runners** using this State Machine asset. Use for global events that should trigger everywhere.
{% endhint %}
