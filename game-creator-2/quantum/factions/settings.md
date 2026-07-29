# Settings

{% hint style="warning" %}
Quantum Factions now binds the pushed Quantum Core Settings source API, but
Unity persistence, upgrade, and uninstall lifecycle proof is still pending.
This page does not describe a supported release workflow.
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

## Quantum subsection source binding

The package ships one editor-only section asset at:

`Assets/Plugins/NinjutsuGames/Packages/QuantumFactions/Editor/Settings/QuantumFactionsSettingsSection.asset`

Quantum Core discovers it inside the one **Quantum** settings panel with:

- module `factions`;
- section ID `quantum.factions.authoring`;
- title **Factions**;
- order `200`;
- schema version `QuantumSettingsContract.SchemaVersion` (`1`).

The section exposes only the selected `QuantumFactionCatalogAuthoring` asset.
Its default is null and a missing selection fails closed. It is independently
serialized by Unity and contains no runtime membership, reputation, relation,
or friendly-fire state.

Core's `quantum.general` repository asset is customer-project-local at
`Assets/Plugins/GameCreator/Data/Resources/Settings/quantum.general.asset`.
Quantum Factions does not ship that asset or a fixed GUID for it. It also does
not:

- create a second Quantum Game Creator settings panel;
- redefine Core's settings repository or asset;
- mutate the Core settings asset through an independent editor script;
- store a Photon App ID, endpoint, credential, token, or other secret.

This binding targets Core source commit
`78feba0ff454828aeb425fc28a3c208f20ae7b25`. It does not pin Core as the final
module dependency and does not adopt Core's deterministic allocations.

## Standalone Factions settings

Standalone Factions already owns its `factions.general` settings repository and
the generated asset at:

`Assets/Plugins/GameCreator/Data/Resources/Settings/factions.general.asset`

That separate panel owns **Reputation Stances** and **Factions**, including its
default reputation thresholds `0`, `20`, `40`, and `80`. Quantum Factions does
not duplicate, modify, or uninstall those settings. Its Quantum
subsection will only select and validate Quantum-specific catalog authoring.

## Migration and uninstall

Core's source contract starts at clean settings schema `1`. No automatic
Factions migration is implemented. The candidate standalone-ID mapping remains
blocked on the supported Factions commit. Any future migration must be
versioned and idempotent, and must stop without writing if an identifier is
missing, duplicated, or ambiguous.

Uninstalling Quantum Factions removes its package-owned section asset, so Core
no longer discovers the **Factions** subsection. It must preserve:

- standalone Factions assets and its `factions.general` settings;
- the Quantum Core settings asset and every other add-on subsection;
- Core-owned consolidated Quantum generated output except through Core's
  explicit regeneration workflow.

The Core source contract defines independent ScriptableObject serialization
and deterministic rediscovery after domain reload. Clean creation, catalog
selection persistence, upgrade, domain reload, and add-on removal behavior
still require Unity validation when the heavy-work queue opens.
