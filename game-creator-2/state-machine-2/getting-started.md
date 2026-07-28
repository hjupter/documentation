---
description: Get up and running with State Machine 2 in minutes
---

# Getting Started

This guide will help you create your first state machine in just a few minutes.

## Prerequisites

Before you begin, ensure you have:

* Unity 6000.3.1f1 or later
* [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_state_machine_getting_started_game_creator) installed
* [State Machine 2](https://www.ninjutsugames.com/go/state-machine?src=docs_state_machine_getting_started_module) installed


## Step 1: Create a State Machine Asset

1. In the **Project** window, navigate to where you want to create your state machine
2. Right-click and select **Create → Ninjutsu Games → State Machine**
3. Name your state machine (e.g., "EnemyAI" or "PlayerController")

<figure><img src="../../.gitbook/assets/create-state-machine.png" alt=""><figcaption><p>Creating a new State Machine asset</p></figcaption></figure>

## Step 2: Open the Graph Editor

Double-click your new State Machine asset to open the Graph Editor.

You'll see a canvas with a **Start Node** and **Exit Node** already created. These nodes are automatically added to every new state machine and cannot be deleted.

## Step 3: Add an Actions Node

Let's add some behavior:

1. Right-click on the canvas
2. Select **Create Node → Actions**
3. Click on the new Actions node to select it
4. In the Inspector, click **Add Action**
5. Choose an action (e.g., **Debug → Log Message**)
6. Configure the action (e.g., type "Hello from State Machine!")

## Step 4: Connect the Nodes

1. Click on the **output port** (right side) of the Start node
2. Drag the connection to the **input port** (left side) of the Actions node
3. Release to create the connection

<figure><img src="../../.gitbook/assets/first-state-machine.png" alt=""><figcaption><p>A simple state machine with Start and Actions nodes</p></figcaption></figure>

## Step 5: Add a State Machine Runner

The Runner component executes your state machine on a GameObject:

1. Create or select a GameObject in your scene
2. Click **Add Component**
3. Search for **State Machine Runner**
4. Drag your State Machine asset to the **State Machine** field

{% hint style="info" %}
You can also create a runner via **Create → Ninjutsu Games → State Machine Runner**
{% endhint %}

## Step 6: Test It!

1. Press **Play** in Unity
2. Check the Console window — you should see your log message!

🎉 **Congratulations!** You've created your first state machine!

---

## Next Steps

Now that you have the basics, explore these topics:

### Add More Behavior

* **[Trigger Nodes](nodes/)** — React to events like player input, collisions, or timers
* **[Branch Nodes](nodes/)** — Create conditional logic paths
* **[Sub-State Machines](nodes/)** — Organize complex logic into reusable modules

### Use Variables

* **[Variables](variables.md)** — Store and share data between nodes

### Learn the Editor

* **[Graph Editor](graph-editor.md)** — Master the visual editor
* **[Shortcuts](shortcuts.md)** — Speed up your workflow

### Build Real Systems

Try building these common use cases:

| System | Nodes to Use |
|--------|--------------|
| **Enemy AI** | Start → Trigger (On Player Near) → Actions (Chase) |
| **Door Controller** | Trigger (On Interact) → Branch (Is Locked?) → Actions |
| **Ability Cooldown** | Actions → Trigger (On Timer) → Actions (Ready) |
| **Game State Manager** | Start → Sub-State Machine (Menu, Playing, Paused) |

---

## Example: Simple Enemy AI

Here's a complete example of a basic enemy AI:

### Nodes Setup

1. **Start Node** — Entry point
2. **Trigger Node** — "On Player Enter" (using a trigger collider)
3. **Actions Node** — "Chase Player" (move towards player)
4. **Trigger Node** — "On Player Exit"
5. **Actions Node** — "Return to Patrol"

### Connections

```
Start → Idle Actions
Idle Actions ← → Chase Trigger → Chase Actions
Chase Actions ← → Exit Trigger → Idle Actions
```

This creates a loop where the enemy:
1. Starts idle
2. Detects the player → starts chasing
3. Loses the player → returns to idle

---

## Troubleshooting

### State Machine Not Running

* Ensure the **State Machine Runner** component is on an **active GameObject**
* Check that the **State Machine** field has an asset assigned
* Verify the Start node has at least one output connection

### Actions Not Executing

* Check if nodes are **enabled** (not grayed out)
* Verify connections exist between nodes
* Use **Live Debug** in the Graph Editor to see execution flow

### Need Help?

* Join our [Discord Community](https://discord.com/invite/99bbWBzKDX)
* Check the [full documentation](https://docs.ninjutsugames.com/game-creator-2/state-machine-2/)
* Email support: support@ninjutsugames.com
