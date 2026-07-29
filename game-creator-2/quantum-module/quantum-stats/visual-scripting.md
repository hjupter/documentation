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

## Conditions

- Compare Quantum Attribute
- Has Quantum Status Effect
- Has Verified Quantum Stats

Conditions read the most recent verified mirror.

## Events

On Quantum Stats Event can filter by delivery and event kind. Predicted delivery
is for responsive presentation. Verified delivery is for trusted presentation
and gameplay-facing UI.

## Properties

- Quantum Attribute Value
- Quantum Stat Value
- Quantum Status Effect Stacks

Properties return verified mirrored values. A missing entity, Stat, or Status
Effect returns the documented neutral value instead of mutating simulation.
