---
description: All the node types available in State Machine 2
---

# Nodes

State Machine 2 provides a variety of node types to build any game logic you can imagine.

## Node Types Overview

| Node | Icon | Purpose |
|------|------|---------|
| 🟢 **Start** | Entry point | Begins state machine execution |
| ⚡ **Actions** | Execute tasks | Runs Game Creator 2 actions |
| 🔀 **Branch** | Decision | Multiple conditional paths |
| ❓ **Conditions** | Evaluate | Check conditions before proceeding |
| 🎯 **Trigger** | Events | React to game events |
| 📦 **Sub-State Machine** | Modular | Embed another state machine |
| 🚪 **Exit** | Terminate | End execution with callbacks |
| ➡️ **Relay** | Organization | Visual routing (no logic) |

---

## 🟢 Start Node

The **Start Node** is the entry point of your state machine. Execution begins here when the runner starts.

<img src="../../../.gitbook/assets/image (61).png" alt="Start Node" data-size="original">

### Features

* **Automatically created** when you create a new state machine
* Cannot be manually created or deleted
* Can include initial actions
* Only has **output ports** (no inputs)

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Output | → | Actions, Branch, Conditions, Sub-State Machine, Exit |

{% hint style="info" %}
The Start node executes immediately when the State Machine Runner starts. Connect it to your initial behavior.
{% endhint %}

---

## ⚡ Actions Node

The **Actions Node** executes one or more Game Creator 2 actions in sequence.

![](<../../../.gitbook/assets/image (51).png>)

### Features

* Add unlimited actions
* Actions execute in order (top to bottom)
* Supports async actions (waits for completion)
* Can be triggered by any node type

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Start, Actions, Branch, Conditions, Trigger, Sub-State Machine |
| Output | → | Any node |

### Use Cases

* Play animations or sounds
* Modify variables
* Control characters
* Spawn objects
* Any Game Creator 2 action

---

## 🔀 Branch Node

The **Branch Node** creates multiple conditional paths, similar to a switch statement.

![](<../../../.gitbook/assets/image (48).png>)

### Features

* Add multiple branches with conditions
* Each branch has its own conditions and actions
* First matching branch executes
* Default output if no conditions match

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Any node |
| True Outputs | → | Per-branch outputs |
| Default Output | → | Fallback when no conditions match |

### Example

```
Branch Node:
├─ Branch 1: "Health < 25%" → Flee Actions
├─ Branch 2: "Has Weapon" → Attack Actions
└─ Default → Patrol Actions
```

---

## ❓ Conditions Node

The **Conditions Node** evaluates conditions and routes execution based on the result.

![](<../../../.gitbook/assets/image (67).png>)

### Features

* Add multiple conditions (AND logic)
* Two outputs: True and False
* Can be triggered by other nodes or triggers

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Any node |
| Trigger Input | ↑ | Trigger nodes only |
| True Output | → | When all conditions pass |
| False Output | → | When any condition fails |

### Use Cases

* Check player state before actions
* Validate game conditions
* Gate progression

---

## 🎯 Trigger Node

The **Trigger Node** reacts to Game Creator 2 events and triggers, providing event-driven execution.

![](<../../../.gitbook/assets/image (101).png>)

### Features

* Use any GC2 trigger type
* Event-driven (waits for trigger)
* Self-contained entry point
* Works with collision, input, timers, and more

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Output | → | Actions, Branch, Conditions, Sub-State Machine |
| Condition Output | ↓ | Directly to Conditions nodes |

### Common Triggers

| Trigger | Description |
|---------|-------------|
| **On Start** | When runner begins |
| **On Update** | Every frame |
| **On Trigger Enter** | Collision detection |
| **On Input** | Player input |
| **On Timer** | Timed events |
| **On Variable Change** | React to data changes |

{% hint style="success" %}
Trigger nodes can act as **alternative entry points**, running in parallel with the Start node.
{% endhint %}

---

## 📦 Sub-State Machine Node

The **Sub-State Machine Node** embeds another state machine, enabling modular and reusable design.

### Features

* Reference any State Machine asset
* Nested execution
* Exit nodes in the sub-machine connect to this node's outputs
* Perfect for reusable behavior modules

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Any node |
| Output | → | Triggered by Exit nodes in the sub-machine |

### Use Cases

* **Reusable AI behaviors** (Patrol, Combat, Flee)
* **Game mode management** (Menu, Playing, Paused)
* **Complex sequences** (Cutscenes, Tutorials)

### Creating Sub-State Machines

1. Drag a State Machine asset into the graph
2. Or right-click → Create Node → Sub-State Machine
3. Assign the state machine asset in the Inspector

{% hint style="info" %}
**Tip:** Drag and drop a State Machine asset from the Project window directly onto the graph to instantly create a Sub-State Machine node.
{% endhint %}

---

## 🚪 Exit Node

The **Exit Node** terminates state machine execution and can trigger callbacks.

### Features

* **Automatically created** when you create a new state machine
* Cannot be manually created or deleted
* Clean termination point
* Triggers parent Sub-State Machine outputs
* Useful for signaling completion

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Any node |
| _(No outputs)_ | — | Terminates execution |

### Use Cases

* End a sub-state machine and continue parent flow
* Signal completion of a behavior
* Clean shutdown with callbacks

---

## ➡️ Relay Node

The **Relay Node** is for visual organization only — it doesn't execute any logic.

### Features

* Route connections for cleaner graphs
* No execution overhead
* Purely visual organization

### Connections

| Port | Direction | Connects To |
|------|-----------|-------------|
| Input | ← | Any node |
| Output | → | Any node |

### Use Cases

* Organize complex connection paths
* Improve graph readability
* Route around node clusters

---

## See Also

* [Node Features](node-features.md) — Common features like rename, lock, disable
* [Graph Editor](../graph-editor.md) — Creating and connecting nodes
* [Getting Started](../getting-started.md) — Build your first state machine

