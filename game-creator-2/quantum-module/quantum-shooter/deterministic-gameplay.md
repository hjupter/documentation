# Deterministic Gameplay

## Input

Quantum Shooter contributes one 32-bit payload to Quantum Core's single root
input:

| Field | Bits | Values |
| --- | ---: | --- |
| Fire held | 1 | 0 or 1 |
| Aim held | 1 | 0 or 1 |
| Reload held | 1 | 0 or 1 |
| Alternate fire held | 1 | 0 or 1 |
| Aim yaw | 12 | 0...4095 |
| Aim pitch | 11 | 0...2047 |
| Reserved | 5 | zero in payload version 1 |

Yaw wraps over `[-180, 180)` degrees. Pitch clamps to
`[-89.5, 89.5]` degrees. The payload never transports a Unity transform, ray,
target, aim origin, or muzzle position. Quantum derives those values from
simulation state.

Equip, unequip, swap, and sight selection use bounded, sequenced deterministic
commands. Fire, aim, reload, and alternate fire remain repeatable per-tick
input. No client damage, hit, or ammo-grant command exists.

## Tick order

The compatible Quantum Core descriptor fixes module order. At a high level:

1. Core maps player input to the current deterministic entity.
2. Installed ownership and modifier modules expose simulation state.
3. Shooter validates commands, catalog revision, IDs, and request sequences.
4. Folded loadout state restores the selected weapon's preserved magazine and
   reserve values, then reload and cooldown state advance.
5. Accepted shots consume ammo and derive deterministic spread and recoil.
6. Quantum Physics resolves hitscan or fixed-tick projectile travel.
7. Shooter emits a bounded hit request to the shared damage consumer.
8. The damage consumer applies the request once.
9. Predicted and verified presentation events leave the simulation.

Rollback and resimulation execute the same sequence from the same fixed-point
state. View callbacks cannot feed results back into the simulation.

## Presentation deduplication

Every view response key includes the Core runner/session generation, entity
identity, event kind, simulation sequence, and sub-event ordinal. Predicted
responses can be canceled and later replayed. Verified responses are consumed
once.

Reconnect starts a new view generation, applies a verified snapshot, and resets
the presentation ledger. Active projectiles remain ordinary simulation
entities.

Shooter owns exactly three active components in version 1: Shooter State,
Shooter Projectile, and Shooter Hit Record. Loadout and per-weapon ammo data
live inside Shooter State; Shooter does not define another root input, an input
intent component, or a damage/vitals component.
