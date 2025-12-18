---
description: Tips for networked state machines
---

# Best Practices

Follow these guidelines for optimal multiplayer state machine performance.

## Minimize Network Traffic

* Only sync nodes that need to affect all clients
* Use **Run on Owner** for local-only logic (UI, sounds)
* Batch related actions in single nodes

### Good Example

```
Actions Node [RPC to All]
├─ Action: Damage Enemy
├─ Action: Update Health Bar
└─ Action: Play Hit Effect
```

### Bad Example

```
Actions Node [RPC to All] → Damage Enemy
Actions Node [RPC to All] → Update Health Bar
Actions Node [RPC to All] → Play Hit Effect
```

The bad example sends 3 RPCs instead of 1.

## Handle Late Joins

* State machines automatically sync state to late joiners
* Ensure Start nodes handle mid-game joins gracefully
* Use variables to store persistent state

{% hint style="info" %}
When a client joins late, they receive the current node state but not the history of transitions.
{% endhint %}

## Avoid Non-Deterministic Logic

Networked state machines should produce consistent results:

| Avoid | Use Instead |
|-------|-------------|
| `Random.value` | Seeded random with synced seed |
| `Time.time` | Network time or synced timestamps |
| Local-only conditions | Synced variables |

## Separate Concerns

Keep local and networked logic separated:

```
Branch Node [Run on All]
├─ True → Local Effects [Run on Owner]
│         └─ Networked State [RPC to All]
└─ False → ...
```

## Use Variables for State

Store important state in synced variables rather than relying on node execution:

* Variables persist across late joins
* Variables can be inspected for debugging
* Variables sync automatically when configured

## Test Early and Often

* Test with multiple clients from the start
* Use ParrelSync or multiple builds
* Test late-join scenarios
* Test with simulated latency

