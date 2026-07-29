---
description: Authority, combat state, damage, late join, and reconnect behavior
---

# Multiplayer Guide

## Owner-authoritative combat selection

The character's PhotonView owner is the source of truth for:

* equipped Melee Weapons;
* target selection;
* charge and combo node selection;
* the active Melee Skill transition;
* successful cancel and skill-hit buffer reset;
* defense, block state/timing, poise, buffer window, and invincibility.

Remote clients do not select another combo branch from their own variables or Stats.
They replay the weapon and combo IDs selected by the owner. This prevents divergent
combos when clients do not have identical local condition values.

## Equip and swap

Add every runtime-selectable Melee Weapon asset to **Synchronized Weapons**. Photon
Melee uses the weapon's stable ID for equip, unequip, snapshots, and attack
transitions.

If a client logs `could not resolve weapon ID`, the asset is missing from that
prefab's list or build. Add it, save the prefab, and rebuild any content catalogs.

## Attack, charge, and combo

Use Melee's normal **Input Charge**, **Input Execute**, and combo-tree workflow on
the owning character. Photon Melee observes the selected charge/combo IDs and
replays the matching `Attacks.ToCharge` or combo `Attacks.ToSkill` transition
remotely.

The standalone **Play Melee Skill** and **Play Melee Reaction** instructions do not
select a combo-tree node. If a project invokes those directly as shared gameplay,
route that command through the same owner/master RPC policy used for authoritative
hits and damage.

Do not run local-player input instructions on remote characters. Gate input with
Photon Core's ownership conditions or configure it on the locally owned player
branch.

## Blocking, parry, hit, and damage

Photon Melee synchronizes whether guard is raised, its timing, current/max defense,
and the timestamps Melee uses for block presentation. That makes the same defensive
state visible to late joiners and current peers.

Game Creator Melee's **On Melee Hit**, block, parry, reaction, and damage
instructions run on the client simulating the skill. Photon Melee does not serialize
arbitrary project damage payloads or decide which health/Stats instance is
authoritative.

Because the selected skill is replayed, both clients can produce the local Melee
impact, hit effect, and **On Melee Hit** event for that simulation. Treat those as
combat presentation until the chosen authority approves the gameplay result; they
are not a second network damage message.

Choose one damage policy:

* target-owner authority: send the hit request to the target owner, validate it,
  then apply health or Stats there;
* master-client authority: validate and apply the result on the current master;
* project RPC authority: execute an approved Photon Core RPC or Photon Stats change
  on the intended owner.

Use the same policy for parry results and secondary effects. Avoid applying the same
damage instruction independently on both peers.

## Late join and reconnect

When a player enters the room, each owned Melee Network sends that player a targeted
snapshot containing:

* all equipped Melee Weapon IDs;
* current and maximum poise;
* current and maximum defense;
* block state and timing;
* buffer window;
* remaining invincibility time;
* current target;
* active charge or attack transition when present.

When a targeted player leaves, the owning character clears that target and
replicates the clear operation. A reconnecting player receives current snapshots
after joining the room again.

Photon PUN cannot restore an object that your own room/player lifecycle destroys
without recreating it. Re-spawn the reconnecting player's network prefab first, then
allow the normal snapshots to converge.

## Validation checklist

Run the checklist with two real Photon Cloud clients:

* each player controls only its owned character;
* equip, unequip, and swap agree on both clients;
* tap, charge, and multiple combo branches select the same skill;
* variable- or Stats-based combo conditions do not diverge remotely;
* blocking agrees and the chosen parry/damage authority applies one result;
* late join shows the current weapon and defense immediately;
* leaving clears stale targets;
* reconnect creates a fresh owned player and receives current room state.
