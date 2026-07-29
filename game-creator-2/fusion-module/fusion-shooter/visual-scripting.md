---
description: Fusion Shooter instructions, conditions, events and properties
---

# Visual Scripting

Fusion Shooter adds Game Creator units under the **Fusion > Shooter** category. Unless noted otherwise, **Target** is the GameObject containing `FusionShooterNetwork`.

{% hint style="info" %}
Instructions submit intent only when the target object has Fusion input authority and its Shooter input contributor is registered. They do not bypass state-authority validation.
{% endhint %}

## Instructions

| Unit | Purpose |
| --- | --- |
| **Network Equip Weapon** | Request an equip by stable, non-zero catalog weapon ID |
| **Network Unequip Weapon** | Request the current network weapon be unequipped |
| **Network Swap Weapon** | Request a swap to another catalog weapon ID |
| **Network Enter Sight** | Hold aim with an optional catalog sight ID; zero uses the weapon default |
| **Network Exit Sight** | Release the network aim state |
| **Network Pull Trigger** | Hold the input-authority trigger |
| **Network Release Trigger** | Release the input-authority trigger |
| **Network Cancel Trigger** | Cancel current trigger intent and release it |
| **Network Reload** | Request a state-validated reload |

The Shooter Weapon's **Fusion Network** shot implementation submits each actual shot through the same input-authority bridge. Pulling the trigger alone does not invent a trusted target.

## Conditions

| Unit | Returns true when |
| --- | --- |
| **Is Network Weapon Equipped** | A weapon is equipped; optional catalog ID `0` accepts any weapon |
| **Is Network Aiming** | Replicated aim state is active |
| **Is Network Trigger Held** | Replicated trigger state is active |
| **Is Network Reloading** | Replicated reload state is active |
| **Has Network Ammunition** | The current magazine or reserve is non-zero |
| **Has Shooter State Authority** | This peer owns Fusion state authority for the Shooter object |

Use **Has Shooter State Authority** before any custom irreversible gameplay logic.

## Events

| Unit | Runs when |
| --- | --- |
| **On Network Weapon Equipped** | Replicated presentation equips its first weapon |
| **On Network Weapon Unequipped** | Replicated presentation unequips its weapon |
| **On Network Weapon Swapped** | Replicated presentation changes to another weapon |
| **On Network Aim Changed** | Replicated aim enters or exits a sight |
| **On Network Shot Predicted** | Local input submits a shot for immediate prediction |
| **On Network Shot Confirmed** | The replicated accepted-shot sequence advances |
| **On Network Reload Started** | State validation starts a reload |
| **On Network Reload Completed** | The authoritative reload transfers ammunition |
| **On Network Reload Cancelled** | An equipment transition cancels reload |
| **On Network Hit Confirmed** | A confirmed hit appears in the retained history |
| **On Network Shooter State Restored** | A spawned proxy, late join or reconnect reconstructs replicated Shooter state |

### Predicted versus confirmed events

Use the predicted-shot event for reversible local effects such as a short muzzle flash or camera kick. Deduplicate it by shot sequence when necessary.

Use confirmed-shot and confirmed-hit events for replicated presentation. Damage has already crossed the selected state-authority damage boundary; do not apply it again from these events.

## Properties

| Property | Value |
| --- | --- |
| **Network Equipped Weapon** | Game Creator Shooter Weapon selected by the replicated catalog ID |
| **Network Magazine Ammunition** | Cartridges in the active magazine |
| **Network Reserve Ammunition** | Reserve cartridges for the active weapon |
| **Network Reload Progress** | Normalized replicated progress from `0` to `1` |
| **Network Aim Origin** | Input authority's current world-space origin, or the last accepted replicated shot origin on a proxy |
| **Network Aim Direction** | Input authority's current normalized direction, or the last accepted replicated shot direction on a proxy |
| **Network Last Hit Target** | Target `NetworkObject` GameObject from the newest retained hit, when resolvable |
| **Network Last Hit Point** | World-space point from the newest retained hit |
| **Network Last Hit Normal** | World-space normal from the newest retained hit |
| **Network Last Shot Sequence** | Replicated accepted-shot sequence |

The last-hit properties are presentation conveniences over an eight-entry bounded history. They are not a permanent damage or audit record.

## Common graphs

### Equip and aim

1. Run **Network Equip Weapon** with the catalog ID.
2. Wait for **On Network Weapon Equipped**.
3. On aim press, run **Network Enter Sight**.
4. On aim release, run **Network Exit Sight**.

### Fire

1. Configure the Shooter Weapon to use **Fusion Network**.
2. On fire press, run **Network Pull Trigger**.
3. Let the Shooter stance submit its shot through the Fusion bridge.
4. On fire release, run **Network Release Trigger**.
5. Use predicted and confirmed events for their separate presentation roles.

### Reload

1. Check **Has Network Ammunition** if your interface needs an early guard.
2. Run **Network Reload**.
3. Drive UI with **Is Network Reloading** and **Network Reload Progress**.
4. Reconcile final counts from the magazine and reserve properties.
