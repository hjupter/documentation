---
description: Check if a node is enabled on a State Machine asset
---

# State Machine Node Is Enabled

Returns true if the specified node is enabled.

## Description

Checks whether a specific node is enabled (not disabled) on a State Machine asset. This checks the asset-level state.

## Parameters

| Name | Description |
|------|-------------|
| **Node** | The node to check |

## Returns

| Value | Condition |
|-------|-----------|
| **True** | The specified node is enabled on the asset |
| **False** | The node is disabled |

## Keywords

`State Machine`, `Is Running`, `Run`

## Example

```
Branch Node:
├─ Condition: State Machine Node Is Enabled
│   └─ Node: "CheatModeNode"
├─ True → Allow cheat commands
└─ False → Ignore cheat commands
```

{% hint style="warning" %}
This condition checks asset-level state, affecting all runners using this State Machine.
{% endhint %}
