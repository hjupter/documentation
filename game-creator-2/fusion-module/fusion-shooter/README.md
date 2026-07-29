---
description: Candidate documentation for networked Game Creator 2 Shooter weapons with Photon Fusion
---

# 🔫 Fusion Shooter

Fusion Shooter connects Game Creator 2 Shooter weapons to Photon Fusion's tick-based simulation. It synchronizes weapon equipment, aiming, firing, ammunition, reloads, hitscan and projectile results while keeping irreversible gameplay decisions at Fusion state authority.

{% hint style="warning" %}
**Unreleased candidate:** These pages describe the Fusion Shooter 1.0.0 implementation candidate against Fusion Core commit `85f22b51a6f9e13d921f747c64c18c71c9421be6`. Unity compilation, package, player-build and Photon Cloud runtime proof are still pending. Do not treat this documentation as a release or compatibility guarantee.
{% endhint %}

## Product boundary

Fusion Shooter owns:

* Stable network catalog IDs for Shooter weapons and sights
* Equip, unequip and swap state
* Input-authority aim and trigger capture
* Per-weapon magazine and reserve ammunition
* State-validated fire cadence and reload timing
* Host/Server lag-compensated hitscan
* State-authority projectile spawning and collision
* Exactly one selected damage-dispatch boundary
* Predicted and confirmed presentation hooks
* Replicated state restoration for proxies, late joiners and reconnect flows

Fusion Shooter does not create Fusion sessions, spawn player characters, author Shooter weapons, implement health or stats, or redistribute any licensed dependency.

## Candidate dependency matrix

| Dependency | Candidate baseline |
| --- | --- |
| Unity | `6000.0.60f1` and `6000.3.14f1` only |
| Game Creator 2 | `2.18.60` |
| Game Creator 2 Shooter | `2.2.7` |
| Photon Fusion | `2.1.1` Stable Build `2177` |
| Fusion for Game Creator 2 | Commit `85f22b51a6f9e13d921f747c64c18c71c9421be6` |
| Fusion Shooter | `1.0.0` candidate |

Unity 6000.4 and 6000.5 are outside this candidate matrix. Every dependency is installed separately under its own license.

## Supported authority models

| Behavior | Host / Server | Shared Mode |
| --- | --- | --- |
| Input owner | Player client | Player client |
| State owner | Host or server | Firing client |
| Predicted input and resimulation | Yes | Yes |
| Lag-compensated hitscan | Yes | No |
| Security boundary | Server authoritative | Trusted clients only |

Shared Mode is suitable for cooperative or otherwise trusted-player games. It is not an anti-cheat topology.

## Start here

1. Follow [Setup](setup.md) in the documented install order.
2. Read [Networking concepts](concepts.md) before choosing a topology or damage boundary.
3. Build gameplay with the [Visual Scripting reference](visual-scripting.md).
4. Review the candidate [Examples](examples.md) and [Troubleshooting](troubleshooting.md).
5. Check [Releases](releases.md) for the candidate 1.0.0 scope and proof status.
