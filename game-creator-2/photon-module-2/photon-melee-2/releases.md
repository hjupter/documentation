---
description: Photon Melee 2 releases
---

# Releases

## 1.2.0

### New

* Synchronized weapon equip, unequip, and swap.
* Owner-selected charge and combo replication for variable- and Stats-driven combo
  trees.
* Late-join snapshots for equipment, defense, blocking, poise, invincibility,
  targets, and charge state.

### Improved

* Compatibility with Photon Core 1.5.0, Photon PUN 2.55, Game Creator Core 2.18.60,
  Melee 2.2.14, and final Unity 6.3–6.5 editors.
* Refreshed Brawl and Sword network prefabs.
* Clearer Melee Network inspector and authority guidance.
* Photon App IDs stay out of tracked project settings and CI-built player artifacts;
  only the running protected Cloud proof clients receive the Realtime ID.

### Fixed

* Remote combo selection when local variable or Stats conditions differ.
* Target clearing, successful cancel, skill-hit buffer, maximum poise, and
  invincibility replication.
* Stale target references after disconnect.
* The required Melee compatibility seam being duplicated or left incomplete during
  upgrades.

### Changed

* Melee 2.2.14 must be imported before Photon Melee.
* Replaced the `CUSTOM_MELEE_EVENTS` conditional overlay with an idempotent,
  audited Melee 2.2.14 cancel/hit-buffer event seam.
* Remote state mutations are accepted only from the PhotonView owner.
* Photon Melee adds no empty project-settings panel; its synchronization choices
  remain local to each Melee Network prefab component.

## 1.1.6 (18 December 2024)

* Unity 6 support.
* Game Creator 2.17.51 support.
* Melee 2.2.11 support.

## 1.0.5 (5 August 2024)

* Game Creator 2.16.50 support.
* Melee 2.1.10 support.

## 1.0.4 (29 January 2024)

* Game Creator 2.14.48 support.
* Melee 2.1.8 support.

## 1.0.3 (23 June 2023)

* Updated demos and Unity 2022 LTS support.

## 1.0.2 (27 May 2023)

* Improved installation after Melee updates.

## 1.0.1

* Compile error fixes.

## 1.0.0 (21 May 2023)

* First release.
