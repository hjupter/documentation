---
description: Melee 2.2.14 visual scripting nodes audited with Photon Melee 1.2
---

# Visual Scripting Reference

Photon Melee adds the `Melee Network` component and synchronizes the state produced
by Melee's existing visual scripting nodes. It does not add duplicate Melee
Instructions, Conditions, or Events.

The following editor titles are the complete Melee 2.2.14 visual scripting surface
audited with Photon Melee 1.2.

## Instructions

* Equip Melee Weapon
* Input Charge
* Input Execute
* Play Melee Reaction
* Play Melee Skill
* Reset Block Time
* Reset Break Time
* Reset Parry Time
* Reset Skill Hits
* Set Buffer Window
* Set Defense
* Set Shield
* Set Skill
* Start Blocking
* Stop Blocking
* Try Cancel Skill
* Unequip Melee Weapon
* Wait until Phase

Equip/unequip, input, selected skill/charge/combo, cancel, hit-buffer reset, buffer
window, defense, and blocking flow through Melee Network when executed on the owning
character. Reactions and project-specific damage still follow your chosen hit
authority.

## Conditions

* Has Equipped Melee
* In Attack Phase
* Is Blocking
* Last Cancel Successful
* Pull from Target
* Push to Target
* Time since Last Block
* Time since Last Break
* Time since Last Parry

Evaluate gameplay-changing conditions on the authoritative client. In particular,
combo-tree variable or Stats conditions must be selected by the PhotonView owner;
Photon Melee sends the resulting combo ID to other clients.

## Events

* On Equip Weapon
* On Input Charge
* On Input Execute
* On Melee Hit
* On Unequip Weapon

`On Melee Hit` is a local Melee simulation event. It is not itself a network damage
message. Route damage or Stats changes through the target owner, master client, a
Photon Core RPC, or Photon Stats.

## Properties

The audited Melee property families include current equipped weapon, explicit Melee
Weapon, Skill, Shield, Is Blocking, Character Target, Last Hit Position, Last Hit
Direction, Self to Target Location, Target to Self Location, and local/global
name/list variable sources.

Properties read the state available on that client. Use owner-selected combo
replication and an authoritative damage policy when a property value can change a
shared gameplay result.

## Melee Network inspector

| Field | Purpose |
| --- | --- |
| Synchronized Weapons | Melee Weapon assets that can be selected or equipped at runtime |
| Synchronize Equipment | Replicates equip, unequip, swap, and late-join equipment |
| Synchronize Combo Selection | Replays the owner's charge/combo IDs instead of reevaluating remote conditions |

The component requires `Character` and `Photon View`. Add Melee Network to the
Photon View's Observed Components list.
