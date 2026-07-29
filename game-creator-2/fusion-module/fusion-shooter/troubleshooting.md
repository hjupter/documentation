---
description: Diagnose Fusion Shooter candidate setup and networking problems
---

# Troubleshooting

## The project does not compile after import

Check the dependency order and exact candidate matrix:

1. Game Creator 2 `2.18.60`
2. Shooter `2.2.7`
3. Fusion `2.1.1` Stable Build `2177`
4. Fusion Core `b2aa676972b0ce7f747a83bb9815f7057524e909`
5. Fusion Shooter `1.0.0` candidate

Confirm Fusion's version from `build_info.txt`. Unity versions other than `6000.0.60f1` and `6000.3.14f1` are outside this candidate matrix.

Do not copy cached proprietary assemblies from another project to hide a missing dependency.

## Safe Install blocks Fusion Shooter

Select the `Fusion.Shooter` Installer asset and run **Tools > Ninjutsu Games > Fusion > Safe Install > Add-On...**. The shared Core preflight requires:

* `GameCreator.Shooter` `2.2.7` or newer at `Assets/Plugins/GameCreator/Packages/Shooter/Editor/Version.txt`
* Game Creator Core and Fusion SDK requirements owned by Fusion Core
* Valid, unique and numerically parseable version evidence

The preflight intentionally fails closed when evidence is missing, below minimum, malformed, duplicated or conflicting. Fix the reported dependency; do not bypass the preflight.

Do not use the stock Game Creator `2.18.60` Install window for Fusion Shooter. It bypasses Core's package-resident guard and can treat a below-minimum installed version as acceptable. Add-ons must not invoke raw Game Creator or Unity package-install calls.

## The catalog reports invalid

Every entry needs:

* A unique, non-zero Catalog ID
* A unique, non-empty stable key
* A Shooter Weapon
* Positive magazine, cartridges-per-shot, fire-interval, reload, range and aim-bound values
* No more than 16 weapons
* Valid, unique sight mappings
* A registered prefab with `FusionShooterProjectile` for projectile entries

Use **Validate Catalog** after every deterministic catalog change.

## A peer reports a catalog mismatch

The state owner publishes the catalog schema and deterministic hash. Ensure every peer was built with identical IDs, stable keys and networked weapon settings. Rebuild all peers after a catalog change.

Do not reorder or reuse released IDs without incrementing the catalog schema and treating the change as a compatibility break.

## Instructions do nothing

Fusion Shooter Instructions submit only when:

* The target contains `FusionShooterNetwork`
* Its `NetworkObject` has input authority
* The Shooter contributor registered on the active `NetworkRunner`
* The requested catalog weapon or sight exists

A visual-scripting call on a proxy is intentionally ignored.

## A shot is predicted but never confirmed

State authority may reject the shot when:

* The submitted weapon is not equipped
* The magazine lacks enough cartridges
* Reload is active
* The fire interval has not elapsed
* The muzzle is farther from the player root than **Max Aim Origin Offset**
* The aim direction is invalid
* The command sequence was already accepted

Inspect authority-side logs and replicated ammunition instead of applying a fallback RPC.

## A remote shot uses the wrong direction

Assign the real muzzle Transform to **Aim Origin** on the player prefab. Input authority captures that origin and forward direction. Do not resolve another player's shot from the observing peer's camera or crosshair.

## Host/Server hitscan misses a moving target

Verify:

* The target has correctly configured Fusion `HitboxRoot` and `Hitbox` components
* The hitbox layer is in the weapon's **Hit Layers**
* The firing player has a valid input-authority `PlayerRef`
* The target is inside the configured range
* Dynamic colliders are not creating an unintended overlapping physics path

Lag compensation is available only in Host and Server topologies. Shared Mode uses current physics.

## A projectile does not spawn or collide

Confirm the catalog entry uses **Projectile**, references a prefab with `NetworkObject` and `FusionShooterProjectile`, and registers that prefab in Fusion's network project configuration.

Only state authority spawns the projectile. Check collision layers, range-related design, speed, gravity and lifetime. The projectile ignores its source `NetworkObject`.

## Damage runs twice

Check the catalog's **Damage Dispatch**:

* Choose **Shooter Hit Actions** for the authored Shooter hit flow.
* Choose **Damage Receiver** for a custom `FusionShooterDamageReceiver`.
* Choose the combined option only when both effects are intentional.

Do not apply damage again from **On Network Hit Confirmed**. That event is a replicated presentation hook.

## Ammunition appears to reset after a swap

Keep the weapon's catalog ID stable and do not replace the catalog at runtime. Fusion Shooter retains ammunition by catalog ID for up to 16 weapons.

If Game Creator's displayed munition differs briefly, read the network magazine and reserve properties; presentation reconciles from authoritative replicated state.

## Effects play twice

Separate predicted and confirmed presentation:

* Predicted effects should be local, reversible and keyed by the predicted shot sequence.
* Confirmed effects should be keyed by the replicated accepted-shot or hit sequence.
* Damage and rewards must remain state-authority-only.

## A late joiner has no weapon presentation

Confirm the player is a spawned `NetworkObject`, the peer has the identical catalog, and **Apply Game Creator Presentation** is enabled. Watch for catalog mismatch errors.

Use **On Network Shooter State Restored** to refresh dependent UI. Do not wait for an equip RPC that occurred before the peer joined.

## Reconnect restores state but new commands do not work

Restored state alone is not reconnect proof. Confirm that your session code:

1. Retains or restores the correct player object.
2. Reassigns input authority to the reconnecting `PlayerRef`.
3. Registers on the `NetworkRunner` that owns the restored object.
4. Allows the Shooter contributor to register after authority changes.
5. Seeds local command counters from the retained accepted sequences.
6. Submits a fresh equip, swap, fire or reload command and observes an authoritative state change.

Capture both pre- and post-command sequences. Do not report reconnect as working from a snapshot-only observation or an aim-state toggle.

## Duplicate input-contributor registration appears

Fusion Core's registry is scoped per `NetworkRunner`. There may be one Shooter contributor for a given slot in each runner. Check for duplicate `FusionShooterNetwork` components or stale objects within the same runner.

Separate runners may each register their own Shooter contributor; do not replace the shared root `NetworkInputData`.

## What currently counts as proof?

For this candidate, source validation, static tests, editor multi-peer and offline runs are diagnostics only. Release proof still requires:

* Clean compile and tests in Unity `6000.0.60f1` and `6000.3.14f1`
* Exact module and example package audits
* macOS and WebGL builds
* Asset Store Tools validation
* Separate Photon Cloud Host, primary, late-join and reconnect player processes

See [Examples](examples.md) for the required Cloud scenario and [Releases](releases.md) for current candidate status.
