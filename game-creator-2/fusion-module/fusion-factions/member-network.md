# Member Network

`MemberNetwork` replicates the complete joined-Faction and reputation snapshot for one Factions
`Member`.

## Add it

1. Select the networked player or NPC prefab.
2. Confirm it has a Factions `Member` and a Fusion `NetworkObject`.
3. Add **Game Creator → Fusion → Member Network**.
4. Rebuild the Fusion prefab table and save the prefab.

The component keeps existing serialized `MemberNetwork` references when upgrading from 1.0.1.

## What is synchronized

* Every joined Faction, identified by its stable Faction asset ID
* Current reputation points for each joined Faction
* Reputation status derived by Factions from those points
* State restored through the Factions `MemoryFactionMember` memory

The component supports up to 16 joined Factions per Member. Faction identifiers must fit 64
Unicode characters. An over-capacity change is rejected while the last complete snapshot remains
authoritative.

## Authority

Only State Authority writes the replicated snapshot.

* In Shared Mode, the local player commonly owns their own player object.
* In Host or Server Mode, run membership and reputation instructions on the host/server.
* NPC membership should be changed by the peer that owns the NPC's State Authority.

Proxy-side changes are reverted to the current replicated snapshot. This prevents a visual
scripting action that ran on the wrong peer from leaving only that client with different state.

## Late join, reconnect, and memory

The snapshot is part of the `NetworkObject` state; it is not a one-time RPC. A late joiner
reconstructs membership and reputation when the object becomes available.

The complete snapshot is applied through Factions as one restore operation. Leave, join,
reputation-point, and reputation-status listeners do not observe a temporary empty or partially
rebuilt Member; normal refresh notification happens only after the final state is ready.

When loading Game Creator memory:

1. Load `MemoryFactionMember` on State Authority.
2. The normal Factions memory notification rebuilds the network snapshot.
3. Proxies reconstruct their Member and fire the usual Factions refresh events.

If the player object was despawned during disconnect, respawn it before applying saved state.

## Troubleshooting

* **A change immediately reverts:** the instruction ran on a proxy. Move it to State Authority.
* **A Faction cannot be resolved:** clients do not have matching Faction catalogues or asset IDs.
* **A capacity error appears:** reduce the joined-Faction count or shorten the reported ID. The
  previous complete snapshot remains active.
* **A late joiner has no state:** confirm the player/Faction network object persists or is
  recreated before the joiner observes it.
