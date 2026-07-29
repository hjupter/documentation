---
description: Network Game Creator 2 Melee combat with Photon Fusion 2
---

# ⚔️ Fusion Melee

Fusion Melee connects Game Creator 2 Melee to Photon Fusion 2. It contributes
combat input through Fusion Core, lets State Authority own replicated combat
state, and rebuilds presentation for other players, late joiners, and
reconnecting owners.

{% hint style="warning" %}
Fusion Melee 1.0.0 is an unreleased candidate. These pages document the current
draft implementation; they are not a release, compatibility, package, or
multiplayer-proof announcement.
{% endhint %}

## Candidate features

* networked weapon equip, unequip, and queued swaps
* tap, charge, execute, combo, and cancel input
* blocking, defense, poise, invincibility, and target snapshots
* authoritative attack phase, combo, charge, and weapon selection
* forward-only hit, blocked, parried, and guard-broken presentation events
* Fusion-aware sphere and capsule striker shapes
* late-join snapshots and reconnect input continuity
* Game Creator Instructions, Conditions, Events, and Properties

## Requirements

The 1.0.0 candidate targets this exact dependency set:

* Unity `6000.0.60f1` or `6000.3.14f1`
* Game Creator Core `2.18.60`
* Game Creator Melee `2.2.14`
* Photon Fusion SDK `2.1.1`, build `2177`
* Fusion Core `1.4.0` candidate

Unity 6.4 and 6.5 are not included in this candidate matrix. Game Creator,
Melee, Photon Fusion, and Fusion Core are separate dependencies and are not
embedded in the Fusion Melee package.

## Start here

1. Follow [Setup](setup.md) to prepare a network Character and weapon registry.
2. Read [Authority and synchronization](concepts.md) before connecting damage or
   effects.
3. Use the exact tools listed in [Visual scripting](visual-scripting.md).
4. Build a small test flow from [Examples](examples.md).
5. Keep [Troubleshooting](troubleshooting.md) available while validating two
   clients.

See [Releases](releases.md) for the customer-facing 1.0.0 candidate notes and
remaining release boundary.
