---
description: Integrate with Game Creator 2's visual scripting system
---

# Visual Scripting

State Machine 2 provides a comprehensive set of Visual Scripting components that integrate seamlessly with Game Creator 2's action system.

## Overview

All components are organized into four categories:

| Category | Description |
|----------|-------------|
| **Instructions** | Actions to control state machines (run, enable, disable, stop nodes) |
| **Conditions** | Check node states (is running, is enabled) |
| **Events** | React to variable changes |
| **Properties** | Read and write state machine variables |

## Asset vs Runner

State Machine 2 offers two modes for each component:

| Mode | Scope | Use Case |
|------|-------|----------|
| **Asset** | Affects all runners using the state machine asset | Global game state, shared behavior |
| **Runner** | Affects only a specific runner instance | Per-character state, individual objects |

{% hint style="info" %}
**Best Practice**: Use **Runner** components for most gameplay scenarios. Use **Asset** components only for truly global state that should be shared across all instances.
{% endhint %}

## Quick Reference

### Instructions

Control state machine execution:

* [**Run Node**](instructions/runner/run-node.md) — Execute a specific node
* [**Run Node with Variables**](instructions/runner/run-node-with-variables.md) — Execute with variable values
* [**Enable Node**](instructions/runner/enable-node.md) — Re-enable a disabled node
* [**Disable Node**](instructions/runner/disable-node.md) — Prevent a node from executing
* [**Stop Node**](instructions/runner/stop-node.md) — Immediately stop a running node
* [**Loop List with Node**](instructions/runner/loop-list-with-node.md) — Iterate and execute per element

### Conditions

Check state machine states:

* [**Node Is Running**](conditions/runner/node-running.md) — Check if a node is executing
* [**Node Is Enabled**](conditions/runner/node-enabled.md) — Check if a node is enabled

### Events

React to state changes:

* [**On Variable Change**](events/on-variable-change.md) — Triggered when an asset variable changes
* [**On Runner Variable Change**](events/on-runner-variable-change.md) — Triggered when a runner variable changes

### Properties

Read and write variables from anywhere in Game Creator 2:

* [**Get Properties**](properties/README.md#get-properties) — Read variable values
* [**Set Properties**](properties/README.md#set-properties) — Write variable values

## Finding Components in the Editor

All State Machine 2 visual scripting components are organized in the search menu:

```
State Machine/
├─ Asset/
│   ├─ Run State Machine Node
│   ├─ Enable State Machine Node
│   ├─ Disable State Machine Node
│   ├─ Stop State Machine Node
│   ├─ Node Running (Condition)
│   └─ Node Enabled (Condition)
├─ Runner/
│   ├─ Run State Machine Runner Node
│   ├─ Run Runner Node with Variables
│   ├─ Enable State Machine Runner Node
│   ├─ Disable State Machine Runner Node
│   ├─ Stop State Machine Runner Node
│   ├─ Node Running (Condition)
│   └─ Node Enabled (Condition)
└─ Loop List with Node

Variables/
├─ On State Machine Variable Change (Event)
├─ On State Machine Runner Variable Change (Event)
├─ State Machine Variable (Properties)
└─ State Machine Runner Variable (Properties)
```
