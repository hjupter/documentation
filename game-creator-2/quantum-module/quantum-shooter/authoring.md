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

## Game Creator project settings

Quantum Shooter currently has no project-global default to configure. This is
an intentional N/A result, not an omitted gameplay setting.

- Deterministic tuning and identities persist in baked Quantum catalog assets.
- Presentation mappings persist in explicit `QuantumShooterCatalog` assets,
  prefabs, and scenes.
- Input values are live per-player component state.
- Shooter stores no Photon App ID, credential, or secret.

Shooter does not create a separate Game Creator settings repository, mutate the
Quantum Core settings asset, or silently fall back to a global presentation
catalog. The settings audit classifies Shooter as **not applicable**, so there
is no empty Shooter subsection and no Shooter settings asset/path/GUID/ID. The
final Core contract must carry the hashed N/A evidence without rendering UI;
Shooter will not bind any settings extension until that exact contract is
published.

Core source candidate
`78feba0ff454828aeb425fc28a3c208f20ae7b25` makes this omission explicit:
Shooter is `QuantumSettingsContribution.None`, implements no contributor, owns
no section asset, and is rejected if it attempts to add one. Core alone owns
the `quantum.general` repository. This records source architecture only; the
Core Settings contract remains pending, its Unity matrix is empty, and no
transport allocation or release compatibility is implied.

Existing catalogs and component references require no project-settings
migration. Uninstalling Shooter must leave the Core settings asset unchanged
and cannot leave a Shooter settings repository behind.

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
