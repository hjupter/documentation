# Troubleshooting

## A remote peer has the wrong initial values

Confirm the object was spawned by Fusion and has **Traits**, **Traits Network**,
and **Network Object** on the same Game Object. The current version captures the
complete state in `Spawned`, so a late Client should not need a later change to
receive initial data.

## Traits Class mismatch warning

The peer prefab has a different Class name or Stat/Attribute ID layout. Use the
same network prefab and Class asset on every peer. Do not rename or reorder IDs
on only one build.

## A network mutation is rejected

Check the Traits Network mutation policy:

* With **State Authority Only**, run the action on State Authority.
* With **Input Authority Requests**, the caller must own Input Authority and
  State Authority must still be online.

Also confirm the target has Traits Network, the selected asset exists, numeric
values are finite, and Stat or Attribute IDs do not exceed 32 characters.

## A Status Effect applies gameplay twice

Status Effect lifecycle instructions can run when each peer reconstructs its
local presentation. Gate gameplay-changing instructions with
**Fusion → Network Object → Has State Authority**.

## Modifier values look different internally

Stats 2 exposes the aggregate Modifier contribution, not its private Modifier
list. Fusion Stats reconstructs the aggregate on remote peers as one constant
Modifier. Read the resulting Stat value or Modifiers value instead of expecting
the original list shape.

## Late join works but owner requests fail after reconnect

Reconnect creates a new Fusion player identity in many spawn flows. Reassign
Input Authority to the reconnecting `PlayerRef`. The Traits snapshot is
independent of that assignment and should still restore.

## The project does not compile after upgrading Photon Fusion

Upgrade Photon Fusion to the latest 2.0.x before 2.1.1, then reinstall Fusion for
Game Creator 2 1.4.0 and Fusion Stats 1.1.0. Keep Photon App Settings and Network
Project Config while replacing the SDK. Confirm no old package source was copied
back over the upgraded files.

## Still stuck?

Include the exact Unity, Photon Fusion, Fusion for Game Creator 2, Game Creator
2, Stats 2, and Fusion Stats versions when requesting support. State whether the
problem occurs on Host, Client, late join, or reconnect and include the first
Unity Console error.
