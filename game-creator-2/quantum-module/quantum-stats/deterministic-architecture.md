# Deterministic Architecture

## Simulation owns gameplay

Every current value, modifier, regeneration step, damage result, and Status
Effect lives in Quantum frame state. This makes the state part of checksums,
snapshots, rollback, and resimulation.

Game Creator objects are intentionally outside that authority boundary:

- authoring catalogs provide immutable definitions and stable IDs;
- Instructions encode a 48-byte Stats payload inside Quantum Core's sole
  deterministic command envelope;
- Conditions and Properties read the verified mirror;
- Events react to predicted or verified simulation events;
- UI reads presentation data and never writes a Quantum frame.

## Fixed-point conversion

Authored decimal values convert to signed Q16.16 using round-to-nearest with
ties away from zero. Non-finite and overflowing values are rejected.

Durations are stored as simulation ticks. Seconds convert to ticks with the
same rounding rule and the active Quantum update rate.

## Stable ordering and identity

Stats are ordered by stable Stat ID. Modifiers are ordered by Stat ID,
priority, source ID, and Modifier ID. Status Effects are ordered by Effect ID,
source ID, and source entity.

An active Status Effect identity includes the Effect ID and source ID. Duration,
stack count, generation, and source entity are rollback-safe state. The source
entity is also part of identity, so two entities can apply the same Effect and
source ID independently. Removing the final stack removes that exact identity.

Catalog IDs are positive, globally unique signed 32-bit values. Modifiers,
Status Effects, damage types, and healing types are resolved from the immutable
catalog; invalid IDs, duplicate IDs, mismatched target Stats, and amounts
outside catalog bounds are rejected.

## Commands and authorization

Quantum Core owns the command transport and numeric allocations. Stats does not
declare another deterministic command or root Input.

Version 1 Stats commands are direct mutations, not raw player combat intent.
Core must therefore authorize them only for the trusted session coordinator.
Ordinary combat and ability systems call deterministic Stats signals after
validating their own input, cooldown, catalog, and ownership state. Owning an
entity alone does not authorize a client to set, damage, heal, reset, or add an
effect.

## Predicted and verified presentation

Predicted events can provide immediate local feedback. Synced events wait for a
verified frame. Both deliveries carry the same deterministic event key so view
effects remain idempotent through rollback. The view deduplicates predicted and
verified delivery independently: one predicted effect cannot suppress the later
verified notification.

Late join and reconnect rebuild the presentation mirror from the verified
Quantum frame. Game Creator save tokens are not used as multiplayer authority.
