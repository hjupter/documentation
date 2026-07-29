# Releases

## 1.2.0 — 2026-07-29

### New

* Late-join state requests and full owner snapshots
* Stable weapon-ID synchronization for weapon equip and swap
* Unity 6.3 LTS, Unity 6.4, and Unity 6.5 validation

### Improved

* Synchronization of targets, sights, magazines, trigger, reload, jam, and lean state
* Remote state waits for the matching weapon to equip
* Clearer Shooter Network inspector and setup documentation
* Updated examples and current compatible dependencies

### Fixed

* Remote weapons remaining equipped after unequip
* Late joiners missing weapons equipped before they entered
* Incorrect magazine snapshots
* Remote target clearing and late target resolution
* State messages being accepted from non-owners
* Example weapon swaps briefly leaving the human Shooter rig without an attached hand prop

### Changed

* Photon Core 1.5 is now required
* Photon Shooter and Photon Shooter Examples now use version 1.2.0 package markers

## 1.1.1 — 2024-12-18

### Improved

* Added Unity 6, Game Creator 2.17.51, and Shooter 2.1.3 support
* Updated demos

### Fixed

* Corrected network magazine count

## 1.0.0 — 2024-08-25

### New

* Initial release
