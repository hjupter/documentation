---
description: Check if a node is enabled on a specific runner
---

# State Machine Runner Node Is Enabled

Returns true if the node is enabled on the specified State Machine Runner.

## Description

Checks whether a specific node is enabled (not disabled) on a State Machine Runner instance. Enabled nodes can be executed; disabled nodes cannot.

## Parameters

| Name | Description |
|------|-------------|
| **Target** | The target GameObject that contains the State Machine Runner |
| **Node** | The node to check |

## Returns

| Value | Condition |
|-------|-----------|
| **True** | The specified node is enabled and can be executed |
| **False** | The node is disabled or the runner doesn't exist |

## Keywords

`State Machine`, `Is Enabled`, `Run`

## Example

```
Branch Node:
├─ Condition: State Machine Runner Node Is Enabled
│   ├─ Target: Self
│   └─ Node: "SpecialAbilityNode"
├─ True → Show ability button
└─ False → Hide ability button (ability locked)
```

{% hint style="info" %}
Use this condition to check if features are unlocked or available before showing UI elements or allowing actions.
{% endhint %}
