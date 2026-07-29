# Releases

## 1.1.0

### Improved

* Updated for Photon Core 1.5, Photon PUN 2.55, current Game Creator 2 Core, and
  Factions 1.1.3.
* Added complete owner snapshots for runtime spawns, late joiners, and
  `PhotonView` controller changes.
* Added synchronization for directed faction relationship stances.
* Configured the shared-faction examples for explicit PhotonView ownership
  transfer.
* Added clearer component menus, inspector guidance, documentation links, and
  version markers.
* Added package validation for clean install, stale-overlay upgrade, sample
  integrity, and uninstall.
* Audited Game Creator Settings ownership and gated the intentional absence of
  an empty Photon Factions panel. Import, domain reload, upgrade, and uninstall
  must not create or leave `photon.factions.asset`.

### Fixed

* Fixed late-join reputation values using the wrong faction lookup key.
* Fixed an initial reputation event that could reference no last-changed faction.
* Fixed shared faction updates failing to reach every client when the Master
  Client did not own the relevant view.
* Fixed membership snapshots leaving stale faction member registrations.
* Avoided unnecessary leave/join churn for unchanged memberships and rejected
  snapshots that reference missing local Faction assets.
* Fixed full snapshots retaining relationship changes that existed only on a
  replica.
* Rejected snapshots with missing local variables, relationship targets, or
  stances before applying partial shared state.
* Rejected state RPCs from clients other than the current controller.

### Compatibility

* Photon Factions 1.1.0
* Photon Core 1.5.0
* Photon PUN 2.55
* Game Creator 2 Core 2.18.60
* Factions 1.1.3
* Unity 6.3 and 6.4

Unity 6.5 remains outside this release's compatibility range because the
required Factions 1.1.3 editor package does not compile on that Unity line.
