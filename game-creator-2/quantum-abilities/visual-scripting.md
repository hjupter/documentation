# Visual Scripting

All entries appear under **Quantum → Abilities**.

## Instructions

- **Learn Quantum Ability** — request a catalog-validated learn operation.
- **Assign Quantum Ability** — assign a learned ability to a stable slot.
- **Unassign Quantum Ability** — clear a stable slot.
- **Start Quantum Ability Cast** — submit start and held intent.
- **Hold Quantum Ability Cast** — update held target and quantized aim intent.
- **Release Quantum Ability Cast** — release the current cast sequence.
- **Cancel Quantum Ability Cast** — cancel the current cast sequence.

The input driver supplies held intent each rendered frame; Quantum Core samples
and packs it into deterministic player input.

## Conditions

- **Quantum Ability Is Ready**
- **Quantum Ability Is Casting**
- **Quantum Ability Was Rejected**
- **Quantum Ability Is Learned**
- **Quantum Ability Is Assigned**
- **Quantum Ability Effect Is Active**

Conditions read the verified mirror. They do not mutate simulation.

## Events

- **On Quantum Ability Lifecycle**
- **On Quantum Ability Rejected**
- **On Quantum Ability Effect**
- **On Quantum Ability Loadout Changed**
- **On Quantum Ability State Restored**

Choose a delivery phase per event: predicted, predicted confirmed, predicted
canceled, or verified. Use verified delivery for audio, achievements, durable
UI, spawned objects, and presentation that cannot be cleanly canceled.
Predicted presentation must be reversible and respond to the matching canceled
delivery.

## Properties

- **Quantum Ability Charges**
- **Quantum Ability Cooldown Ticks**
- **Quantum Ability Cast Phase**
- **Quantum Ability Resource**
- **Quantum Ability Effect Stacks**

Late join and reconnect rebuild these values from a verified Quantum frame; they
are not Game Creator save tokens.
