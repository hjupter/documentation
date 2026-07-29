---
description: Diagnose Photon Abilities setup and synchronization
---

# Troubleshooting

## A remote Ability aims at its own crosshair

Confirm all clients use Photon Abilities 1.1.0 and Abilities 2.0.1. The network
character must use **Photon Abilities Input**, and `Pawn Network` must be on the
same prefab root as the `Pawn`, `Caster`, and `PhotonView`.

The Ability itself must use **Photon Synchronized Target**, with the original
crosshair strategy nested under **Owner Targeting**.

## A cast never starts on the remote

1. Confirm both clients are in the same Photon Cloud room.
2. Confirm `PhotonNetwork.OfflineMode` is `false`.
3. Confirm the casting character's `PhotonView.IsMine` is true on the sender.
4. Confirm the Ability String ID exists in both clients' Abilities repository.
5. Check the Console for an unknown-Ability warning.

## A channeled Ability ends immediately

Confirm the prefab uses the 1.1.0 input module. Channeled remote casts must keep
the synchronized target marker while waiting for the owner's explicit end event.
Do not replace **Photon Abilities Input** with a local mouse input module.

## A headless or camera-free owner cast throws an error

Crosshair targeting in Abilities 2.0.1 requires a main camera on the owning client.
Remote clients do not need a camera when the Ability uses **Photon Synchronized
Target**, because they consume the owner's supplied target.

## Unity 6.5 reports an error in FeatureCache

Abilities 2.0.1 calls a Unity object-ID API removed by Unity 6.5. Use a supported
Unity 6.3 or 6.4 editor. Photon Abilities does not modify or redistribute the paid
Abilities source to hide this upstream incompatibility.

## A learned Ability appears in the wrong slot

Both builds must use the same Caster slot layout. Photon Abilities preserves the
owner's slot index; it does not remap different client catalogues.

## A late joiner has the wrong cooldown

Confirm the Ability ID and cooldown requirement are identical in both builds.
Late-join cooldowns use a Photon server-timestamp adjustment, so both clients must
be connected to the same room rather than running offline.

## The installer does not warn that Abilities is missing

The current Game Creator Install dependency schema only resolves other
install-window packages. Abilities is a base Asset Store package and cannot be
represented by a valid install dependency ID. Import and install Abilities 2.0.1
before **Photon / Abilities**.

## The Asset Store label and installed code disagree

Check the installed marker:

`Assets/Plugins/GameCreator/Installs/Photon.Abilities@1.1.0/Version.txt`

For support, report that file's contents together with the Unity, PUN, Photon
Core, Game Creator Core, and Abilities versions.
