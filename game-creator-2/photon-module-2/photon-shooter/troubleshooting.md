# Troubleshooting

## A late joiner cannot see an equipped weapon

Check that the equip logic runs through a Photon Core RPC configured for new players. The
late joiner needs the weapon prop before Shooter Network can resolve the synchronized weapon
ID. Also confirm Shooter Network is observed by the player's PhotonView.

## Unequip works locally but not remotely

Use **Unequip Shooter Weapon** through the same networked equip flow. Photon Shooter 1.2 sends
an owner-validated unequip message, but every client must have equipped the same stable weapon
asset first.

## The wrong weapon or magazine is shown

Verify that each Shooter weapon asset has a unique ID and that all clients use the same assets.
Do not duplicate a weapon and keep the same ID. Confirm the player PhotonView observes Shooter
Network.

## Remote aim follows my local camera

Replace **Main Camera** references with **Photon > Player Camera**. In Shooter instructions,
use **Self** or the intended **Target** instead of the local **Player** shortcut.

## A remote target is empty

The target GameObject must have a PhotonView. Shooter Network clears targets without a network
identity and waits when a valid target PhotonView has not arrived yet.

## One shot applies damage more than once

Synchronized trigger playback is presentation state, not automatic server authority. Apply
damage only on the firing owner or your chosen master/server authority, then share the accepted
result through Photon Core RPCs.

## A reconnect uses an old target

Photon View IDs can change after rejoin. Do not persist View IDs across sessions. Let the
reconnected player spawn again and select current room objects.

## What to include in a support report

Include:

* Unity, Game Creator Core, Shooter, Photon Core, Photon Shooter, and PUN versions
* whether the issue occurs in Editor, WebGL, macOS, or another build
* which client owns the affected player
* whether the second client joined before or after equip
* the player prefab's PhotonView observed-components list
* the equip/unequip RPC settings
