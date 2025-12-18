---
description: Triggered when a State Machine asset variable changes
---

# On State Machine Variable Change

Executed when the State Machine Variable is modified.

## Description

This event fires whenever a variable on a State Machine asset is changed. Use this to react to global state changes across all instances.

## Parameters

| Name | Description |
|------|-------------|
| **Variable** | The variable to monitor for changes |

## Keywords

`Variable`, `Change`, `State Machine`

## Example

```
Trigger Component:
├─ Event: On State Machine Variable Change
│   └─ Variable: "GameMode"
└─ Actions:
    └─ Update UI to reflect new game mode
```

{% hint style="info" %}
Use this event for global variables that affect the entire game, such as game mode, difficulty settings, or global unlocks.
{% endhint %}

{% hint style="warning" %}
This monitors **asset-level** variables. For per-instance variables, use **On State Machine Runner Variable Change** instead.
{% endhint %}
