---
description: Triggered when a State Machine Runner variable changes
---

# On State Machine Runner Variable Change

Executed when the State Machine Runner Variable is modified.

## Description

This event fires whenever a variable on a specific State Machine Runner is changed. Use this to react to per-instance state changes.

## Parameters

| Name | Description |
|------|-------------|
| **Variable** | The variable to monitor for changes |
| **Runner** | The target GameObject containing the State Machine Runner |

## Keywords

`Variable`, `Change`, `State Machine`, `Runner`

## Example

```
Trigger Component:
├─ Event: On State Machine Runner Variable Change
│   ├─ Variable: "Health"
│   └─ Runner: Self
└─ Actions:
    ├─ Update health bar UI
    └─ Play damage effect if health decreased
```

{% hint style="success" %}
This is the most common event for reactive gameplay systems. Use it to:
- Update UI when stats change
- Trigger effects when state changes
- Sync visuals with game logic
{% endhint %}

{% hint style="info" %}
The **Runner** parameter is typically set to **Self** to monitor the runner on the same GameObject as the Trigger.
{% endhint %}
