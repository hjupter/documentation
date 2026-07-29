# Project Settings

## Current result: not applicable

Quantum Stats does not currently add a subsection to Game Creator's Quantum
Settings panel. This is intentional: the module has no real project-wide option
to persist, so an empty Stats heading or placeholder asset would add ambiguity
without configuring anything.

## Where authoring belongs

Quantum Stats keeps each choice at the scope where it is used:

- `QuantumStatsCatalogAsset` stores deterministic Stat, modifier, Status Effect,
  damage, and healing definitions plus their content digest;
- `QuantumStatsProfileAsset` explicitly selects a catalog and the Stats assigned
  to an entity;
- `QuantumStatsAuthoringCatalog` explicitly maps deterministic IDs to Game
  Creator Stats, Attributes, and Status Effects;
- `QuantumStatsBridge` explicitly selects the runner, entity, and verified
  mirror behavior for one object;
- `QuantumStatsTraitsPresenter` controls presentation-only mirroring for one
  object;
- `QuantumStatsEventRouter` explicitly references its runner-scoped Quantum Core
  event bridge.

These assets and components use normal Unity serialization. They retain their
own values through a domain reload; no separate global settings copy is needed.

## What is not configurable

Fixed-point format and rounding, deterministic capacities, payload sizes and
versions, system ordering, dedupe domains, and event-key history are contract
constants. Exposing them as mutable project settings could make authoring
incompatible with the generated deterministic simulation.

Quantum Stats therefore does not create a default-catalog lookup, a global
runner lookup, mutable capacity fields, or global presentation overrides. It
also stores no secret, Photon App ID, `EditorPrefs`, or `PlayerPrefs` value.

## Lifecycle

There are no Quantum Stats settings defaults to initialize, repository asset to
migrate, or module settings artifact to remove during uninstall. User-created
catalogs, profiles, mappings, and scene components remain explicit project
content and are not hidden inside a Core-owned settings asset.

## Core source reconciliation

This N/A result is reconciled to the immutable Quantum Core source candidate
`78feba0ff454828aeb425fc28a3c208f20ae7b25`.

Core's editor-only `QuantumSettingsContract` assigns Stats
`QuantumSettingsContribution.None`. Its `QuantumSettingsRegistry` rejects any
section asset declared for an N/A module. Although Core defines
`IQuantumSettingsContributor` and `QuantumSettingsSection` for applicable
add-ons, Quantum Stats implements neither type and consumes no Core settings
asset.

Stats consequently owns no subsection, section ID, module order, option,
default, settings path, settings GUID, or repository access. Core exclusively
owns `quantum.general`.

This reconciliation is source evidence, not release compatibility. Core records
its overall contract as `source-candidate` and its settings-window contract as
`pending`; its Unity matrix and release proof remain incomplete. Quantum Stats
does not consume the candidate's transport allocations or runtime compatibility.

If a genuine project-wide authoring option is implemented in the future, the
module must consume the exact pushed Quantum Core settings-extension contract.
It must not mutate or redefine Core's settings asset, create another Quantum
panel, or display an empty subsection.
