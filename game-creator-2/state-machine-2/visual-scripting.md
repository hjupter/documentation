---
description: Complete reference for Instructions, Conditions, Events, and Properties
---

# Visual Scripting Reference

State Machine 2 provides a comprehensive set of Visual Scripting components that integrate seamlessly with Game Creator 2's action system. This page documents all available components.

---

## Instructions

Instructions are actions you can use in Game Creator 2 Actions, Hotspots, or any other visual scripting context to control state machines.

### Runner Instructions

These instructions work with **State Machine Runner** components on specific GameObjects.

| Instruction | Description | Parameters |
|-------------|-------------|------------|
| **Run State Machine Runner Node** | Executes a specific node on a target runner | `Target`: GameObject with Runner<br>`Node`: Node to execute |
| **Run Runner Node with Variables** | Executes a node and passes variable values to the runner before execution | `Target`: GameObject with Runner<br>`Variables`: List of variable values |
| **Enable State Machine Runner Node** | Re-enables a previously disabled node on the runner | `Target`: GameObject with Runner<br>`Node`: Node to enable |
| **Disable State Machine Runner Node** | Disables a node, preventing it from executing | `Target`: GameObject with Runner<br>`Node`: Node to disable |
| **Stop State Machine Runner Node** | Immediately stops a currently running node | `Target`: GameObject with Runner<br>`Node`: Node to stop |
| **Loop List with Node** | Iterates through a GameObject List Variable and executes a node for each element. The Target argument contains the current element. | `List Variable`: List to iterate<br>`Node`: Node to run per element<br>`Target`: Runner GameObject |

{% hint style="info" %}
**Runner Instructions** affect only the specific runner instance on the target GameObject. Use these for per-instance control.
{% endhint %}

### Asset Instructions

These instructions work directly with **State Machine Asset** files, affecting all runners using that asset.

| Instruction | Description | Parameters |
|-------------|-------------|------------|
| **Run State Machine Node** | Executes a node directly on a State Machine asset | `Node`: Node to execute |
| **Enable State Machine Node** | Enables a node in the State Machine asset | `Node`: Node to enable |
| **Disable State Machine Node** | Disables a node in the State Machine asset | `Node`: Node to disable |
| **Stop State Machine Node** | Stops a running node in the State Machine asset | `Node`: Node to stop |

{% hint style="warning" %}
**Asset Instructions** affect **all runners** using that State Machine asset. Use with caution in multiplayer or when multiple instances exist.
{% endhint %}

### Usage Example

```
Actions Component:
├─ Instruction: Run State Machine Runner Node
│   ├─ Target: Player (GameObject)
│   └─ Node: "CombatNode"
└─ Instruction: Enable State Machine Runner Node
    ├─ Target: Enemy (GameObject)
    └─ Node: "AlertNode"
```

---

## Conditions

Conditions check state machine states and can be used in Branch nodes, Conditions nodes, or any GC2 Condition context.

### Asset Conditions

Check states on State Machine Assets directly.

| Condition | Description | Returns True When |
|-----------|-------------|-------------------|
| **State Machine Node Is Running** | Checks if a specific node is currently executing on the asset | The specified node is actively running |
| **State Machine Node Is Enabled** | Checks if a node is enabled (not disabled) on the asset | The node is enabled and can execute |

### Runner Conditions

Check states on specific State Machine Runner instances.

| Condition | Description | Returns True When |
|-----------|-------------|-------------------|
| **State Machine Runner Node Is Running** | Checks if a node is executing on a specific runner | The node is actively running on the target runner |
| **State Machine Runner Node Is Enabled** | Checks if a node is enabled on a specific runner | The node is enabled on the target runner |

### Parameters

| Parameter | Description |
|-----------|-------------|
| **Node** | The node to check (selected from the State Machine) |
| **Target** *(Runner only)* | The GameObject containing the State Machine Runner |

### Usage Example

```
Branch Node:
├─ Condition: "State Machine Runner Node Is Running"
│   ├─ Target: Self
│   └─ Node: "PatrolNode"
├─ True → Actions: Start Alert Behavior
└─ False → Actions: Continue Current State
```

---

## Events

Events trigger when state machine states change. Use these in Trigger nodes or GC2 Triggers to react to changes.

| Event | Description | Category |
|-------|-------------|----------|
| **On State Machine Variable Change** | Fires when a State Machine Asset variable is modified | Variables |
| **On State Machine Runner Variable Change** | Fires when a State Machine Runner variable is modified | Variables |

### Parameters

| Parameter | Description |
|-----------|-------------|
| **Variable** | The variable to monitor for changes |
| **Runner** *(Runner event only)* | The GameObject containing the State Machine Runner |

### Usage Example

```
Trigger Node:
├─ Event: On State Machine Runner Variable Change
│   ├─ Variable: "Health"
│   └─ Runner: Self
└─ Output → Actions: Update Health UI
```

{% hint style="success" %}
Variable change events are perfect for creating reactive UI that updates automatically when game state changes.
{% endhint %}

---

## Properties

Properties allow you to read and write State Machine variables from anywhere in Game Creator 2's visual scripting system.

### Get Properties (Read Values)

Read values from State Machine or Runner variables. Available in any GC2 property field.

| Type | Asset | Runner | Description |
|------|:-----:|:------:|-------------|
| **Animation Clip** | ✅ | ✅ | Get an animation clip reference |
| **Audio Clip** | ✅ | ✅ | Get an audio clip reference |
| **Bool** | ✅ | ✅ | Get a boolean (true/false) value |
| **Color** | ✅ | ✅ | Get a color value (RGBA) |
| **Decimal** | ✅ | ✅ | Get a decimal number value |
| **Direction** | ✅ | ✅ | Get a direction vector |
| **GameObject** | ✅ | ✅ | Get a GameObject reference |
| **Material** | ✅ | ✅ | Get a material reference |
| **Position** | ✅ | ✅ | Get a world position (Vector3) |
| **Rotation** | ✅ | ✅ | Get a rotation value (Quaternion) |
| **Scale** | ✅ | ✅ | Get a scale vector |
| **Sprite** | ✅ | ✅ | Get a sprite reference |
| **String** | ✅ | ✅ | Get a text string value |
| **Texture** | ✅ | ✅ | Get a texture reference |

### Set Properties (Write Values)

Write values to State Machine or Runner variables. Available in GC2 Set property actions.

| Type | Asset | Runner | Description |
|------|:-----:|:------:|-------------|
| **Animation Clip** | ✅ | ✅ | Set an animation clip reference |
| **Bool** | ✅ | ✅ | Set a boolean (true/false) value |
| **Color** | ✅ | ✅ | Set a color value (RGBA) |
| **Float** | ✅ | ✅ | Set a floating-point number |
| **GameObject** | ✅ | ✅ | Set a GameObject reference |
| **Material** | ✅ | ✅ | Set a material reference |
| **Sprite** | ✅ | ✅ | Set a sprite reference |
| **String** | ✅ | ✅ | Set a text string value |
| **Texture** | ✅ | ✅ | Set a texture reference |
| **Vector3** | ✅ | ✅ | Set a 3D vector (position/direction/scale) |

### How to Use Properties

1. In any GC2 action that accepts a property value, click the property dropdown
2. Navigate to **Variables → State Machine** or **Variables → State Machine Runner**
3. Select the variable you want to read or write
4. For Runner properties, also specify the target GameObject

### Usage Example

```
Action: Set Text
└─ Text: [Property] Variables → State Machine Runner Variable
    ├─ Variable: "PlayerName"
    └─ Runner: Self

Action: Change Material Color
└─ Color: [Property] Variables → State Machine Variable
    └─ Variable: "HighlightColor"
```

---

## Asset vs Runner: When to Use Which

| Use Case | Use Asset | Use Runner |
|----------|:---------:|:----------:|
| Shared state across all instances | ✅ | |
| Per-instance behavior (each enemy has own state) | | ✅ |
| Global game state (game mode, settings) | ✅ | |
| Individual character state (health, ammo) | | ✅ |
| Prefab-based objects | | ✅ |
| Singleton managers | ✅ | |

{% hint style="info" %}
**Best Practice**: Use **Runner** properties and instructions for most gameplay scenarios. Use **Asset** properties only for truly global state that should be shared across all instances.
{% endhint %}

---

## Finding Components in the Editor

All State Machine 2 visual scripting components are organized under the **State Machine** category:

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

---

## See Also

* [Variables](variables.md) — Creating and managing state machine variables
* [Nodes](nodes/) — All node types and their connections
* [State Machine Runner](state-machine-runner.md) — Runtime execution component
* [Getting Started](getting-started.md) — Build your first state machine

