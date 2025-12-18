---
description: Stops a running node in a State Machine asset
---

# Stop State Machine Node

Stops a node from State Machine asset.

## Description

Immediately stops a currently executing node in a State Machine asset. This cancels execution on all runners using this asset.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to stop in the State Machine |

## Keywords

`Stop`, `Cancel`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Stop State Machine Node
    └─ Node: "BackgroundProcessNode"
```

This stops the "BackgroundProcessNode" in the State Machine asset.

{% hint style="danger" %}
This instruction affects **all runners** using this State Machine asset. All running instances of this node will be stopped immediately.
{% endhint %}
