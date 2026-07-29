# Troubleshooting

## I cannot find Photon Factions in Game Creator Settings

This is expected. Photon Factions has no project-wide settings panel. Assign the
Faction on each **Faction Network**, configure ownership on its `PhotonView`,
and keep connection settings in Photon Core/PUN. Import, domain reload, upgrade,
and uninstall should not create or leave a `photon.factions.asset`.

## A late joiner has the wrong state

Check that the object has a non-zero `PhotonView` ID, has a current controller,
and was spawned or loaded consistently on both clients. Confirm that both
clients contain the same Faction assets and unique IDs.

Test state that changed before the second client joined. A simultaneous start
does not exercise the late-join snapshot.

## A remote client changes state and it reverts

This is expected when that client does not control the `PhotonView`. Apply
authoritative Factions changes on the controller or transfer ownership before
changing the state.

If `TransferOwnership` is rejected, check the `PhotonView` ownership mode.
`Fixed` does not allow explicit transfer; use `Request` or `Takeover` according
to the ownership policy of the game.

## A variable does not synchronize

Confirm that the variable already exists on the assigned Faction asset and uses
one of the supported value types listed in
[Synchronization and ownership](synchronization.md). Check the Console for an
unsupported-type warning.

## A relationship changes only one way

Relationships are directed. Set both directions in Factions when the game
design requires a symmetric alliance or hostility state.

## The project compiles in Core but not in Photon Factions

Use the compatibility range published for this module. Photon Core 1.5 supports
a wider Unity range, but Photon Factions also depends on Factions 1.1.3. Photon
Factions 1.1.0 is validated on Unity 6.3 and 6.4; Unity 6.5 is not claimed.

## A required package is missing or outdated

Reinstall in the supported order from [Setup](setup.md), then confirm each
package's `Version.txt` marker. Photon Factions 1.1.0 uses the published Photon
Core 1.5.0 package as its frozen baseline; do not bundle Core into the Factions
archive or patch Game Creator's installation code.

## Photon Cloud clients never meet

Verify that both clients have the same Photon Realtime App ID, App Version,
region policy, and room name. Confirm `PhotonNetwork.OfflineMode` is false. A
Practice or Offline Mode result cannot validate live ownership or late join.

## Reconnect and rejoin fails

Rejoin requires the same Photon App ID, App Version, User ID, and room, plus a
positive player TTL. The included examples use a 30-second player TTL. Rejoin
cannot recover a room that has closed or a network object that Photon already
destroyed.

## A prefab or scene reports a missing script

Remove old Photon Factions 1.0.0 overlays before installing 1.1.0, then reinstall
the module and examples. Do not bundle or reinstall Photon Core from the
Factions package; Core is a separate dependency.
