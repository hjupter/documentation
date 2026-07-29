# Getting Started

## Install

Install the required packages in this order:

1. Photon PUN 2.55
2. Game Creator 2 Core 2.18.60 or newer
3. Game Creator 2 Shooter 2.2.7 or newer compatible release
4. Photon Core 1.5 or newer
5. Photon Shooter 1.2
6. Photon Shooter Examples 1.2, if you want the sample scenes

Open **Game Creator > Install** and install the Photon Shooter entry. The installer checks
the minimum Photon Core version. Shooter itself is a base Game Creator package, not an
install-window package with a dependency ID, so the installer cannot verify its version.
Confirm that `Assets/Plugins/GameCreator/Packages/Shooter/Editor/Version.txt` reports 2.2.7
before installing Photon Shooter. Install the examples separately after Shooter Examples and
Shooter Weapons are present.

## Configure the player prefab

On the root GameObject of the network player:

1. Add **Character**.
2. Add **Photon View**.
3. Add **Character Network**.
4. Add **Shooter Network**.
5. In Photon View, add **Character Network** and **Shooter Network** to
   **Observed Components**.
6. Keep ownership fixed to the player that created the PhotonView unless your game has an
   explicit ownership-transfer design.

Shooter Network is the only component added by Photon Shooter. Its runtime inspector shows
the weapon ID, magazine, trigger, reload, jam, and target information received by that player.

## Equip and swap weapons

Every client needs a local Shooter weapon prop for each visible character. Run **Equip Shooter
Weapon** and **Unequip Shooter Weapon** through a Photon Core RPC component so the same weapon
is created or removed on every client.

Use the same Shooter weapon asset on all clients. Photon Shooter matches weapons by the stable
ID stored in the asset, not by list order or Unity instance ID.

For a swap, attach the replacement prop and run **Equip Shooter Weapon** before running
**Unequip Shooter Weapon** and removing the previous prop. This keeps a valid Shooter rig
throughout the asynchronous change and avoids publishing a temporary empty-weapon snapshot.

{% hint style="warning" %}
Shooter Network synchronizes state; it does not create a missing weapon prop by itself. If a
late joiner cannot see an equipped weapon, make the equip RPC available to new players and
keep Shooter Network on the observed-components list.
{% endhint %}

## Configure aim references

For Shooter instructions that execute on remote characters:

* Use **Self** or an explicit **Target** instead of the local **Player** shortcut.
* Use **Photon > Player Camera** instead of **Main Camera** for camera-based aim.
* Give synchronized combat targets a PhotonView.

These choices prevent a remote weapon from using the local player's camera or target.

## Test with two clients

Use two real clients in the same Photon Cloud room. Confirm:

1. Client A equips, fires, reloads, swaps, and unequips while Client B observes.
2. Client B performs the same operations while Client A observes.
3. A client joins after the other player is already equipped.
4. A client disconnects and rejoins.
5. Projectile and hit results use the intended owner or authority rule in your game.

An offline or single-editor test cannot prove Photon ownership, late-join ordering, or
disconnect behavior.
