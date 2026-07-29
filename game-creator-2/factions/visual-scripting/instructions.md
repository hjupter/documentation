# Instructions

## Membership and reputation

* **Join Faction** — adds a Member to a Faction with optional initial points.
* **Leave Faction** — removes a Member and that faction's reputation entry.
* **Change Faction Points** — adds, subtracts, or sets reputation points,
  clamped to the Faction thresholds.
* **Set Member Ignore Reputation** — includes or excludes reputation when
  resolving a Member's status.

## Relationships and values

* **Set Faction Status** — changes one Faction's status toward another; the
  optional two-way setting explicitly updates both directions.
* **Set Faction** — assigns a Faction property or variable.

## Lists and targeting

* **Fill List with Members** — fills a list with all current members of a
  Faction.
* **Collect Members** — collects nearby members of one Faction.
* **Collect Members Status** — collects nearby members matching a status.
* **Collect Targets Status** — collects target candidates matching a status.
* **Add Target Candidates from Faction** — adds members of a Faction to a
  Character's target candidates.

Collection nodes ignore null or destroyed targets and honor the configured
origin, minimum radius, maximum radius, filters, and source Member.
