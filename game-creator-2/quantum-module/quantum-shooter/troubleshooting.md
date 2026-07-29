# Troubleshooting

## A shot animates but never hits

Confirm that the simulation entity has the Shooter components, a deterministic
transform and Quantum collider, and a weapon from the active deterministic
catalog. A Unity collider or GC2 raycast cannot substitute for the Quantum
query.

## The hit appears at the wrong point

Check the baked muzzle offset, quantized yaw and pitch, collision mask, fixed
tick rate, and deterministic projectile values. Moving the presentation muzzle
or camera does not move the simulation muzzle.

## Commands are rejected

Check that the bridge is bound to the local player's current Quantum entity, the
catalog revision matches, the IDs are released, and the delivered Quantum Core
commit matches the Shooter compatibility descriptor. Do not retry by inventing
a larger request sequence outside the bridge.

## Ammo or reload UI is stale

Drive authoritative UI from the verified Controller properties. Predicted shot
and reload events are suitable for reversible effects, not permanent ammo
accounting.

## Swapping refills ammunition

This is not expected. Version 1 stores up to eight per-weapon magazine/reserve
records inside deterministic Shooter State. Confirm both players use the exact
same generated Shooter schema and catalog hash. Do not reinitialize GC2 weapon
assets in response to a presentation equip event.

## VFX plays more than once

Consume the Shooter event bridge once. Do not invoke the same effect from both a
GC2 animation event and a Quantum callback. Persistent impact effects should use
verified events.

## Reconnect shows old equipment

Wait until the Controller reports **Ready** after Core restores the current
entity mapping and verified snapshot. Do not replay cached equip events.

## Code generation fails

Verify Quantum 3.0.12 Stable Build 2123, remove Quantum 3.1 preview files,
restore the single Core-owned DSL roots, and rerun code generation. Shooter must
not install its own root `Input`, command registry, or event bridge.
