# Node Features

All nodes in State Machine 2 share common features that help you organize and control your state machine logic.

## Rename

Every node can be renamed for better clarity:

1. **Double-click** on the node's title
2. Type the new name
3. Press Enter to confirm

![Double click to rename](<../../../.gitbook/assets/Kapture 2023-03-20 at 00.58.02.gif>)

{% hint style="info" %}
Enable **Auto-Rename** in settings to automatically name nodes based on their trigger, first action, or condition.
{% endhint %}

## Lock

Locked nodes cannot be moved, preventing accidental repositioning:

* **Lock**: Right-click the node → Lock
* **Unlock**: Right-click the node → Unlock

A lock icon appears on locked nodes.

## Disable

Disabled nodes are skipped during execution:

* **Disable**: Right-click the node → Disable
* **Enable**: Right-click the node → Enable

Disabled nodes appear grayed out in the graph.

{% hint style="warning" %}
When a node is disabled, its **output transitions are also skipped**. The state machine will not progress through disabled nodes.
{% endhint %}

## Color Coding

Assign colors to nodes for visual organization:

1. Right-click on a node
2. Select **Set Color**
3. Choose from the color palette

This is useful for categorizing nodes by purpose (e.g., combat logic, UI, dialogue).

## Expanded View

Nodes can show their content inline without opening the inspector:

* **Expand**: Click the expand icon on the node, or right-click → Expand
* **Collapse**: Click the collapse icon, or right-click → Collapse

When expanded, you can edit actions, conditions, and triggers directly in the graph.

## Copy & Paste

Nodes can be copied between state machines:

* **Copy**: Select nodes and press `Ctrl/Cmd + C`
* **Paste**: Press `Ctrl/Cmd + V` in any state machine graph

{% hint style="success" %}
You can copy nodes between **different projects** and even **different Unity versions**!
{% endhint %}

## Duplicate

Quickly create a copy of selected nodes:

* Select nodes
* Press `Ctrl/Cmd + D` or right-click → Duplicate

The duplicates appear offset from the originals with all settings preserved.

## Delete

Remove nodes from the graph:

* Select nodes
* Press `Delete` or `Backspace`
* Or right-click → Delete

{% hint style="warning" %}
Deleting a node also removes all its connections. This action can be undone with `Ctrl/Cmd + Z`.
{% endhint %}

## Network Settings

Each node can have individual networking configuration for multiplayer games:

1. Select a node
2. In the Inspector, expand **Network Settings**
3. Configure sync options

See [Multiplayer](../multiplayer.md) for detailed networking documentation.

## Context Menu Actions

Right-click on a node to access all available actions:

| Action | Description |
|--------|-------------|
| **Rename** | Change the node's display name |
| **Duplicate** | Create a copy of the node |
| **Delete** | Remove the node from the graph |
| **Lock/Unlock** | Toggle movement lock |
| **Enable/Disable** | Toggle node execution |
| **Set Color** | Assign a color to the node |
| **Expand/Collapse** | Toggle inline editing view |
| **Group Selection** | Create a group from selected nodes |

