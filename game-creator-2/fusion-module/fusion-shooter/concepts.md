---
description: Authority, prediction and state concepts in Fusion Shooter
---

# Networking concepts

Fusion Shooter separates player intent, deterministic network state, irreversible gameplay and visual presentation. Understanding those boundaries is essential before wiring weapon effects or damage.

{% hint style="warning" %}
This page describes the 1.0.0 implementation candidate against Fusion Core `85f22b51a6f9e13d921f747c64c18c71c9421be6`. The behavior still requires real player-build and Photon Cloud validation.
{% endhint %}

## Ownership boundaries

| Boundary | Owner |
| --- | --- |
| Read local controls and muzzle direction | Input authority |
| Submit equip, swap, aim, fire and reload intent | Input authority |
| Validate catalog, cadence, ammo, reload and aim bounds | State authority |
| Spawn and resolve network projectiles | State authority |
| Resolve hitscan and dispatch damage | State authority |
| Reconstruct animation, props, audio and effects | Every peer during presentation |

Instructions and the Shooter bridge submit intent; they do not directly grant authority or apply trusted damage.

## Composite network input

Fusion Core owns the single root input value:

`NinjutsuGames.FusionNetwork.Runtime.NetworkInputData`

Fusion Shooter registers a 32-byte, payload-version-1 extension with contributor `0x0102`. The candidate assignment occupies root bits `104..359` through Core's runner-scoped contributor registry.

The payload carries:

* Held aim and trigger flags
* Monotonic equip, swap, fire and reload sequences
* Stable weapon and sight catalog IDs
* Quantized local aim origin
* Normalized aim direction

Fusion Shooter does not declare another root input type, hide commands in movement-vector magnitude, or claim RPC delivery as prediction.

## Prediction and resimulation

Fusion captures the input before its simulation tick. Predicted peers can advance deterministic weapon state immediately, then reconcile it with state authority.

Command sequences deduplicate repeated input while allowing Fusion to resimulate the same tick. Irreversible work is additionally guarded by state authority and the forward simulation:

* Predicted animation and muzzle presentation may run locally.
* Confirmed animation and impact presentation are keyed by replicated sequences.
* Damage dispatch and projectile spawning run only once at state authority.

Use **On Network Shot Predicted** for reversible local responsiveness. Use **On Network Shot Confirmed** for replicated confirmation. Never award damage, inventory, currency or score from the predicted event.

## Authoritative validation

For each shot, state authority checks:

* The command is newer than the retained sequence
* The submitted weapon matches the equipped catalog ID
* The weapon exists in the shared catalog
* Reload is not active
* The magazine contains enough cartridges
* The configured fire interval has elapsed
* The local-space aim origin is within the authored bound
* The aim direction is valid

The client never submits a trusted target or damage value.

## Equipment and ammunition

Equipped weapon and sight are stable catalog IDs. Ammunition is authoritative replicated state, not presentation-only Shooter data.

Fusion Shooter retains magazine and reserve counts for up to 16 catalog weapons. Swapping away saves the active counts; swapping back restores them. Unequip clears the active presentation but does not redefine catalog identity.

Reload start and completion use Fusion ticks. Equipment transitions cancel an active reload. The Shooter munition presentation is reconciled from the replicated counts.

## Hitscan and lag compensation

In Host and Server topologies, state authority uses Fusion lag compensation with the firing player's input authority. Eligible targets need correctly configured Fusion hitboxes and matching hit layers.

In Shared Mode, the firing client owns state authority. Hitscan uses current physics and is suitable only when clients are trusted. It is not an anti-cheat boundary.

## Projectiles

State authority spawns the catalog's registered `NetworkObject`. `FusionShooterProjectile` integrates velocity and gravity during fixed ticks, resolves collision once, reports the hit back to its source Shooter object and despawns.

Proxies render replicated projectile state. Resimulation must not spawn a second projectile for the same accepted shot.

## Hits and damage

Confirmed hits are copied into a bounded eight-entry replicated history. Each entry includes a sequence, weapon ID, target `NetworkId` when available, point and normal. The history helps late observers and packet-loss recovery reconstruct recent presentation; it is not a permanent combat log.

Damage dispatch is explicit:

* Game Creator Shooter Hit Actions
* A custom `FusionShooterDamageReceiver`
* Both, when deliberately selected

Health, stats, factions, rewards and game-specific damage amounts remain outside Fusion Shooter's ownership.

## Presentation hooks

During `Render`, each peer reconciles:

* Held weapon prop and Shooter stance
* Sight and trigger state
* Shooter ammunition display
* Reload start, completion and cancellation
* Predicted and confirmed shots
* Confirmed impacts

If you disable **Apply Game Creator Presentation**, the network state remains available but your game must render it through its own hooks.

## Late join and reconnect

Current equipment, sight, aim flags, ammunition, reload state, accepted-shot sequence and recent hit history are networked snapshots. A late joiner restores from that snapshot rather than waiting for a player-entered RPC.

Reconnect is an application-level flow:

1. Retain or restore the authoritative player state according to your Fusion session design.
2. Reassign input authority to the reconnected player object.
3. Allow the Shooter contributor to register on that object's `NetworkRunner`.
4. Seed local equip, swap, fire and reload command counters from the retained accepted sequences.
5. Wait for **On Network Shooter State Restored**.
6. Prove that a fresh post-reconnect sequenced command changes authoritative state.

Observing a restored snapshot or changing only a held aim flag does not prove reconnect command processing works.

## Catalog compatibility

The state owner publishes the catalog schema and deterministic hash. A peer with different IDs or deterministic settings reports a catalog mismatch and stops Shooter processing rather than interpreting incompatible state.

When changing released catalog IDs or networked deterministic settings, increment the catalog schema and treat the change as a network compatibility change.
