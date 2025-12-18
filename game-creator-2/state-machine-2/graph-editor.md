# Graph Editor

The Graph Editor is the heart of State Machine 2, where you design and visualize your state machine logic.

## Opening the Editor

There are several ways to open the Graph Editor:

* **Window Menu**: Go to `Window → Ninjutsu Games → State Machine 2`
* **Double-click**: Double-click any State Machine asset in the Project window
* **Inspector Button**: Click the "Open" button in the State Machine Runner inspector
* **Context Menu**: Right-click a State Machine asset and select "Open"

{% hint style="info" %}
You can open **multiple Graph Editor windows** at the same time to work on different state machines simultaneously.
{% endhint %}

## Editor Overview

<figure><img src="../../.gitbook/assets/image (37).png" alt=""><figcaption><p>The State Machine 2 Graph Editor</p></figcaption></figure>

The editor consists of several key areas:

### Toolbar

The toolbar at the top provides quick access to common operations:

| Button | Description |
|--------|-------------|
| **Save** | Save the current state machine |
| **Minimap** | Toggle the minimap visibility |
| **Expand All** | Expand all nodes to show their details |
| **Collapse All** | Collapse all nodes to compact view |
| **Search** | Open the node search dialog |

### Graph Canvas

The main workspace where you create and connect nodes:

* **Pan**: Hold middle mouse button or Alt + left mouse button and drag
* **Zoom**: Use the mouse scroll wheel
* **Select**: Click on a node or drag a selection box
* **Multi-select**: Hold Shift or Ctrl while clicking nodes

### Node Inspector

<figure><img src="../../.gitbook/assets/image (96).png" alt=""><figcaption><p>Node Inspector showing node properties</p></figcaption></figure>

When you select a node, the Inspector panel appears on the right side. Here you can:

* Edit the node's properties
* Configure actions, conditions, and triggers
* View and modify transitions
* Set networking options

{% hint style="success" %}
You can select **multiple nodes** and edit their common properties at the same time.
{% endhint %}

### Minimap

The minimap in the corner provides an overview of your entire graph. Click and drag on the minimap to quickly navigate large state machines.

## Creating Nodes

There are several ways to create new nodes:

### Right-Click Context Menu

Right-click anywhere on the canvas to open the node creation menu:

* **Start Node** — Entry point for the state machine
* **Actions Node** — Execute Game Creator 2 actions
* **Conditions Node** — Evaluate conditions before transitioning
* **Branch Node** — Create multiple conditional paths
* **Trigger Node** — React to Game Creator 2 triggers
* **Sub-State Machine** — Embed another state machine
* **Exit Node** — Terminate execution with callbacks

### Drag & Drop

Drag and drop from the Project window:

* **Game Creator Actions** → Automatically creates an Actions node
* **Game Creator Conditions** → Automatically creates a Conditions node
* **Game Creator Triggers** → Automatically creates a Trigger node
* **State Machine Assets** → Creates a Sub-State Machine node

## Connecting Nodes

To create transitions between nodes:

1. Click on an **output port** (right side of a node)
2. Drag the connection line to an **input port** (left side of another node)
3. Release to create the connection

{% hint style="warning" %}
**Start nodes** only have output ports. **Exit nodes** only have input ports.
{% endhint %}

### Transition Conditions

Connections between nodes can have conditions:

1. Select a connection line
2. In the Inspector, add conditions that must be met for the transition to occur

## Organizing Your Graph

### Groups

Group related nodes together for better organization:

1. Select multiple nodes
2. Right-click and select "Group Selection" or press `Ctrl/Cmd + G`
3. Name your group and choose a color

Groups can be collapsed to hide their contents.

### Sticky Notes

Add notes to document your state machine:

1. Right-click on the canvas
2. Select "Create Sticky Note"
3. Enter your documentation text

### Alignment

Keep your graph tidy with alignment tools:

* Select multiple nodes
* Right-click and use the alignment options (Align Left, Right, Top, Bottom, Center)

## Live Debugging

During Play mode, the Graph Editor provides real-time visualization:

* **Active nodes** are highlighted
* **Running transitions** show the current execution path
* **Variable values** update in real-time in the Blackboard

{% hint style="success" %}
**Tip**: Keep the Graph Editor open during Play mode to see your state machine in action!
{% endhint %}

## Settings

Access State Machine 2 settings via `Edit → Preferences → State Machine 2`:

| Setting | Description |
|---------|-------------|
| **Show Node Inspector** | Toggle the inline node inspector |
| **Auto-Rename Nodes** | Automatically name nodes based on their content |
| **Minimap Default State** | Show or hide minimap by default |

