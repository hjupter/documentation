---
description: Candidate Fusion Shooter sample and multiplayer proof scenario
---

# Examples

The candidate includes a separately installable **Shooter Examples** definition and source for a deterministic multiplayer scenario.

{% hint style="warning" %}
The final example `.unitypackage` has not yet passed export, clean-install, missing-script or player-build validation. The authored source and generator are candidate evidence only.
{% endhint %}

## Install the example

After installing all dependencies in the order listed in [Setup](setup.md), install **Shooter Examples** from the Fusion module's Examples installer when the validated candidate package is available.

The sample is separate from the runtime module so it can be removed without deleting Fusion Shooter.

## What the candidate scenario covers

The generated scene contains:

* A network player with `Character`, `NetworkObject` and `FusionShooterNetwork`
* A deterministic catalog with one hitscan and one projectile weapon
* A network projectile prefab
* A network target with a custom `FusionShooterDamageReceiver`
* A four-role process harness for Host, primary client, late joiner and reconnect

The primary scenario is authored to:

1. Equip the hitscan weapon.
2. Enter aim.
3. Submit and confirm a hitscan shot and hit.
4. Start and complete reload.
5. Swap to the projectile weapon.
6. Submit and confirm a projectile shot and hit.
7. Swap back and verify the first weapon's ammunition was retained.
8. Unequip, re-equip and verify the same authoritative ammunition is restored.

The evidence validator also requires finite accepted shot origins, normalized
accepted directions and exactly one state-authority damage callback for each of
the hitscan and projectile hits.

The late-join role reconstructs current state and verifies that a proxy without input authority cannot change it. The reconnect role uses the primary client's connection token, restores the retained player object, receives input authority again and must submit a fresh sequenced equip, swap, fire or reload command that changes state.

## Proof boundary

The release proof must run real operating-system player processes through Photon Cloud:

* One Host process
* One primary Client process
* One late-join Client process
* One reconnect Client process started after the primary disconnects

Each role must have a different process ID and a separate timestamped evidence log. Logs must identify role, session, tick, player, network object, command sequences and assertions without recording the Photon App Id or authentication secrets.

Editor multi-peer, offline mode, a single process, merely observing restored state or changing only a held aim flag does not satisfy this proof.

## Using the pattern in your game

Treat the sample as a boundary example, not production game architecture:

* Replace proof weapons with your authored Shooter Weapon assets.
* Use immutable catalog IDs and stable keys.
* Replace the proof receiver with your state-authority health or stats integration.
* Preserve the separation between predicted effects, confirmed effects and damage.
* Keep Photon credentials outside source control and committed logs.
* Test reconnect with your real authentication and retained-player policy.

See [Networking concepts](concepts.md) for the authority rules and [Troubleshooting](troubleshooting.md) for common configuration failures.
