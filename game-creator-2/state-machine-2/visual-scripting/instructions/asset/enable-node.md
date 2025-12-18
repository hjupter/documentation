---
description: Enables a node in a State Machine asset
---

# Enable State Machine Node

Enables a node from State Machine asset.

## Description

Re-enables a previously disabled node in a State Machine asset. This affects all runners using this asset.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to enable in the State Machine |

## Keywords

`Enable`, `Instruction`, `Action`, `State Machine`, `Runner`

## Example

```
Actions Component:
└─ Enable State Machine Node
    └─ Node: "BonusLevelNode"
```

This enables the "BonusLevelNode" in the State Machine asset.

{% hint style="warning" %}
This instruction affects **all runners** using this State Machine asset.
{% endhint %}
