---
description: Fusion Shooter candidate release notes
---

# Releases

{% hint style="warning" %}
Version 1.0.0 is an unreleased candidate. These notes describe the intended first release; they do not claim that Unity, package, player-build, Asset Store or Photon Cloud validation has passed.
{% endhint %}

## 1.0.0 — candidate

Fusion Shooter's first release candidate brings Game Creator 2 Shooter weapons into Photon Fusion sessions.

### Candidate compatibility

* Unity `6000.0.60f1` and `6000.3.14f1` only
* Game Creator 2 `2.18.60`
* Game Creator 2 Shooter `2.2.7`
* Photon Fusion `2.1.1` Stable Build `2177`
* Fusion for Game Creator 2 candidate commit `85f22b51a6f9e13d921f747c64c18c71c9421be6`

### Candidate features

* Replicated equip, unequip, swap, sights and aiming state
* Input-authority aim and command capture through Fusion's network-input transport
* Predicted firing with state-authority validation and confirmation
* Per-weapon magazine and reserve ammunition retained across swaps
* State-validated reload start, completion and cancellation
* Lag-compensated hitscan in Host and Server topologies
* State-authority projectile spawning, fixed-tick movement and collision
* Selectable Shooter Hit Actions, custom damage receiver, or combined damage dispatch
* Bounded confirmed-hit history for presentation recovery
* Late-join and reconnect restoration hooks
* Instructions, conditions, events and properties for Game Creator visual scripting
* Deterministic weapon catalog validation and release-preflight tooling
* Fusion Core-owned dependency-preflight contract v2 with a Shooter `2.2.7` authentic `Editor/Version.txt` contribution
* An example installer definition and four-process Photon Cloud proof harness prepared for release validation

### Release gates still open

The candidate has not yet established:

* Clean compilation and tests in both supported Unity editors
* macOS and WebGL player builds
* Final module and example package contents
* Install, uninstall, reinstall and upgrade rehearsal
* Asset Store Tools validation
* Real separate-process Photon Cloud proof for Host, primary client, late join and reconnect roles

The documentation remains candidate-scoped until all of these gates have evidence.
