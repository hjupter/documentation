# Releases

## 1.1.0 (29 July 2026)

### New

* Reliable late-join and reconnect restoration for membership, reputation, relationships, and
  supported Faction variables.
* Support for Factions memory restores and Fusion state-authority transfers.

### Improved

* Membership snapshots restore as one complete change without temporary leave/join states.
* Proxy-only changes are reverted so clients cannot remain out of sync.
* Example installation now uses Fusion Core's guarded dependency preflight and verifies the
  installed Factions version before project mutation.
* Updated examples and setup guidance for the supported Fusion SDK and Unity editors.

## 1.0.1 (31 October 2024)

* Fixed an issue with the submodule path.

## 1.0.0 (23 October 2024)

* First release.
