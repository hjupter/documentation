---
description: Disables a node in a State Machine asset
---

# Disable State Machine Node

Disables a node from State Machine asset.

## Description

Disables a node in a State Machine asset, preventing it from executing on all runners using this asset.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to disable in the State Machine |

## Keywords

`Disable`, `Cancel`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Disable State Machine Node
    └─ Node: "DebugNode"
```

This disables the "DebugNode" in the State Machine asset.

{% hint style="warning" %}
This instruction affects **all runners** using this State Machine asset. The node will be disabled everywhere until re-enabled.
{% endhint %}
