# Releases

## 1.2.0 (Upcoming)

### New

* Added typed reputation point and status events for custom integrations.
* Added deterministic batch membership and reputation restore support.

### Improved

* Updated Game Creator 2 Core and the optional modules used by the examples.
* Added a dedicated Factions panel in Game Creator Settings for faction assets,
  directional relationships, and reputation stances.
* Improved editor performance by ignoring unrelated asset imports.
* Improved faction lists, scoreboards, reputation progress, examples, and
  package validation.

### Fixed

* Fixed directional relationship checks.
* Fixed Member registration after disable, enable, and domain reload.
* Fixed reputation events mixing changes from different factions.
* Fixed negative and unsorted reputation thresholds.
* Fixed clean-project reputation stance defaults differing from the packaged
  project settings.
* Fixed persistence after faction asset renames while retaining 1.1.x save and
  Remember compatibility.
* Fixed duplicate UI subscriptions and null-reference cases.
* Fixed uninstall confirmation and cleanup of optional Factions examples.

### Changed

* New relationship and Member memory data uses stable faction IDs.
* Requires Game Creator 2 Core 2.18.60.
* Standalone Factions exclusively owns its project settings; separate
  integrations neither modify nor uninstall them.
* Targets Unity 6000.3.14f1, 6000.4.12f1, and 6000.5.5f1 for release
  validation. The final supported editor matrix will include only editors that
  pass the complete Factions-specific release checks.

## 1.1.3 (31st December 2024)

* Added faction-aware target candidate instructions.
* Fixed member-status null handling.
* Fixed Set Faction variable references.

## 1.1.2 (18th October 2024)

* Added initial Unity 6 and Game Creator 2.17.51 support.
* Added the version manager and updated examples.

## 1.0.1

* Updated Game Creator compatibility and demos.

## 1.0.0 (17th June 2024)

* First release.
