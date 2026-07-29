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

The package-owned Quantum Faction Catalog stores deterministic bake inputs and
defaults, not authoritative frame state. An editor-only package-owned section
asset now exposes that catalog as the sole option in the titled **Factions**
subsection of Core's single Quantum settings panel.

The binding uses module `factions`, section `quantum.factions.authoring`, order
`200`, and Core schema `1`. Null fails closed. The add-on owns neither a
separate repository nor Core's customer-project-local `quantum.general` asset.
Static source binding is complete; Unity persistence and removal lifecycle
proof remains pending. See [Settings](settings.md).

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
