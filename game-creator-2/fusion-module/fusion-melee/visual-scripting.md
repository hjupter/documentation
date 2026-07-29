---
description: Fusion Melee Instructions, Conditions, Events, and Properties
---

# Visual scripting

Fusion Melee tools appear under the **Fusion → Melee** category.

{% hint style="info" %}
Run request Instructions for the Character with Input Authority. Run
authoritative impact reporting only from State Authority.
{% endhint %}

## Instructions

### Request Equip Melee Weapon

Queues an allowlisted weapon equip by stable registry key.

### Request Unequip Melee Weapon

Queues an allowlisted weapon unequip by stable registry key.

### Request Swap Melee Weapon

Queues the replacement equip and then the previous weapon unequip across
consecutive input ticks.

### Request Cancel Melee Attack

Requests a replay-safe cancellation of the current attack.

### Request Melee Block

Raises or lowers the local guard and contributes the held block state through
Fusion input.

### Request Melee Target

Requests a Character-backed `NetworkObject` as the authoritative primary target.

### Report Authoritative Melee Impact

Publishes a final hit, blocked, parried, or guard-broken presentation event.
This Instruction does not calculate or apply damage.

## Conditions

* **Network Melee Is Attacking** — the authoritative phase is active
* **Network Melee Is Charging** — the authoritative phase is Charge
* **Network Melee Is Blocking** — authoritative blocking is active
* **Network Melee Is Invincible** — authoritative invincibility is active
* **Network Melee Has Weapon** — the registry key exists in the equipment
  snapshot

## Events

### On Network Melee Attack Changed

Runs when the replicated attack transition or phase changes. Use it for
animation, audio, camera, UI, or other presentation.

### On Network Melee Target Changed

Runs when the authoritative primary target changes.

### On Network Melee Impact

Runs once for a forward-only hit, block, parry, or guard-break result. Late
joiners do not replay historical impacts.

## Properties

### Boolean

* **Network Melee Is Attacking**
* **Network Melee Is Charging**
* **Network Melee Is Invincible**

### Number

* **Network Melee Phase**
* **Network Melee Combo ID**
* **Network Melee Charge ID**
* **Network Melee Attack Weapon Key**
* **Network Melee Defense**
* **Network Melee Poise**
* **Network Melee Impact Type**

Impact type values represent Hit, Blocked, Parried, or Guard Broken.

### GameObject

* **Network Melee Target**
* **Network Melee Impact Target**

## Choosing the right tool

| Goal | Tool |
| --- | --- |
| Equip a registered weapon | Request Equip Melee Weapon |
| Replace one equipped weapon | Request Swap Melee Weapon |
| Display the current attack | Network Melee Phase plus On Network Melee Attack Changed |
| Test whether the guard is active | Network Melee Is Blocking |
| Publish an already resolved result | Report Authoritative Melee Impact |
| Play one-time hit or parry effects | On Network Melee Impact |
| Apply damage | Project-owned State Authority combat logic |
