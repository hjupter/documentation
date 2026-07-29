# Faction Network

`FactionNetwork` replicates runtime state that belongs to a Faction asset rather than one Member.

## Add it

1. Create or select a persistent network scene object.
2. Add a Fusion `NetworkObject`.
3. Add **Game Creator → Fusion → Faction Network**.
4. Assign exactly one Faction asset.
5. Give the object stable State Authority and save the scene or prefab.

Create one authoritative component for each Faction whose runtime relationships or variables can
change.

## What is synchronized

* Supported Faction variables: numbers, booleans, strings, vectors, colors, and Fusion prefab
  references supported by the Fusion Core variable serializer
* The runtime relationship stance from this Faction toward each target Faction

The component supports up to 24 variables and 16 relationships per Faction. Variable names,
Faction identifiers, and relationship stance names must fit 64 Unicode characters. If a change
exceeds these limits, it is rejected and the last complete snapshot remains authoritative.

Relationship direction is preserved. If `Knights → Bandits` and `Bandits → Knights` can both
change, add a Faction Network for each source Faction.

## Authority

The Faction Network's State Authority is the only writer. For global scene state, use the host,
server, or Shared Mode master client.

Run relationship and Faction-variable instructions on that authority. A proxy-side mutation is
replaced by the replicated snapshot.

## Late join and authority transfer

The first State Authority captures the Faction's configured runtime values and relationships.
Later changes update the persistent snapshot. A late joiner or reconnecting client applies the
whole snapshot.

If State Authority changes, the new authority adopts the replicated snapshot before accepting
new writes. This avoids replacing current session state with that peer's local defaults.

## Troubleshooting

* **Relationship changes only on one client:** the instruction ran without State Authority, or
  the target Faction is missing from another client's catalogue.
* **A variable is skipped:** its type is not supported by Fusion Core's variable serializer.
* **A capacity error appears:** reduce the variable or relationship count, or shorten the
  reported name. The previous complete snapshot remains active.
* **Two values fight each other:** remove duplicate authoritative Faction Network components for
  the same Faction.
