# Synchronization and Authority

## Owner state

Shooter Network treats the PhotonView owner as the source of truth for combat presentation.
It sends a fixed snapshot containing:

* Shooter weapon ID
* target PhotonView ID
* sight ID
* magazine count
* trigger pulled or released
* jammed state
* reload state
* lean amount and decay

Remote clients reject snapshots and unequip requests that do not come from the owner.
Trigger pull and release edges also use owner-validated reliable messages so a short firing
action is not lost between regular observable snapshots.

## Equip ordering and late join

Weapon props are normally created through Photon Core RPC visual scripting. A late joiner's
player prefab, equip RPC, and Shooter snapshot can arrive in different orders. Shooter Network
keeps the weapon ID pending until the matching Shooter weapon has equipped, then applies the
latest snapshot.

Owners also send a full snapshot when another player enters the room. This covers a weapon
that was equipped before the new client joined.

During a weapon swap, create and equip the replacement on every client before unequipping and
removing the previous prop. The owner then moves directly between two valid weapon states,
and remote Shooter rigs never observe a weapon whose hand prop has already been removed.

## Fire, projectiles, and hits

Shooter Network mirrors trigger and weapon state so remote characters play the matching
Shooter behavior. Your damage rule still belongs to the game:

* For owner-authoritative shooting, only the firing owner should publish the accepted hit.
* For master-client or server validation, send the shot request to that authority and apply
  damage only after validation.
* Do not let every observing client apply damage from the same synchronized trigger.

Use **On Shoot Hit**, the last-shot properties, and Photon Core RPCs to transmit the minimum
hit result required by your authority model.

## Disconnect and rejoin

When a target player's PhotonView leaves the room, remote Shooter targets are cleared. On
rejoin, Photon creates new player PhotonViews; do not retain old View IDs in custom gameplay
state. Re-run the same spawn/equip flow and let the owner snapshot establish current Shooter
state.

## Weapon IDs

Photon Shooter 1.2 uses the stable ID stored in each Shooter weapon asset. Keep IDs unique
across the weapons that a player can equip. Duplicated asset files must be assigned distinct
IDs before multiplayer testing.
