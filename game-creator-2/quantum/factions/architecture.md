# Deterministic architecture

## Catalog and IDs

The release catalog baker must create positive 32-bit faction IDs, canonical
reputation thresholds, and sparse directional relationship defaults. It must
reject duplicate IDs, duplicate ordered relation pairs, unknown references,
and configured limits. A canonical checksum will ensure every client starts
from the same data. The baker remains blocked on the exact standalone Factions
stable-ID contract.

The candidate migration source is standalone Factions' stable ID. That mapping
remains provisional until the supported Factions commit is pinned.

## Settings boundary

The package-owned Quantum Faction Catalog is the only implemented
configuration surface. It stores deterministic bake inputs and defaults, not
authoritative frame state.

A project-wide catalog selector belongs in a titled **Factions** subsection of
the single Quantum settings panel owned by Core. The add-on does not own a
separate settings repository and must not modify Core's settings asset through
an incompatible editor path. Exact subsection types, ordering, persistence,
migration, and removal behavior remain blocked on Core's published contract.
See [Settings](settings.md).

## Frame state

Each Quantum entity stores its memberships, primary faction, reputation, and
revision in deterministic component state. A singleton stores the catalog hash,
runtime directional relation overrides, friendly-fire policies, and command
dedupe cursors.

All gameplay systems use deterministic queries such as `IsMember`,
`GetReputation`, `GetRelation`, and `CanDamage`. Damage-producing modules must
call `CanDamage` before changing health.

## Commands and ordering

Factions requests zero per-tick input bits. Bounded commands handle membership,
primary faction, reputation, relation, and friendly-fire mutations. Quantum
Core assigns command identifiers, resolves players to entities, validates the
session role, and runs Factions before gameplay consumers.

## Prediction, verification, and reconnect

Durable view updates use synced events emitted only after input verification.
The verified frame snapshot—not an event history—is the source of truth for
late join and reconnect.

Predicted damage-denied feedback is keyed by frame, source, target, and hit ID.
Duplicate prediction is ignored, rollback cancellation removes the effect, and
predicted callbacks never update persistent Game Creator state.

## Package ownership

Quantum Factions owns one package root:
`Assets/Plugins/NinjutsuGames/Packages/QuantumFactions`. Its compatibility
descriptor, semantic inventory, and deterministic DSL are package-resident.
Repository-level descriptor aliases are rejected.

The add-on does not own Quantum's consolidated generated-code directory. Core
owns that output and regenerates it for the complete installed module set;
Factions declares only its generated type names for collision checks.
