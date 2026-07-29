# Visual Scripting

Quantum Shooter adds GC2 visual-scripting units under **Quantum > Shooter**.
Instructions submit input or commands. Conditions and properties read the local
input mirror or the latest verified Quantum snapshot. Events drive
presentation; they never decide simulation outcomes.

## Instructions

- Quantum Equip Shooter Weapon
- Quantum Unequip Shooter Weapon
- Quantum Swap Shooter Weapon
- Quantum Select Shooter Sight
- Quantum Set Fire Held
- Quantum Set Aim Held
- Quantum Set Reload Held
- Quantum Set Alternate Fire Held

Equipment instructions send sequenced deterministic commands. Held-input
instructions update values sampled by Quantum Core's input poll.

## Conditions

- Quantum Shooter Is Ready
- Quantum Shooter Has Weapon
- Quantum Shooter Is Reloading
- Quantum Shooter Has Ammo
- Quantum Shooter Is Aiming

`Is Ready` becomes true only after the current entity has a verified frame,
including after reconnect. `Is Aiming` is the local sampled presentation state;
the other gameplay conditions read the verified mirror.

## Properties

- Quantum Shooter Weapon ID
- Quantum Shooter Sight ID
- Quantum Shooter Magazine
- Quantum Shooter Reserve Ammo

## Events

- On Quantum Shooter Weapon Changed
- On Quantum Shooter Shot
- On Quantum Shooter Reload Changed
- On Quantum Shooter Dry Fire
- On Quantum Shooter Verified Hit
- On Quantum Shooter Damage Applied

Use shot and reload events for reversible predicted animation, audio, camera, and
VFX. Use verified hit and damage events for persistent effects and authoritative
UI. The bridge suppresses duplicate response keys during rollback and
resimulation.

The exact release surface, including projectile and rejected-command
presentation, remains subject to the final Core event allocation and delivered
compatibility descriptor.
