---
description: Candidate Fusion Melee setup and validation examples
---

# Examples

## Event relay prefab

The module includes `FusionMeleeEventRelay.prefab`. Place it with a configured
Fusion Melee Network component to route:

* attack changes
* target changes
* forward-only impacts

into Unity Events for animation, audio, VFX, camera, and UI.

Keep gameplay damage outside the relay.

## Basic equipment and combo flow

Create two registry entries:

* key `1` — a weapon with tap A and a follow-up combo
* key `2` — a weapon with charge A

On the owner:

1. Run **Request Equip Melee Weapon** with key `1`.
2. Use the normal Melee execute input for tap A.
3. Execute the follow-up input while its combo window is active.
4. Run **Request Swap Melee Weapon** from key `1` to key `2`.
5. Hold charge A, then execute the charged attack.

Observe authoritative equipment, phase, combo ID, charge ID, and attack weapon
key on the second client.

## Block and resolved impact flow

1. Run **Request Melee Block** with `true`.
2. Let State Authority resolve an incoming result.
3. Apply project damage or defense rules once.
4. Run **Report Authoritative Melee Impact** with Hit, Blocked, Parried, or
   Guard Broken.
5. Respond to **On Network Melee Impact** with presentation only.
6. Run **Request Melee Block** with `false` when lowering the guard.

## Candidate multiplayer acceptance flow

The release proof uses separate host and client processes in one real Fusion
Cloud session. A project validation should cover:

1. host creates the session and authoritative objects
2. client joins late and receives the seeded snapshot
3. owner equips key `1`
4. tap attack and combo follow-up replicate
5. queued swap to key `2` completes
6. charge and charged execute replicate
7. block raises and lowers
8. hit changes project-owned health once
9. blocked and parried outcomes do not apply duplicate damage
10. client disconnects while State Authority retains the object
11. the same owner token reconnects and regains Input Authority
12. a new block input is accepted after reconnect

{% hint style="warning" %}
This is the required candidate proof scenario, not a statement that the
unreleased package has completed it.
{% endhint %}
