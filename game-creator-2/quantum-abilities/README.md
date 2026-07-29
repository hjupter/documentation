---
description: Deterministic Game Creator 2 abilities powered by Photon Quantum.
---

# ⚛️ Quantum Abilities

Quantum Abilities connects Game Creator 2 and Daimahou Abilities authoring to a
Photon Quantum simulation. Ability outcomes are deterministic simulation state:
casts, targets, cooldowns, charges, resources, effects, statuses, loadouts, and
rejections all roll back and resimulate with the game.

Game Creator remains the authoring and presentation layer. Its Ability assets
provide names, icons, targeting intent, and visual presentation. They do not
decide whether a cast succeeds or apply authoritative gameplay effects.

{% hint style="warning" %}
This documentation describes an unreleased private release candidate. No public
package, compatibility promise, or migration path exists until the listed
release proof is complete.
{% endhint %}

## Supported workflows

- instant self, position, or entity-targeted abilities
- charged casts with simulation-tick minimum and maximum charge
- channelled casts with deterministic tick intervals
- learn, assign, and unassign operations using stable IDs
- tick-owned cooldowns, charges, resources, effects, and statuses
- predicted presentation plus verified irreversible presentation
- rollback, late join, and reconnect from Quantum frame state

Continue with [Setup](setup.md), then create the four representative definitions
in [Authoring](authoring.md). See [Settings](settings.md) for why this module
does not add global project options or an empty Quantum settings subsection.
