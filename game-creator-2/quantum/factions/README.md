# Quantum Factions

{% hint style="warning" %}
Quantum Factions is in development. The Quantum Core contract, standalone
Factions version, Unity compatibility range, package exports, and online
multiplayer proof are not finalized. This page must not be used as a release or
compatibility claim.
{% endhint %}

Quantum Factions is designed to add deterministic teams, memberships,
directional relationships, reputation, and friendly-fire rules to Photon
Quantum projects built with Game Creator 2.

## Authority boundary

Quantum simulation owns every gameplay value. Game Creator Factions provides
catalog authoring, inspectors, visual scripting, and presentation. Verified
Quantum frame state is mirrored into Game Creator views; local `Member` or
`Faction` changes never decide multiplayer gameplay.

## Planned behavior

- Stable faction/catalog IDs and deterministic catalog checksums
- Multiple faction memberships and one primary faction per entity
- Directional Ally, Enemy, and Neutral relationships
- Reputation and reputation-tier changes
- Friendly-fire policies shared by Shooter, Melee, Abilities, and other damage
  systems
- Rollback-safe commands and resimulation
- Verified view events and idempotent predicted feedback
- Complete late-join and reconnect snapshots

The module requires customer-owned Photon Quantum, Game Creator 2, and
standalone Factions packages. Those paid dependencies are not redistributed.

* [Setup and current gates](setup.md)
* [Settings](settings.md)
* [Deterministic architecture](architecture.md)
* [Visual scripting reference](visual-scripting.md)
* [Multiplayer validation](multiplayer-validation.md)
* [Development changelog](changelog.md)
