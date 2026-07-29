---
description: Diagnose Fusion Melee setup, authority, equipment, and impact issues
---

# Troubleshooting

## Input requests do nothing

Check that:

* the Character is a spawned Fusion `NetworkObject`
* the object has Input Authority
* **Fusion Melee Network** and its required input contributor are enabled
* Fusion Core input pooling is active on the same `NetworkRunner`
* no second Melee contributor is registered in that runner

Do not create a Melee-specific `NetworkInputData`.

## A weapon key is rejected

Keys must be unique values from `1` through `32767`. The requested key must
exist in **Weapons** on every client build, and each weapon asset may appear only
once.

## Equipment differs between clients

Confirm **Synchronize Equipment** is enabled and every client has the same
registry. Do not use asset instance IDs or different keys per build.

## A swap equips only one weapon

Use **Request Swap Melee Weapon** instead of issuing unrelated local equip and
unequip operations. The module queues both commands and contributes them on
consecutive input ticks.

## Attack state changes but animation does not

If **Synchronize Combo Selection** is enabled, confirm the registered weapon and
combo assets exist on the proxy.

If it is disabled, drive presentation from **On Network Melee Attack Changed**
and the phase, combo, charge, and weapon-key Properties.

## Damage happens twice

Apply damage only in project-owned State Authority combat logic.
**Report Authoritative Melee Impact** and **On Network Melee Impact** are
presentation boundaries; neither should be used for a second damage
application.

## A late joiner misses an old effect

Historical impacts are intentionally forward-only and are not replayed. Durable
equipment, attack, defense, target, and other current state should come from the
network snapshot.

## Reconnect snapshot appears, but new input is ignored

Make sure Input Authority was reassigned to the retained `NetworkObject`.
Do not spawn a second retained owner object. The candidate seeds its local
sequence from the authoritative last-accepted value and then requires the Core
contributor to register successfully.

## Lag-compensated strikers return no target

Confirm:

* the striker is bound below the configured Fusion Melee Network
* the target has compatible collider-backed Fusion hit geometry
* layers match the Melee striker mask
* the query runs on State Authority
* Host or Server topology has a valid Input Authority player for rewind

Shared Mode uses the current physics scene rather than historical rewind.

## Unity reports missing scripts or assembly errors

Verify the exact candidate dependencies and installation order from
[Setup](setup.md). Unity 6.4 and 6.5 are outside this candidate matrix. Reinstall
through **Tools → Ninjutsu Games → Fusion → Safe Install → Melee** instead of
the stock Game Creator Install window or manually moving module folders.

## Dependency preflight blocks installation

Read the failed requirement in the preflight result. For Game Creator Melee,
the candidate requires a numeric version of at least `2.2.14` at:

`Assets/Plugins/GameCreator/Packages/Melee/Editor/Version.txt`

Missing, malformed, duplicate, or older evidence is rejected before the package
changes the project. Correct the installed dependency; do not bypass the check
with raw package APIs.

## One local Play Mode window works

That is not multiplayer acceptance. Use separate processes in one real Fusion
Cloud session and cover authority, late join, disconnect, reconnect, equipment,
attacks, impacts, and project-owned damage.

{% hint style="warning" %}
Fusion Melee 1.0.0 remains unreleased until its serialized Unity, package,
platform, and separate-process Cloud gates are recorded.
{% endhint %}
