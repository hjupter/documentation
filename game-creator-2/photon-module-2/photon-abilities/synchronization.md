---
description: Photon Abilities ownership and synchronization behavior
---

# Synchronization

## Ownership and authority

`Pawn Network` is owner-authoritative. A character sends Ability state only when
its `PhotonView.IsMine` is true. A remote character accepts each RPC only when the
sender is that PhotonView's current owner.

When Photon ownership changes, stale cast and target state is cleared. The previous
owner's later messages are rejected, and the new owner can author the next ordered
cast sequence.

This is client authority, not server-authoritative anti-cheat. Validate competitive
gameplay separately when a client must not be trusted.

## Activation and targets

The owner resolves targeting input before the remote cast is confirmed. Photon
Abilities sends:

* the Ability String ID
* an ordered cast sequence
* up to 32 resolved target positions per cast
* each target's `PhotonView` ID when it is a network object

Configure each networked Ability with **Photon Synchronized Target** and keep its
original targeting strategy in **Owner Targeting**. The owner runs that strategy;
remote cameras and crosshairs do not recalculate the result. If a network object
cannot be resolved, the transmitted position remains available as a safe location
target.

## Single and channeled casts

Single casts automatically confirm the synchronized target. Channeled casts use
the same owner-resolved target for every tick, but remain active until the owner
sends an explicit end or cancellation message.

Photon Synchronized Target distinguishes the current `PhotonView` owner from
remote observers. This also preserves Abilities 2.0.1 instruction casts that use
its `AutoConfirmInput` marker: the owner still resolves and sends the supplied
target, while remotes never acquire targets from their own input devices. The
paid Abilities source remains unchanged.

## Learned slots and cooldowns

Learn and unlearn operations preserve the owner's exact slot. Initial and
late-join snapshots contain up to 32 slots and the remaining cooldown for each
learned Ability. Snapshot transit time is removed using Photon server timestamps.

Live cooldown changes are produced by the same synchronized cast and matching
Ability requirements on every client. Keep Ability definitions and cooldown
configuration identical in all builds.

## Initial state and late join

When a remote character starts, it requests a snapshot from the owner. The owner
also sends snapshots when another player enters. If a cast is active, the owner
sends its Ability and resolved target after the slot/cooldown snapshot.

A late joiner starts observing a currently active channel from the time it joins;
effects that occurred before the client entered are not replayed.

## Disconnect and rejoin

A remote cast is canceled when its owner leaves or when the local client
disconnects. Rejoining creates current room objects and requests fresh snapshots;
stale cast receipts are not reused.

## Boundaries

* Abilities are identified by String ID and must exist in every client's Abilities
  repository.
* Non-network target objects fall back to a world position.
* Abilities 2.0.1 exposes `AbilityActivatorCharged` only as an abstract development
  placeholder. Photon Abilities does not claim a charge-count synchronization
  surface that the base package does not provide.
* The module does not synchronize arbitrary custom Ability state. Custom effects
  that own additional mutable data need their own network contract.
