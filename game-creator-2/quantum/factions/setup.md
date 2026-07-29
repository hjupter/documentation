# Setup and current gates

{% hint style="danger" %}
There is no supported install procedure yet. Do not import development exports
into a production project.
{% endhint %}

## Target dependencies

- Photon Quantum 3.0.12 Stable Build 2123
- Game Creator 2 Core 2.18.60 candidate
- A supported standalone Factions commit that is still being validated
- Quantum Core source/API candidate `78feba0` for Settings only; final
  deterministic compatibility pin pending

Quantum 3.1 preview is not supported. The Unity 6 range will list only editors
that pass module-specific import, codegen, tests, examples, builds, packaging,
and real online validation.

## Before an install can be documented

1. Quantum Core must publish its final deterministic command, event, catalog,
   simulation, and view-bridge contract. The pushed Settings source API is
   already bound but still needs Unity lifecycle proof.
2. Standalone Factions must publish the stable ID and atomic membership restore
   APIs consumed by this module.
3. The package must compile and run codegen with licensed dependencies hydrated
   by the customer or CI; it must not contain paid SDK payloads.
4. Clean install, same-version reinstall, upgrade, add-on uninstall, and full
   uninstall must restore every owned root exactly.

The blocked development package owns only
`Assets/Plugins/NinjutsuGames/Packages/QuantumFactions`. It must not install or
remove the Core-owned `Assets/QuantumUser` generated output directly.

It also does not create a separate Quantum Game Creator settings repository or
directly mutate Core's settings asset. Its editor-only **Factions** subsection
contains one null-by-default catalog reference. Core's `quantum.general` asset
remains customer-project-local and is not included in this package.
