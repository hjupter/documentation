---
description: Diagnose Photon Melee installation, prefab, combo, and authority issues
---

# Troubleshooting

## Photon Melee does not compile after updating Melee

Photon Melee 1.2 requires Melee 2.2.14 and applies one audited event seam to
`MeleeStance.cs`.

1. Remove old `Photon.Melee@1.1.6` install folders.
2. Remove `CUSTOM_MELEE_EVENTS` from scripting define symbols.
3. Reimport an unmodified Melee 2.2.14 package.
4. Install Photon Melee 1.2.0 again so its installer shell reapplies the seam.
5. Let Unity finish compiling before entering Play mode.

Do not restore an older hand-edited `MeleeStance.cs`. The installer adds exactly the
cancel and hit-buffer events required by Photon Melee and is safe to rerun.

## The installer reports a missing dependency

Import Melee 2.2.14 from the Asset Store, then open **Game Creator → Install...**.

The Game Creator Install dependency schema can resolve only other Installer assets;
the base Melee asset has no Installer ID that Photon Melee can declare. Verify the
Melee `Editor/Version.txt` is exactly `2.2.14`; Photon Melee does not invent an ID.
Photon Core 1.5.0 and the listed Game Creator example-support installs must also be
present.

## A remote player has no weapon or the wrong weapon

Open the network player prefab and:

* add the weapon asset to **Melee Network → Synchronized Weapons**;
* enable **Synchronize Equipment**;
* confirm Melee Network is in Photon View's Observed Components;
* rebuild Addressables/AssetBundles containing the prefab.

Check the Console for an unresolved weapon ID warning.

## Combo branches differ between clients

Upgrade to Photon Melee 1.2.0 and enable **Synchronize Combo Selection**. Run input
and combo selection only on the owning character. Version 1.2 sends the owner's
selected combo ID, including results based on variables or Stats.

## Attacks animate but health changes twice or not at all

`On Melee Hit` is local to the Melee skill simulation. Decide whether the target
owner or master client validates damage, then apply it once using Photon Core RPCs or
Photon Stats. Do not run an unconditional damage instruction independently on every
peer.

## Blocking matches but parry results differ

Photon Melee synchronizes block state and timing. Project-specific parry results,
damage, and secondary effects must use the same authoritative hit policy on every
client.

## A late joiner does not receive the current state

Confirm:

* the character was created with Photon network instantiation;
* the PhotonView owner is still present;
* Melee Network is observed by Photon View;
* every runtime weapon is in Synchronized Weapons;
* the late joiner uses the same App ID, App Version, region, and room.

Offline Mode and a single Play-mode window do not test late-join snapshots.
