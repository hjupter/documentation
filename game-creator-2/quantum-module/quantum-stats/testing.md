# Testing

Quantum Stats will not make compatibility claims until all required evidence is
complete.

## Required release proof

- clean import, compile, and Quantum code generation on every claimed Unity
  editor;
- Edit Mode and Play Mode tests;
- deterministic modifier, damage, healing, regeneration, Status Effect,
  rollback, resimulation, and checksum tests;
- example validation with no missing scripts;
- macOS and WebGL player builds where supported;
- Asset Store Tools validation;
- exact package export inspection;
- clean install, same-version reinstall, upgrade, partial uninstall, and full
  uninstall;
- a real separate-process two-client Quantum Cloud run.

The online proof must show matching checksums, predicted and verified behavior,
Status Effect lifecycle, late join, disconnect, and reconnect. Local Debug,
one editor, or Core-only behavior is not module proof.

## Current status

The independent deterministic contract, catalog digest, catalog validation,
rollback, snapshot, reconnect, and lock protocol tests pass as source-level
checks. Static package validation also checks the exact 22-item visual scripting
surface, deterministic GUID derivation, assembly ownership, and the absence of
vendored SDK payloads.

The package-resident export plan lists separate module and examples artifacts,
but both remain explicitly unproven with null content and artifact hashes. The
module's simulation asmref and sole compatibility descriptor remain
intentionally unmaterialized. Quantum SDK code generation, Unity tests and
builds, exported packages, install lifecycle, and Cloud proof remain blocked
until Quantum Core supplies its exact pushed compatibility contract, simulation
assembly GUID, allocations, and coordinator-only authorization policy.
