# Deterministic Model

Quantum simulation owns the complete result:

- learned abilities and stable slot assignments
- active cast phase and target snapshot
- per-ability cooldown end tick
- charge count and next recharge tick
- resource balances and committed costs
- active effect and status IDs, magnitude, stacks, and expiry
- sequence deduplication and rejection reason

The module uses one Core-owned 192-bit input contribution. It does not declare a
second root `Input`. Cast start, held, release, and cancel share one 16-bit cast
sequence. Edge dedupe uses the caster, sequence, and edge kind; wrap comparisons
use the half-range rule.

The Core transport owns the non-zero 64-bit request IDs used by learn, assign,
and unassign commands. It also allocates non-zero cast sequences from verified
state. Neither counter belongs to the GameObject bridge, so recreating a view or
reconnecting cannot restart a dedupe stream.

## Optional integrations

Quantum Stats can accept resource spending and effect/status handoff through an
explicit deterministic signal. Quantum Factions can accept or deny eligibility
before resource commit. Both are optional compile-time contracts. Quantum
Abilities has no assembly reference to either module, and absence leaves the
internal bounded resource/effect state active.

## Ordering

1. Core decodes player input.
2. Core routes learn, assign, and unassign commands.
3. Factions may evaluate target eligibility.
4. Abilities validates slot, target, cooldown, charges, and resources.
5. Stats may commit an external resource cost.
6. Abilities applies deterministic effects and statuses.
7. Predicted view events are confirmed or canceled; verified events are
   independently deduplicated.
8. Recharge, expiry, and cleanup run in deterministic order.

No Unity API, `Time.time`, mutable GameObject, or view callback decides gameplay.
