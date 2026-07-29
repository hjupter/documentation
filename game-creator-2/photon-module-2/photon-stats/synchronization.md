---
description: Photon Stats ownership and synchronization behavior
---

# Synchronization

## Ownership

`Traits Network` is owner-authoritative. Local changes are sent only by the client
whose `PhotonView.IsMine` is true. A remote instance accepts state only when the
RPC sender is that PhotonView's owner.

This prevents another ordinary room client from changing a character through the
component's RPCs. It is client authority, not server-authoritative anti-cheat.

## Stats

Photon Stats mirrors each Stat's base value and the aggregate amount its active
modifiers contribute to the current result. The remote receives the same resulting
modifier contribution, but not the owner's individual modifier list or modifier
types.

Keep the same Class, formulas, tables, and supporting values in every client
build. If gameplay must inspect individual modifier sources, synchronize that
gameplay system separately.

## Attributes

The current Attribute value is sent with double precision. Its maximum still
comes from the receiving client's matching Stats configuration.

## Status Effects

Each update replaces the remote stack state for that Status Effect. This covers:

* adding and restacking effects
* explicit removal
* timed expiry
* elapsed time for each active stack
* zero-stack updates that clear a remote effect

Status Effects are identified by their String ID. Register every synchronized
effect in the Stats repository on all clients.

## Initial and late-join state

When a remote character starts, it requests a complete snapshot from the owner.
The owner also sends a snapshot when another player enters the room. The snapshot
contains all configured Stats and Attributes plus all active Status Effects,
including effects whose Stats **Save** option is disabled.

## Network traffic

Changes are event-driven; the component does not serialize the whole Traits state
every frame. Full snapshots are reserved for initial synchronization and late
joins.

## Troubleshooting

If a value does not synchronize:

1. Confirm both clients are in the same Photon Cloud room and Offline Mode is off.
2. Confirm the changing character's `PhotonView.IsMine` is true on the sender.
3. Confirm `Traits`, `PhotonView`, and `Traits Network` are on the same prefab root.
4. Confirm both builds use matching String IDs and Stats configuration.
5. For Status Effects, confirm the asset is registered in the Stats repository.
6. Check the installed `Version.txt`, not only the Asset Store download label.
