# Authoring

Create a **Quantum Shooter Catalog** from:

`Assets > Create > Game Creator > Quantum > Shooter Catalog`

The catalog maps stable deterministic IDs to customer-owned GC2 presentation
assets. Renaming, moving, or reimporting a GC2 asset must not change its ID.

## Stable identities

Version 1 reserves explicit unsigned 16-bit identities for:

- weapons
- ammunition
- sights
- projectiles
- surface effects
- damage profiles

Zero means none. Released IDs are bounded by the compatibility descriptor, and
the all-ones value is invalid. Stable names are limited to 64 UTF-8 bytes.
Duplicate or out-of-range identities block release validation.

The deterministic catalog stores fixed-tick cadence and reload durations,
fixed-point distance, projectile velocity and lifetime, pellet count, damage,
spread, recoil, collision masks, and baked muzzle offsets. Presentation
mappings reference GC2 `ShooterWeapon`, `Sight`, view prefabs, and impact
prefabs; these references never enter the simulation.

Loadout state is folded into the deterministic Shooter State component. Version
1 preserves magazine and reserve values for up to eight equipped weapon
definitions. Swapping cannot refill a previously used weapon.

## Player view

Add these components to the GC2 player view:

- Quantum Shooter Controller
- Quantum Shooter Input Source
- the Quantum Core bridge delivered by the compatible Core package

The controller is a request surface and verified read model. It does not own
ammo, equip state, cadence, collision, or damage.

## Sample

The delivered source sample contains an original primitive arena builder,
player view, hitscan and projectile weapon definitions, sights, targets, all
six stable catalog namespaces, and presentation mappings. Its JSON definition
is deterministic and bounded, but its Core bindings intentionally remain null
until the exact pushed Core contract is consumed. Building the presentation
arena does not create or prove Quantum prototypes, generated simulation assets,
networking, or Cloud behavior.

A sample with missing scripts, placeholder catalog hashes, unresolved Core
bindings, or no separate-process Cloud proof is not release-ready.
