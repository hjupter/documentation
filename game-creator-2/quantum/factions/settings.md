# Settings

{% hint style="warning" %}
The Quantum Core settings-extension contract is not finalized. Quantum
Factions does not currently add a project-settings subsection, and this page
does not describe a supported release workflow.
{% endhint %}

## Current authoring surface

The only implemented configuration surface is the package-owned **Quantum
Faction Catalog** asset, created from:

`Game Creator → Quantum → Factions → Catalog`

The catalog stores:

- schema version `1`;
- standalone Faction asset to positive deterministic `Int32` ID mappings;
- reputation thresholds keyed by deterministic faction ID;
- sparse directional Ally, Enemy, or Neutral relationships;
- the friendly-fire default for each configured directional relationship.

A new catalog starts with empty faction, threshold, and relation lists. Unity
asset serialization persists these authoring values. The catalog does not own
runtime membership, reputation, relation overrides, or friendly-fire outcomes;
those values remain in Quantum's deterministic frame state.

## Planned Quantum subsection

A project-wide catalog selector is applicable and will use the subsection title
**Factions** inside the one Quantum settings panel owned by Quantum Core.
Quantum Factions will not:

- create a second Quantum Game Creator settings panel;
- redefine Core's settings repository or asset;
- mutate the Core settings asset through an independent editor script;
- store a Photon App ID, endpoint, credential, token, or other secret.

The exact Core repository ID, asset path, extension type, order, persistence
hook, migration hook, and add-on removal behavior remain unresolved. No
subsection implementation will be shipped until Core publishes and statically
validates that contract.

## Migration and uninstall

No automatic migration is implemented. The candidate source is standalone
Factions' unique faction identifier, but the exact one-to-one mapping remains
blocked on the supported standalone Factions commit. A future migration must
be versioned and idempotent, and must stop without writing if an identifier is
missing, duplicated, or ambiguous.

Uninstalling Quantum Factions may remove only
`Assets/Plugins/NinjutsuGames/Packages/QuantumFactions` and its own subsection
data through Core's future removal contract. It must preserve:

- standalone Factions assets and its `factions.general` settings;
- the Quantum Core settings asset and every other add-on subsection;
- Core-owned consolidated Quantum generated output except through Core's
  explicit regeneration workflow.

Domain-reload persistence and add-on present/absent/removal behavior still
require Unity validation after the contract is exact and the heavy-work queue
opens.
