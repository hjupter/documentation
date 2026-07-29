# Troubleshooting

## The bridge says it is not ready

Confirm that the exact Quantum Core dependency is installed, the Core Abilities
transport adapter is assigned, the session is running, and the authoring catalog
passes validation.

## A cast is rejected

Read **Quantum Ability Was Rejected** or the read model's last rejection. Common
reasons are an unknown slot, target mismatch, unavailable entity version,
cooldown, no charges, insufficient resource, a too-short charged cast, or an
optional Factions denial.

## Effects play twice

Irreversible presentation must listen to verified events only. Predicted effects
must use the supplied session/entity/sequence/ordinal key and be canceled if the
prediction is rolled back.

## Code generation fails

Verify that only Quantum Core declares root `Input`, the project uses the exact
supported Quantum stable build, and no preview or stale generated files remain.
Do not copy Photon SDK assemblies from another project.

## State is wrong after reconnect

Treat the verified Quantum frame as authoritative and rebuild the view mirror.
Do not restore cooldowns, charges, resources, or effects from Game Creator save
data or wall-clock timestamps.
