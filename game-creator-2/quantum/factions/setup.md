# Setup and current gates

{% hint style="danger" %}
There is no supported install procedure yet. Do not import development exports
into a production project.
{% endhint %}

## Target dependencies

- Photon Quantum 3.0.12 Stable Build 2123
- Game Creator 2 Core 2.18.60 candidate
- A supported standalone Factions commit that is still being validated
- The exact pushed Quantum Core compatibility contract

Quantum 3.1 preview is not supported. The Unity 6 range will list only editors
that pass module-specific import, codegen, tests, examples, builds, packaging,
and real online validation.

## Before an install can be documented

1. Quantum Core must publish its exact deterministic command, event, catalog,
   simulation, view-bridge, and Game Creator settings-extension contract.
2. Standalone Factions must publish the stable ID and atomic membership restore
   APIs consumed by this module.
3. The package must compile and run codegen with licensed dependencies hydrated
   by the customer or CI; it must not contain paid SDK payloads.
4. Clean install, same-version reinstall, upgrade, add-on uninstall, and full
   uninstall must restore every owned root exactly.

The blocked development package owns only
`Assets/Plugins/NinjutsuGames/Packages/QuantumFactions`. It must not install or
remove the Core-owned `Assets/QuantumUser` generated output directly.

It also must not create a separate Quantum Game Creator settings repository or
directly mutate Core's settings asset. The applicable project-wide catalog
selector remains blocked until Core publishes the exact collision-safe
**Factions** subsection contract.
