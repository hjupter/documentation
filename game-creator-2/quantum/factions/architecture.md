# Deterministic architecture

## Catalog and IDs

The catalog baker creates positive 32-bit faction IDs, canonical reputation
thresholds, and sparse directional relationship defaults. It rejects duplicate
IDs, duplicate ordered relation pairs, unknown references, and configured
limits. A canonical checksum ensures every client starts from the same data.

The candidate migration source is standalone Factions' stable ID. That mapping
remains provisional until the supported Factions commit is pinned.

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
