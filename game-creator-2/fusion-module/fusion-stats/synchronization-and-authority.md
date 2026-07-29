# Synchronization and authority

## Replicated state

State Authority captures the complete Traits snapshot on spawn and after
authoritative changes. Remote peers apply snapshots during forward simulation
and rendering.

Fusion Stats synchronizes:

| Data | Replicated representation |
| --- | --- |
| Stats | Base value, aggregate Modifier contribution, final value, and whether Modifiers exist |
| Attributes | Current value |
| Status Effects | Effect ID, every active stack, and elapsed time |
| Class | Name and deterministic Stat/Attribute layout signature |

The default limits per Network Object are 64 Stats, 64 Attributes, and 64 active
Status Effect stacks. Stat and Attribute IDs must be 32 characters or fewer.

Modifier internals are not exposed by Stats 2. Remote peers reconstruct the
authoritative aggregate contribution as one constant Modifier. The resulting
value and `Has Modifiers` state remain correct, including negative and net-zero
results, but remote code should not inspect an assumed original Modifier list.

Formulas that use synchronized Stats and Attributes recalculate from the local
replica. A formula that also reads variables or other game state requires those
inputs to be synchronized by their owning Fusion system.

## State Authority Only

**State Authority Only** is the default and recommended policy. Only State
Authority can change synchronized Traits. This is appropriate for damage,
progression, rewards, AI, and other server-controlled gameplay.

Run the **Fusion → Stats** action on State Authority. Use
**Fusion → Network Object → Has State Authority** when a visual scripting graph
can run on more than one peer.

## Input Authority Requests

**Input Authority Requests** lets the object owner request a change through an
RPC. State Authority verifies that the sender owns the object, validates the
Stat, Attribute, Modifier, or Status Effect reference, applies the change, and
replicates the result.

{% hint style="warning" %}
Owner requests are trusted convenience commands, not prediction or server-side
game-rule validation. A Change action calculates its requested result from the
owner's current replica. Keep State Authority Only for contested or
security-sensitive gameplay.
{% endhint %}

## Prediction and resimulation

Fusion Stats does not predict Stats state. Network writes and mutation requests
are suppressed during resimulation. Authoritative snapshots are applied only in
forward simulation.

If predicted gameplay depends on a Stat, predict the gameplay command in your
own Fusion simulation and let State Authority commit the resulting Stats
mutation.

## Late join and reconnect

The initial snapshot includes existing Stats, Attributes, Modifiers, and every
active Status Effect stack. A late Client receives this snapshot when the
Network Object becomes available.

After reconnect, the Client receives the current authoritative snapshot. Input
Authority must be assigned again when your player-spawn flow creates a new
`PlayerRef`.

## Status Effect lifecycle actions

Reconstructing a Status Effect can execute its On Start, While Active, and On End
instructions on each peer. This is useful for local presentation.

Put gameplay-changing lifecycle instructions behind
**Fusion → Network Object → Has State Authority**. Presentation-only
instructions may run on all peers.
