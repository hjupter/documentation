---
description: Tips for effectively using Embedded Mode
---

# Best Practices

Follow these guidelines to get the most out of Embedded Mode.

## Use for Scene-Specific Logic

Embedded mode shines when you need to reference specific scene objects:

* Level triggers and events
* Scene-specific cutscenes
* Environmental interactions
* Tutorial sequences
* One-time scene setups

{% hint style="success" %}
**Rule of thumb**: If the logic only makes sense in one specific scene, Embedded Mode is a good choice.
{% endhint %}

## Keep It Simple

Embedded graphs should be focused and simple. For complex logic:

* Use Sub-State Machines referencing Asset state machines
* Keep scene-specific parts embedded, share common logic as assets
* Break large graphs into smaller, manageable pieces

### Hybrid Approach

```
Embedded Runner
├─ Trigger: Scene-specific event
└─ Sub-State Machine: [Asset] Shared AI Behavior
```

This pattern lets you use scene references for triggers while reusing complex logic.

## Document with Sticky Notes

Since embedded graphs can't be easily shared or viewed outside the scene, add Sticky Notes explaining:

* The purpose of the state machine
* Scene dependencies and references
* Any special conditions or requirements

## Use Self and Target References

When possible, prefer **Self** and **Target** references over direct scene references:

| Reference Type | Use When |
|---------------|----------|
| **Self** | Referencing the Runner's own GameObject |
| **Target** | Referencing a passed-in target |
| **Scene Reference** | Only when you need a specific, unchanging scene object |

## Consider Future Changes

Before using Embedded Mode, consider:

* Will this logic need to be reused?
* Might this become a prefab later?
* Will multiple objects need similar behavior?

If yes to any of these, start with Asset Mode instead.

## Backup Important Graphs

Embedded graphs are stored in the scene file. To protect your work:

1. Regularly export complex embedded graphs as assets
2. Use version control for your scenes
3. Consider using Asset Mode for critical game logic

