# Visual scripting reference

These development titles exist in the current module source. Their behavior is
not a compatibility claim until the Core and Factions contracts are pinned and
Unity validation passes.

## Instructions

- **Quantum Join Faction** — requests a verified deterministic membership.
- **Quantum Leave Faction** — requests membership removal.
- **Quantum Set Primary Faction** — changes the primary existing membership.
- **Quantum Change Faction Reputation** — requests a signed reputation change.
- **Quantum Set Faction Relation** — changes one directional relation and its
  friendly-fire policy.

## Conditions

- **Quantum Is Member In Faction**
- **Quantum Faction Reputation**
- **Quantum Faction Relation**
- **Quantum Can Damage**

Conditions read the latest verified mirror. They do not mutate simulation.

## Events

- **On Quantum Membership Verified**
- **On Quantum Primary Faction Verified**
- **On Quantum Reputation Verified**
- **On Quantum Friendly Fire Denied**

The first three consume verified state. Friendly-fire denial is predicted,
deduplicated, and cancelable during rollback.

## Properties

- **Quantum Faction Reputation**
- **Quantum Primary Faction ID**
- **Quantum Faction Relation**
- **Quantum Faction Revision**

The revision property is useful for debugging conflict-checked commands. It is
not a persistent save identifier.
