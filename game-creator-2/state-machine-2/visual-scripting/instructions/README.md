---
description: Actions to control state machine execution
---

# Instructions

Instructions are actions you can use in Game Creator 2 Actions, Hotspots, or any other visual scripting context to control state machines.

## Runner Instructions

These instructions work with **State Machine Runner** components on specific GameObjects, affecting only that instance.

| Instruction | Description |
|-------------|-------------|
| [**Run State Machine Runner Node**](runner/run-node.md) | Executes a specific node on a target runner |
| [**Run Runner Node with Variables**](runner/run-node-with-variables.md) | Executes a node and passes variable values before execution |
| [**Enable State Machine Runner Node**](runner/enable-node.md) | Re-enables a previously disabled node |
| [**Disable State Machine Runner Node**](runner/disable-node.md) | Disables a node, preventing it from executing |
| [**Stop State Machine Runner Node**](runner/stop-node.md) | Immediately stops a currently running node |
| [**Loop List with Node**](runner/loop-list-with-node.md) | Iterates through a list and executes a node for each element |

{% hint style="info" %}
**Runner Instructions** affect only the specific runner instance on the target GameObject. Use these for per-instance control.
{% endhint %}

## Asset Instructions

These instructions work directly with **State Machine Asset** files, affecting all runners using that asset.

| Instruction | Description |
|-------------|-------------|
| [**Run State Machine Node**](asset/run-node.md) | Executes a node directly on a State Machine asset |
| [**Enable State Machine Node**](asset/enable-node.md) | Enables a node in the State Machine asset |
| [**Disable State Machine Node**](asset/disable-node.md) | Disables a node in the State Machine asset |
| [**Stop State Machine Node**](asset/stop-node.md) | Stops a running node in the State Machine asset |

{% hint style="warning" %}
**Asset Instructions** affect **all runners** using that State Machine asset. Use with caution in multiplayer or when multiple instances exist.
{% endhint %}

## Usage Example

```
Actions Component:
├─ Instruction: Run State Machine Runner Node
│   ├─ Target: Player (GameObject)
│   └─ Node: "CombatNode"
└─ Instruction: Enable State Machine Runner Node
    ├─ Target: Enemy (GameObject)
    └─ Node: "AlertNode"
```
