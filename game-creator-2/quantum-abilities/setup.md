# Setup

## Requirements

The current release candidates are Photon Quantum **3.0.12 Stable Build 2123**,
Game Creator 2 Core **2.18.60**, and Daimahou Abilities **2.0.1**. The final
Quantum Core commit and supported Unity 6 editors will be listed only after
module-specific compile, code generation, build, and online proof.

The package does not contain Photon Quantum, Game Creator, or Daimahou Abilities.
Install your licensed copies first.

## Scene setup

1. Install the exact Quantum Core release required by the compatibility
   descriptor.
2. Import Quantum Abilities.
3. Run Quantum code generation.
4. Add `QuantumAbilitiesState` to the deterministic player avatar prototype and
   select the baked Quantum ability catalog.
5. Add `QuantumAbilitiesBridge`, `QuantumAbilitiesReadModel`, and
   `QuantumAbilitiesInputDriver` to the matching player view.
6. Assign the Abilities Core transport adapter to the bridge and register it as
   Core's single Abilities input contributor for that runner.
7. Assign a valid Game Creator authoring catalog.

The bridge inspector reports whether the transport and catalog are ready. A
missing dependency is an installation error; the module does not silently fall
back to local gameplay.

## Install, upgrade, and uninstall

The release artifact will install only this owned root:

`Assets/Plugins/NinjutsuGames/Packages/Quantum/SubModules/QuantumAbilities`

Do not copy the package over an older development snapshot. Back up the project,
remove that exact owned root, confirm that no duplicate Quantum Abilities
descriptor remains, and then import the new artifact. Quantum Core and licensed
Photon Quantum, Game Creator, and Daimahou Abilities packages remain
customer-managed dependencies and must not be removed with this module.

To uninstall, remove the exact owned root and any project-authored catalogs,
view components, or visual-scripting references that depend on it. Run Quantum
code generation afterward so the customer project's Core-owned consolidated
output no longer contains Abilities types.

The canonical package descriptor is:

`Assets/Plugins/NinjutsuGames/Packages/Quantum/SubModules/QuantumAbilities/Compatibility/quantum-abilities.compatibility.json`

An alternate path or a second copy is invalid.

## Online configuration

Use a Photon Quantum AppId and a real Quantum Cloud session. A local debug runner
or a single editor can help author content, but neither is release or multiplayer
proof.
