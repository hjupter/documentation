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

<figure><img src="../../.gitbook/assets/embedded-create.png" alt=""><figcaption><p>Creating an embedded state machine</p></figcaption></figure>

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

## Limitations

### No Prefab Support

Embedded graphs cannot be used in prefabs because scene references are lost when a prefab is instantiated. Instead:

* Use **Asset Mode** with prefabs
* Store instance-specific data in **Runner Variables**
* Use **Self** and **Target** references instead of direct scene references

### No Sharing

Embedded graphs are unique to their Runner. To reuse logic:

* Export as an asset
* Use Sub-State Machines to share common patterns

### Duplication

When duplicating a GameObject with an embedded Runner:

* The embedded graph is copied
* Scene references are maintained if they still exist
* Broken references show as "Missing"

## Best Practices

### Use for Scene-Specific Logic

Embedded mode shines when you need to reference specific scene objects:

* Level triggers and events
* Scene-specific cutscenes
* Environmental interactions
* Tutorial sequences

### Keep It Simple

Embedded graphs should be focused and simple. For complex logic:

* Use Sub-State Machines referencing Asset state machines
* Keep scene-specific parts embedded, share common logic as assets

### Document with Sticky Notes

Since embedded graphs can't be easily shared, add Sticky Notes explaining the purpose and any scene dependencies.

## Troubleshooting

### "Prefabs are not supported"

You're trying to use Embedded Mode on a prefab. Convert to Asset Mode instead.

### Missing References After Scene Reload

Scene references may break if:

* The referenced GameObject was deleted
* The scene was reloaded without saving
* The GameObject was renamed or moved

Fix by reassigning the reference or using **Self**/**Target** patterns.

### Can't Open Embedded Graph

Ensure the Runner component has **Create Embedded** or has an existing embedded graph. If the button shows "Open Graph", click it to edit.

