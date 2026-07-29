# Authoring

Create a **Game Creator → Quantum → Abilities → Catalog** asset. Every entry maps
one Game Creator Ability asset to an immutable canonical key and deterministic
timing.

Define up to eight catalog resources with immutable keys, initial amounts, and
maximum amounts. Every ability cost must reference one of those definitions;
an unknown resource blocks the catalog bake and cannot silently become a free
cast. Amounts are authored in thousandths and bake to Quantum fixed point.

## Stable identity

Use lowercase path-like keys, for example:

- `ability/arc-bolt`
- `ability/charged-wave`
- `ability/healing-channel`
- `ability/blink`

Released keys must never be renamed or reused. The build hashes each key into a
stable unsigned 64-bit ID, sorts the deterministic catalog, and rejects empty or
duplicate IDs. Slot IDs are unsigned 16-bit stable identifiers, not array
indices.

## Example definitions

| Example | Delivery | Target | Key timing |
| --- | --- | --- | --- |
| Arc Bolt | Instant | Entity | cooldown, charges, recharge |
| Charged Wave | Charged | Position | minimum and maximum charge ticks |
| Healing Channel | Channelled | Self | channel interval ticks |
| Blink | Instant | Position | cooldown and deterministic range validation |

All durations are simulation ticks. Never convert them from `Time.time` or view
frame duration at runtime.

## Targets and aim

The input contract carries self, position, or entity target intent. Aim is
quantized to 12-bit yaw and 10-bit pitch. Position uses signed 16-bit axes at
1/32-unit precision relative to the anchor defined by Quantum Core. Entity
targets use the complete Quantum entity index and version.

The target is captured at cast start. Release and cancel use the same cast
sequence so rollback cannot attach an edge to a different cast.
