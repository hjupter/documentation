---
description: Understanding the constraints of Embedded Mode
---

# Limitations

Embedded Mode has specific constraints you should be aware of when designing your state machines.

## No Prefab Support

Embedded graphs cannot be used in prefabs because scene references are lost when a prefab is instantiated.

### Workarounds

* Use **Asset Mode** with prefabs
* Store instance-specific data in **Runner Variables**
* Use **Self** and **Target** references instead of direct scene references

{% hint style="warning" %}
If you try to create an embedded state machine on a prefab, you'll see a "Prefabs are not supported" message.
{% endhint %}

## No Sharing

Embedded graphs are unique to their Runner component. Each embedded graph is an independent copy that cannot be shared between GameObjects.

### Workarounds

* Export the embedded graph as an asset for reuse
* Use Sub-State Machines to share common patterns
* Keep shared logic in Asset Mode, use Embedded only for scene-specific parts

## Duplication Behavior

When duplicating a GameObject with an embedded Runner:

| Aspect | Behavior |
|--------|----------|
| Graph | Copied to the new GameObject |
| Scene References | Maintained if objects still exist |
| Broken References | Displayed as "Missing" |

{% hint style="info" %}
After duplicating, check that all scene references are still valid. Broken references will show as "Missing" in the Inspector.
{% endhint %}

## Scene Dependencies

Embedded graphs create tight coupling with scene objects:

* Moving the graph to another scene requires updating references
* Deleting referenced objects breaks the graph
* Renaming referenced objects may require reassignment

## Memory Considerations

Each embedded graph is stored separately, which means:

* Multiple copies increase memory usage
* Large embedded graphs on many objects can impact performance
* Consider Asset Mode for complex, frequently-used state machines

