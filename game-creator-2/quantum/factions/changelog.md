# Development changelog

## 0.1.0 — Unreleased

### New

- Added deterministic foundations for memberships, relationships, reputation,
  and friendly-fire rules.
- Added catalog authoring, verified state mirroring, visual scripting, and
  validation scaffolding.
- Added verified runtime relation-change events and a rollback cancellation
  hook for predicted friendly-fire feedback.
- Added the editor-only `quantum.factions.authoring` section bound to Quantum
  Core's pushed Settings source API. It contains only a null-by-default catalog
  reference and does not ship or mutate Core's project-local repository asset.

### Improved

- Added rollback, resimulation, late-join, reconnect, and idempotent predicted
  effect design coverage.

### Changed

- Quantum simulation is authoritative. Game Creator Factions is used for
  authoring and presentation.

This is a development record, not a customer release. No final compatibility or
release date is claimed.
