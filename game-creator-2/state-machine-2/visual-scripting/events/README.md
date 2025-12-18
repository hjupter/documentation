---
description: React to state machine variable changes
---

# Events

Events trigger when state machine states change. Use these in Trigger nodes or Game Creator 2 Triggers to react to changes.

## Available Events

| Event | Description |
|-------|-------------|
| [**On State Machine Variable Change**](on-variable-change.md) | Fires when a State Machine Asset variable is modified |
| [**On State Machine Runner Variable Change**](on-runner-variable-change.md) | Fires when a State Machine Runner variable is modified |

## Usage Example

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
