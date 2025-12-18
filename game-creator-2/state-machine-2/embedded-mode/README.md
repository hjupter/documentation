---
description: Use scene references directly in your state machines
---

# Embedded Mode

Embedded Mode allows you to create state machines that are stored directly on a Runner component, enabling direct references to scene objects.

## What is Embedded Mode?

By default, State Machine assets are stored in the Project folder and shared across all runners that reference them. This is great for reusable logic, but it means you cannot reference scene-specific GameObjects.

**Embedded Mode** solves this by storing the state machine graph directly on the Runner component, allowing:

* Direct references to scene GameObjects
* Unique behavior per Runner instance
* Scene-specific configurations

## When to Use Embedded Mode

| Use Case | Recommended Mode |
|----------|------------------|
| Reusable AI behavior | Asset Mode |
| Scene-specific interactions | Embedded Mode |
| Shared game logic | Asset Mode |
| One-off sequences | Embedded Mode |
| Prefab behavior | Asset Mode |
| Level-specific events | Embedded Mode |

{% hint style="warning" %}
**Prefabs do not support Embedded Mode.** If you need prefab support, use Asset Mode with Runner Variables for instance-specific data.
{% endhint %}

## Creating an Embedded State Machine

1. Add a **State Machine Runner** component to a GameObject
2. In the Inspector, click **Create Embedded**
3. The Graph Editor opens with a new embedded graph
4. Design your state machine as usual

<figure><img src="../../../.gitbook/assets/embedded-create.png" alt=""><figcaption><p>Creating an embedded state machine</p></figcaption></figure>

## Using Scene References

With Embedded Mode, you can drag scene objects directly into node properties:

1. Select a node that needs a GameObject reference
2. Drag a GameObject from the **Hierarchy** to the property field
3. The scene reference is stored in the embedded graph

### Example: Door Controller

```
Trigger Node: On Interact
├─ Target: [Scene Reference: InteractionZone]
└─ Output → Actions Node
              └─ Action: Rotate GameObject
                 └─ Target: [Scene Reference: DoorPivot]
```

## Opening an Embedded Graph

* Click **Open Graph** on the State Machine Runner component
* Or double-click the Runner component

The Graph Editor title shows **"(Embedded)"** to indicate you're editing an embedded graph.

## Converting Between Modes

### Asset → Embedded

1. With a Runner that has an Asset assigned
2. Click **Convert to Embedded** (if available)
3. The asset is copied to an embedded graph

{% hint style="danger" %}
Converting to embedded creates a **copy**. Changes to the original asset won't affect the embedded version.
{% endhint %}

### Embedded → Asset

1. Open the embedded graph
2. Use **File → Export as Asset**
3. Choose a location in your Project
4. Assign the new asset to the Runner

