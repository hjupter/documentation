---
description: Synchronize Game Creator 2 Melee combat with Photon PUN 2
---

# ⚔️ Photon Melee 2

Photon Melee synchronizes Game Creator 2 Melee characters over Photon PUN 2. The
PhotonView owner chooses the weapon, charge, combo node, attack skill, target, and
defensive state. Other clients replay that chosen state instead of evaluating their
own variables or Stats conditions.

{% hint style="success" %}
Photon Melee 1.2 supports Unity 6.3, 6.4, and 6.5 final releases with Photon Core
1.5, Photon PUN 2.55, Game Creator Core 2.18.60, and Melee 2.2.14.
{% endhint %}

## What Photon Melee synchronizes

* weapon equip, unequip, and swap
* charge state and owner-selected charge/combo nodes
* attack skill transitions, successful cancel, and hit-buffer reset
* target changes and target cleanup after a disconnect
* defense, blocking state and timing, poise, buffer window, and invincibility
* targeted snapshots for late joiners and reconnecting players

Every incoming combat mutation is accepted only from the corresponding PhotonView
owner.

{% hint style="warning" %}
Photon Melee owns combat-state replication and deterministic skill selection. Your
game still owns health or Stats authority. Use Photon Core RPCs or Photon Stats for
authoritative damage payloads.
{% endhint %}

## Start here

1. Follow [Getting Started](getting-started.md) to install the exact dependencies and
   prepare a network character.
2. Read the [Multiplayer Guide](multiplayer-guide.md) for equip, combo, blocking,
   hit/damage authority, late join, and reconnect behavior.
3. Use the [Visual Scripting Reference](visual-scripting.md) to verify the Melee
   nodes audited with Melee 2.2.14.
4. Check [Troubleshooting](troubleshooting.md) when a prefab, weapon, combo, or hit
   behaves differently between clients.

{% hint style="success" %}
Try the [Photon Melee 2 demo](https://hjupter.itch.io/photon-melee-2-game-creator-2).
{% endhint %}

## Requirements

| Package | Required version |
| --- | --- |
| Unity | 6000.3, 6000.4, or 6000.5 final |
| Photon Melee | 1.2.0 |
| Photon Core | 1.5.0 |
| Photon PUN 2 | 2.55 |
| Game Creator 2 Core | 2.18.60 |
| Game Creator 2 Melee | 2.2.14 |

Melee 2 must be imported before Photon Melee. Game Creator's Install dependency
schema can only resolve assets that provide an Installer ID; it cannot declare the
base Melee Asset Store package itself.

After importing Melee 2.2.14, open **Game Creator → Install...** and install Photon
Melee, followed by Photon Melee Examples if needed. The Install dependency schema
cannot model the base Melee Asset Store package, so verify its `Version.txt` before
installing; Photon Melee does not invent a dependency ID.

{% hint style="success" %}
[Get Photon Melee 2 on the Unity Asset Store →](https://www.ninjutsugames.com/go/photon-melee?src=docs_photon_melee_overview)
{% endhint %}

## Support

For help, join the Photon Module channel in the [Game Creator Discord
server](https://discord.com/invite/99bbWBzKDX). Include your Unity, Photon Core, PUN,
Game Creator Core, Melee, and Photon Melee versions and say which client owns the
character.
