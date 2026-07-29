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
- Quantum Shooter Has Sight
- Quantum Shooter Is Reloading
- Quantum Shooter Has Ammo
- Quantum Shooter Has Reserve Ammo
- Quantum Shooter Is Aiming

`Is Ready` becomes true only after the current entity has a verified frame,
including after reconnect. `Is Aiming` is the local sampled presentation state;
the other gameplay conditions read the verified mirror.

## Properties

- Quantum Shooter Weapon ID
- Quantum Shooter Ammo ID
- Quantum Shooter Sight ID
- Quantum Shooter Magazine
- Quantum Shooter Reserve Ammo
- Quantum Shooter Last Event Kind
- Quantum Shooter Last Projectile ID
- Quantum Shooter Last Surface Effect ID
- Quantum Shooter Last Damage
- Quantum Shooter Last Reject Reason

## Events

- On Quantum Shooter Weapon Changed
- On Quantum Shooter Shot
- On Quantum Shooter Reload Changed
- On Quantum Shooter Dry Fire
- On Quantum Shooter Projectile Spawned
- On Quantum Shooter Command Rejected
- On Quantum Shooter Verified Hit
- On Quantum Shooter Projectile Impact
- On Quantum Shooter Damage Applied

Use weapon, shot, reload, dry-fire, and projectile-spawn events for reversible
predicted animation, audio, camera, and VFX. Use command rejection, verified
hit, projectile impact, and damage events for persistent effects and
authoritative UI. The bridge suppresses duplicate response keys during rollback
and resimulation and can revoke a predicted response before replay.

These nine names are module-relative presentation semantics, not absolute Core
event IDs. Their final transport allocation remains subject to the exact pushed
Core contract and delivered compatibility descriptor.
