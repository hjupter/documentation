---
description: Photon Abilities releases
---

# Releases

## 1.1.0 (29 July 2026)

### New

* Added late-join snapshots for learned slots and remaining cooldowns.
* Added owner validation for incoming Ability synchronization.
* Added installed version markers for the module and examples.
* Added Photon Synchronized Target for owner-resolved network targeting without
  modifying the Abilities package.
* Added ordered target-set payloads for Abilities that resolve multiple targets.

### Improved

* Updated to Photon Core 1.5.0, PUN 2.55, Game Creator Core 2.18.60, and Abilities 2.0.1.
* Improved channeled casts, cancellation, disconnect cleanup, examples, and setup guidance.
* Ownership changes cancel stale casts before the new owner starts authoring Ability state.

### Fixed

* Fixed remote clients resolving a cast from their own crosshair instead of the owner's target.
* Fixed Abilities 2.0.1 instruction casts that use a supplied target.
* Fixed learned Abilities losing their original slot remotely.
* Fixed completed or canceled casts being replayed to clients that join later.
* Fixed unlearning a duplicated Ability clearing a different remote slot.
* Fixed duplicated Ability slots clearing a shared cooldown during snapshot updates.
* Fixed stale Ability event subscriptions when a network Pawn is disabled.
* Fixed the Ability input provider throwing when no target unit is selected.

### Changed

* Supports the module-tested Unity 6.3 and 6.4 range.
* Requires Abilities 2.0.1 to be imported before Photon Abilities.
* Uses owner-authoritative cast, target, slot, cooldown, and late-join state.

## 1.0.3 (18 May 2024)

* Updated Game Creator and Abilities compatibility.
* Updated examples.
* Improved channeled Abilities.
* Added the Photon Ability input module.

## 1.0.1 (23 June 2023)

* Updated Game Creator 2 compatibility.
* Updated examples.
* Required Unity 2022 LTS.
