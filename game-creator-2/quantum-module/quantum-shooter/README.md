# Quantum Shooter

Quantum Shooter turns Game Creator 2 Shooter authoring into deterministic,
rollback-safe multiplayer gunplay. Quantum resolves equipment, aim intent, fire
cadence, reloads, ammunition, gameplay spread and recoil, hitscan and projectile
collision, and the damage handoff. GC2 Shooter supplies weapon authoring,
animation, cameras, IK, UI, audio, and VFX.

## Requirements

The current private release target is:

- Photon Quantum 3.0.12 Stable Build 2123
- Game Creator Core 2.18.60
- Game Creator Shooter 2.2.7
- the exact Quantum Core commit declared by the delivered package
- a Unity 6 editor listed by the delivered compatibility descriptor

Quantum Animator 3.0.11 is optional and customer-installed. Standard GC2 and
Mecanim presentation does not require it.

## Authority

The simulation derives the muzzle from deterministic entity state and performs
Quantum Physics queries. Unity raycasts may support previews or cosmetic effects
but cannot choose a hit, damage value, ammo result, or cooldown.

Responsive animation, muzzle flash, audio, camera shake, and tracers may consume
predicted events when they can be canceled or safely replayed. Persistent impact
effects, damage UI, rewards, and other irreversible responses consume verified,
deduplicated events.

Late join and reconnect restore the verified simulation snapshot. They do not
replay cached view callbacks to reconstruct gameplay.

## Version 1 limits

- Loadouts contain at most eight weapons. Magazine and reserve state are
  preserved per weapon when swapping.
- Each accepted shot emits at most 32 pellets.
- Hitscan pellets and projectiles stop at their first deterministic impact;
  penetration is not supported.
- The latest 16 deterministic hit results are retained per shooter for bounded
  view reconstruction.
- Version 1 uses Quantum Physics 3D.

## Intentionally unsupported

- Quantum 3.1 preview
- runtime-generated or string-hashed catalog identities
- Unity Physics or animation events as an outcome source
- client-authored damage or ammunition grants
- mutable GC2 assets as simulation state
- redistribution of Photon, Game Creator, Quantum Animator, or third-party
  sample assets

Additional limits are recorded in the delivered compatibility descriptor after
the release matrix is complete.
