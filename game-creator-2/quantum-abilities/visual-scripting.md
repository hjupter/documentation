# Visual Scripting

All entries appear under **Quantum → Abilities**.

## Instructions

- **Learn Quantum Ability** — request a catalog-validated learn operation.
- **Assign Quantum Ability** — assign a learned ability to a stable slot.
- **Unassign Quantum Ability** — clear a stable slot.
- **Start Quantum Ability Cast** — submit start and held intent.
- **Release Quantum Ability Cast** — release the current cast sequence.
- **Cancel Quantum Ability Cast** — cancel the current cast sequence.

The input driver supplies held intent each rendered frame; Quantum Core samples
and packs it into deterministic player input.

## Conditions

- **Quantum Ability Is Ready**
- **Quantum Ability Is Casting**
- **Quantum Ability Was Rejected**

Conditions read the verified mirror. They do not mutate simulation.

## Events

- **On Quantum Ability Lifecycle**
- **On Quantum Ability Rejected**
- **On Quantum Ability Effect**
- **On Quantum Ability Loadout Changed**

Choose verified-only delivery for audio, achievements, durable UI, spawned
objects, and any presentation that cannot be cleanly canceled. Predicted
presentation must be reversible and deduplicated.

## Properties

- **Quantum Ability Charges**
- **Quantum Ability Cooldown Ticks**
- **Quantum Ability Cast Phase**

Late join and reconnect rebuild these values from a verified Quantum frame; they
are not Game Creator save tokens.
