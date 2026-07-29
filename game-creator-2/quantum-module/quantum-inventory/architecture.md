# Deterministic Architecture

Quantum owns the inventory component, revisions, command history, validation,
recipes, equipment state, drops, and checksums.

Game Creator owns Item authoring, Bags, equipment presentation, UI, and Visual
Scripting. The local Bag is a mirror and must not be treated as authoritative.

Inventory mutations use one bounded reliable transaction command:

- 13-byte header
- up to 8 fixed 17-byte operations
- 149-byte maximum serialized payload
- no per-tick input fields

Every transaction includes a monotonic command ID and expected revision. All
operations validate against a working copy. The working copy commits only if
every operation succeeds, so crafting and multi-operation changes are atomic.

The view consumes synced events and verified frame state. Rollback or
resimulation cannot duplicate an accepted transaction, drop, use effect, equip
change, or craft result. Reconnect resumes from the simulation's component and
dedupe history.

Player-to-entity resolution and authorization are Core-owned. A view cannot
select an arbitrary inventory entity for mutation.
