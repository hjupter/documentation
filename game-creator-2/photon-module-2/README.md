---
description: Multiplayer for Game Creator 2 powered by Photon PUN 2
---

# 🌐 Photon Module 2

Photon Module 2 brings Photon Unity Networking 2 to Game Creator 2. Build rooms, spawn network characters, synchronize visual scripting, and manage shared match data without writing networking code.

{% hint style="success" %}
Photon Core 1.5 supports Unity 6.3 LTS, Unity 6.4, and Unity 6.5 with Game Creator 2 Core 2.18.60 or newer and Photon PUN 2.55.
{% endhint %}

## What Photon Core includes

* Character movement, rotation, animation, model, ragdoll, and attachment synchronization
* Network spawning, room objects, ownership, and destruction
* Connection, lobby, matchmaking, room, and scene controls
* Networked Game Creator Actions, Triggers, Conditions, and variables
* Player and room properties for shared gameplay state
* Player identity, room chat, timers, ping, and region information
* Events for players, rooms, friends, regions, authentication, and Photon service errors
* Runtime tools for inspecting the connection, players, rooms, and custom properties

Photon Shooter, Photon Stats, Photon Inventory, Photon Abilities, and Photon Melee extend Core with synchronization for their matching Game Creator modules.

{% hint style="warning" %}
Ready Player Me is no longer included or required by Photon Core. Projects upgrading from an older release should remove any gameplay logic that depends on the retired integration.
{% endhint %}

## Start here

1. Follow [Getting Started](getting-started.md) to install the required packages and connect two players.
2. Read the [Overview](overview.md) for rooms, ownership, targets, and player references.
3. Use the [Visual Scripting Reference](visual-scripting.md) to find Photon Instructions, Conditions, Events, and Properties.
4. Follow the [Multiplayer Guide](multiplayer-guide.md) when building spawning, authority, shared state, and late-join support.
5. Check [Troubleshooting](troubleshooting.md) when clients do not connect or show the same result.

{% hint style="success" %}
Try the [Photon Module 2 demo](https://hjupter.itch.io/photon-module-2-game-creator-2).
{% endhint %}

## Requirements

| Package | Required version |
| --- | --- |
| Unity | 6.3 LTS, 6.4, or 6.5 |
| Game Creator 2 Core | 2.18.60 or newer |
| Photon Unity Networking 2 | 2.55 |
| Photon Core | 1.5 |

Get [Game Creator 2](https://assetstore.unity.com/packages/tools/game-toolkits/game-creator-2-203069), [Photon PUN 2](https://assetstore.unity.com/packages/tools/network/pun-2-free-119922), and [Photon Module 2](https://u3d.as/31Vd) from the Unity Asset Store.

{% hint style="danger" %}
Install Photon Core through the **Game Creator Install** window. Do not manually extract it into a `Plugins` folder.
{% endhint %}

## Support

For help, join the Photon Module channel in the [Game Creator Discord server](https://discord.com/invite/99bbWBzKDX). When reporting a problem, include your Unity, Game Creator, Photon PUN, and Photon Core versions and say whether the issue affects the Editor, a build, or both.
