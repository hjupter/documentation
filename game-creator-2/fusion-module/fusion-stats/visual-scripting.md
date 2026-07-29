# Visual scripting

Fusion Stats 1.1.0 adds these actions under **Fusion → Stats**:

| Action | Purpose |
| --- | --- |
| Change Network Stat | Changes a Stat base value |
| Change Network Attribute | Changes an Attribute current value |
| Add Network Stat Modifier | Adds a constant or percentage Modifier |
| Remove Network Stat Modifier | Removes an equivalent Modifier |
| Add Network Status Effect | Adds one Status Effect stack |
| Remove Network Status Effect | Removes one or more stacks |
| Clear Network Status Effects Type | Clears Positive, Negative, or Neutral effects |

Each action:

1. Finds **Traits Network** on the target.
2. Applies immediately when the caller has State Authority.
3. Sends an owner request when Input Authority Requests is enabled and the caller
   has Input Authority.
4. Rejects the mutation otherwise.

## Reading synchronized values

Keep using the standard Stats 2 read surfaces:

* Stat and Attribute conditions
* Stat and Attribute change events
* Status Effect conditions and counts
* Number, text, and boolean properties
* Formulas
* Stats UI components

These read the local Traits replica after Fusion Stats applies the authoritative
snapshot.

## Custom conditions and actions

Fusion does not transmit a custom condition or action just because it appears in
a Game Creator graph.

Custom read-only conditions may evaluate normal Stats APIs on each peer because
Fusion Stats keeps the local Traits replica synchronized. A custom action that
changes Stats must either run only on State Authority or call the matching public
method on **Traits Network**. Do not mutate `RuntimeStats`,
`RuntimeAttributes`, or `RuntimeStatusEffects` directly on a proxy and expect
that local change to replicate.

## Migrating an existing graph

Replace mutating Stats 2 actions with their network counterpart. Conditions,
events, properties, formulas, and UI do not need network-specific replacements.

For an authoritative damage graph:

1. Check **Fusion → Network Object → Has State Authority**.
2. Calculate damage.
3. Run **Change Network Attribute** against the target health Attribute.
4. Let normal Stats events and UI react to the replicated value.

For a trusted owner request:

1. Enable **Input Authority Requests** on Traits Network.
2. Confirm the target Network Object assigns Input Authority to that owner.
3. Run the desired **Fusion → Stats** action on the owner.
4. Treat the request as an absolute authoritative mutation, not predicted state.
