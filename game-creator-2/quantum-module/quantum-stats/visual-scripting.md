# Visual Scripting

{% hint style="info" %}
This reference describes the current private implementation. Names may change
before release if the final Quantum Core contract requires it.
{% endhint %}

## Instructions

- Initialize Quantum Stats
- Set Quantum Stat Base
- Set Quantum Attribute
- Change Quantum Attribute
- Damage Quantum Attribute
- Heal Quantum Attribute
- Add Quantum Stat Modifier
- Remove Quantum Stat Modifier
- Apply Quantum Status Effect
- Remove Quantum Status Effect
- Clear Quantum Status Effects
- Reset Quantum Stats

Instructions send commands to the Quantum simulation. They do not directly
change a Game Creator Traits component. Version 1 mutation Instructions require
the trusted session-coordinator permission; entity ownership by itself is not
enough. Player combat and abilities should use their deterministic module
inputs, which call Stats simulation signals after validation.

Each mutation Instruction also requires the nonzero request sequence provided
by Quantum Core and may identify a source Game Object with its own Quantum
Stats Bridge. Do not derive or reset request identities from mutable visual
scripting or Traits state during reconnect.

## Conditions

- Compare Quantum Attribute
- Has Quantum Status Effect
- Has Exact Quantum Status Effect
- Has Verified Quantum Stats

Conditions read the most recent verified mirror.

## Events

On Quantum Stats Event can filter by delivery and event kind. Predicted delivery
is for responsive presentation, Predicted Confirmed commits it, Predicted
Canceled reverses it, and Verified is for trusted presentation and
gameplay-facing UI.

## Properties

- Quantum Attribute Value
- Quantum Stat Value
- Quantum Status Effect Stacks
- Exact Quantum Status Effect Stacks
- Quantum Status Effect Remaining Ticks

Properties return verified mirrored values. A missing entity, Stat, or Status
Effect returns the documented neutral value instead of mutating simulation.
Remaining Ticks returns `-1` for a permanent exact effect identity.

Quantum Status Effects are not copied into Game Creator
`RuntimeStatusEffects`: its local timers and asset hooks are presentation-time
objects and cannot become deterministic authority. Use these Quantum
Conditions, Properties, and Events to drive status UI and reversible effects.
