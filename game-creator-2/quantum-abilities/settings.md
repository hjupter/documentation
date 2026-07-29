# Settings

Quantum Abilities does not add a project-wide settings panel or an Abilities
subsection to the shared Quantum settings window. This is intentional: the
module has no global option whose scope is the complete Unity project.

| Surface | Where it is configured | Why it is not a project setting |
| --- | --- | --- |
| abilities, resources, costs, effects, statuses, and tick timings | each Quantum Ability Catalog | deterministic content must be explicit and independently identifiable |
| catalog selection | each bridge, scene, or prototype | multiple deterministic catalogs may coexist |
| predicted presentation and event bindings | each Quantum Abilities Bridge | presentation policy and callbacks belong to that view |
| default cast slot | each Quantum Abilities Input Driver | input mapping belongs to that input source |
| instruction, condition, event, and property operands | each visual-scripting node | graph configuration is local to the node |
| learned abilities, slots, casts, cooldowns, charges, resources, and effects | Quantum simulation state | authoritative state must roll back and resimulate |

There is no global default catalog, mutable capacity override, module-wide
authority toggle, Photon App ID, credential, token, password, or secret in
Quantum Abilities.

Quantum Core source contract
`78feba0ff454828aeb425fc28a3c208f20ae7b25` lists Abilities as
**not applicable** with contribution `none`, no registered subsection, no
repository ownership, and an empty project-options list. Abilities therefore
does not implement Core's editor-only contributor interface or settings-section
base type. This source assignment does not pin simulation transport allocations
or establish runtime compatibility; the external Settings-window contract
remains pending.

## Persistence and lifecycle

Catalogs and scene components use their normal Unity serialization. The
verified read model is discardable and is rebuilt from Quantum frames, including
after rollback, late join, or reconnect. Because no Abilities settings object
exists, settings defaults, settings persistence, and settings domain-reload
restoration are not applicable.

Released catalog keys remain immutable across upgrades. Uninstalling Quantum
Abilities removes only its package roots; it does not read, mutate, or delete
the Quantum Core settings asset. Reinstall the module and restore the same
catalog assets and canonical keys to reconnect authored content.

The machine-readable audit is
`contract/abilities.settings-audit.json` in the private Quantum Abilities
repository. Its source hashes make the N/A decision fail closed when an audited
surface changes.
