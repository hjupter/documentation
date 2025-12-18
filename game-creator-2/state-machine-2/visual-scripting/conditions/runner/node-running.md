---
description: Check if a node is running on a specific runner
---

# State Machine Runner Node Is Running

Returns true if the node is running on the specified State Machine Runner.

## Description

Checks whether a specific node is currently executing on a State Machine Runner instance. Useful for conditional logic based on current execution state.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to check |

## Returns

| Value | Condition |
|-------|-----------|
| **True** | The specified node is currently executing on the target runner |
| **False** | The node is not running or the runner doesn't exist |

## Keywords

`State Machine`, `Is Running`, `Run`

## Example

```
Branch Node:
├─ Condition: State Machine Runner Node Is Running
│   ├─ Target: Self
│   └─ Node: "AttackNode"
├─ True → Skip (already attacking)
└─ False → Run Attack Actions
```

{% hint style="info" %}
Use this condition to prevent duplicate executions or to check if a character is in a specific state.
{% endhint %}
