---
description: Check state machine node states
---

# Conditions

Conditions check state machine states and can be used in Branch nodes, Conditions nodes, or any Game Creator 2 Condition context.

## Runner Conditions

Check states on specific State Machine Runner instances.

| Condition | Description |
|-----------|-------------|
| [**Node Is Running**](runner/node-running.md) | Returns true if a node is executing on the target runner |
| [**Node Is Enabled**](runner/node-enabled.md) | Returns true if a node is enabled on the target runner |

## Asset Conditions

Check states on State Machine Assets directly, affecting all runners using that asset.

| Condition | Description |
|-----------|-------------|
| [**Node Is Running**](asset/node-running.md) | Returns true if a node is running on the asset |
| [**Node Is Enabled**](asset/node-enabled.md) | Returns true if a node is enabled on the asset |

## Usage Example

```
Branch Node:
├─ Condition: "State Machine Runner Node Is Running"
│   ├─ Target: Self
│   └─ Node: "PatrolNode"
├─ True → Actions: Start Alert Behavior
└─ False → Actions: Continue Current State
```

{% hint style="info" %}
Use Runner conditions for per-instance checks (e.g., "is this specific enemy patrolling?"). Use Asset conditions for global checks (e.g., "is the game paused?").
{% endhint %}
