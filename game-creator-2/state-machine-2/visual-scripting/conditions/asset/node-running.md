---
description: Check if a node is running on a State Machine asset
---

# State Machine Node Is Running

Returns true if the specified node is running.

## Description

Checks whether a specific node is currently executing on a State Machine asset. This checks the asset-level state, not any specific runner instance.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to check |

## Returns

| Value | Condition |
|-------|-----------|
| **True** | The specified node is currently running on the asset |
| **False** | The node is not running |

## Keywords

`State Machine`, `Is Running`, `Run`

## Example

```
Branch Node:
├─ Condition: State Machine Node Is Running
│   └─ Node: "GamePausedNode"
├─ True → Skip game logic
└─ False → Continue game logic
```

{% hint style="warning" %}
This condition checks asset-level state, which may differ from individual runner states in some scenarios.
{% endhint %}
