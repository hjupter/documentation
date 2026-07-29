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
6. Assign the Core-provided Abilities transport adapter to the bridge.
7. Assign a valid Game Creator authoring catalog.

The bridge inspector reports whether the transport and catalog are ready. A
missing dependency is an installation error; the module does not silently fall
back to local gameplay.

## Online configuration

Use a Photon Quantum AppId and a real Quantum Cloud session. A local debug runner
or a single editor can help author content, but neither is release or multiplayer
proof.
