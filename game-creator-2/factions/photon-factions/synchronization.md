# Synchronization and ownership

Photon Factions 1.1.0 uses the `PhotonView` controller as the authority for each
network component.

## Configuration ownership

There is no Photon Factions project settings repository. The only serialized
module option is the Faction selected on each **Faction Network**. A **Member
Network** has no configurable default.

This is intentional. Authority belongs to the `PhotonView`; room lifetime and
rejoin policy belong to the room bootstrap; connection settings belong to
Photon Core/PUN. Snapshot replacement, sender validation, and schema rejection
are protocol invariants rather than preferences.

## Member state

**Member Network** replicates:

* Joined faction unique IDs
* Absolute reputation points for every joined faction
* A full replacement snapshot for late join and controller recovery

The snapshot removes memberships absent from the authoritative list, retains
unchanged memberships, and then applies their absolute reputation points. This
keeps each Faction asset's member registry consistent without unnecessary
leave/join side effects. If a snapshot references a Faction asset that is not
installed locally, Photon Factions rejects it without partially replacing the
current membership state.

## Faction state

**Faction Network** replicates:

* Existing faction variables with supported values
* Directed relationship target IDs and stance names
* A full snapshot for runtime spawns, late joiners, and ownership changes

Full relationship snapshots also reset replica-only relationships that are
absent from the controller's state.

Before applying a Faction snapshot, the replica validates every variable,
relationship target, and stance against its local Factions project. A schema
mismatch rejects the snapshot without partially applying shared state.

Supported variable values are:

* Integer
* Double
* Float
* Boolean
* Color
* String
* Vector3

Unsupported variable types are skipped and reported in the Unity Console.

## Late join and controller changes

A replica requests a snapshot from its current controller when it starts, joins
a room, or observes a controller change. The controller also targets newly
joined players with the current snapshot.

Incoming state RPCs are accepted only from the current controller actor. This
prevents another client from overwriting membership, reputation, variables, or
relationships through the component's private RPC surface.

PUN's `Fixed` ownership mode still follows normal controller changes such as a
Master Client change, but it rejects an explicit `TransferOwnership` call. Use
`Request` or `Takeover` when the game must hand a shared Faction Network to a
specific client.

The examples use a 30-second Photon player TTL. A soft-disconnected player can
use `ReconnectAndRejoin` during that window and receive the authoritative state
again. Photon Factions follows the lifetime of the room and its `PhotonView`
objects; it does not preserve state after the room closes or an owned network
object is destroyed.

## Visual scripting

Use the normal Factions Instructions to join or leave a faction, change
reputation, set a variable, or change a relationship. Photon Factions listens to
the corresponding runtime events.

There are no Photon Factions-specific Instructions, Conditions, Events, or
Properties in 1.1.0. This is intentional: the network component is the boundary,
while Factions remains the authoring surface.
