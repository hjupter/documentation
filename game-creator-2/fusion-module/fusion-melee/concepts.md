---
description: Understand Fusion Melee authority, prediction, impacts, and reconnects
---

# Authority and synchronization

## Input Authority

Input Authority contributes a fixed, versioned Melee payload through Fusion
Core's shared network input:

* Melee key A through H
* charge held
* execute pressed
* cancel pressed
* block held
* one equipment command
* stable weapon key and equip or unequip intent
* a wrap-safe intent sequence

Equipment requests use a small local queue and send one command per Fusion
input tick. A swap therefore preserves both the replacement equip and previous
weapon unequip without defining another root input type.

## State Authority

State Authority owns the accepted gameplay-facing snapshot:

* last accepted input sequence and previous held flags
* equipped weapon keys and equipment revision
* attack transition, phase, start tick, weapon, combo, and charge
* defense, poise, block state and timing, buffer window, and invincibility
* primary network target
* final resolved impact sequence and presentation data

Commands are deduplicated from networked counters so prediction resimulation can
rewind them safely.

## Prediction and presentation

The local owner may perform responsive Game Creator presentation while Fusion
simulates its input. Durable state still comes from State Authority.

Use replicated Properties or **On Network Melee Attack Changed** for animations
and UI. Use **On Network Melee Impact** for one-time forward presentation.
Never apply gameplay damage from a proxy presentation Event.

## Damage, block, and parry boundary

Fusion Melee does not define a universal damage packet. Projects may use Melee
skills, Stats, or their own combat rules.

The authoritative flow is:

1. State Authority resolves the hit and target.
2. Project combat code applies damage, defense, poise, block, parry, or guard
   break.
3. **Report Authoritative Melee Impact** publishes the final outcome.
4. Current proxies respond with presentation only.

Late joiners receive durable combat state but do not replay old impact effects.

## Late join and reconnect

Equipment, attack, defense, target, and other durable values are networked
snapshots. A late joiner reconstructs presentation from those values instead of
RPC history.

When an owner reconnects to a retained `NetworkObject`, assign Input Authority
again. The new process seeds its local intent counter from the authoritative
last-accepted sequence before sending new input. Temporary contributor overlap
is rejected within one runner and can retry after the old owner unregisters.

## Topology notes

Host and Server topology can use Fusion lag compensation for the supplied
striker shapes.

Shared Mode uses current physics queries. It does not gain server-authoritative
damage merely by selecting a Fusion striker shape; the project must design its
Shared authority and trust boundary deliberately.

{% hint style="warning" %}
The separate-process Cloud, late-join, and reconnect scenarios described here
are acceptance requirements for the unreleased candidate. They are not yet
published release evidence.
{% endhint %}
