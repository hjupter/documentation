---
description: Install Photon Core 1.5 and connect your first two players
---

# Getting Started

This guide takes a new project from installation to two players sharing one room.

## Before you begin

Install these packages in this order:

1. Unity 6.3 LTS, Unity 6.4, or Unity 6.5
2. Game Creator 2 Core 2.18.60 or newer
3. Photon Unity Networking 2.55
4. Photon Module 2 from the [Unity Asset Store](https://u3d.as/31Vd)

Back up or commit an existing project before upgrading.

## Install Photon Core

1. Open **Game Creator → Install**.
2. Select **Photon → Core**.
3. Install the package.
4. Install **Photon → Examples** if you want the sample scenes.
5. Let Unity finish compiling before opening a sample or entering Play mode.

{% hint style="danger" %}
Do not manually extract Photon Core into a `Plugins` folder. Use the Game Creator installer so the package is placed and updated correctly.
{% endhint %}

## Configure Photon

1. Create or open a Photon PUN application in your [Photon dashboard](https://dashboard.photonengine.com/).
2. In Unity, open **Window → Photon Unity Networking → PUN Wizard**.
3. Enter the Realtime App ID.
4. Open **Photon Server Settings** and confirm the App ID is saved.
5. Give every compatible client the same App ID and App Version.

Use **Photon Connect to Best Cloud Server** for automatic region selection. Use **Photon Connect to Region** when all players must connect to one chosen region.

{% hint style="warning" %}
Players using different App IDs, App Versions, or fixed regions will not meet, even if they use the same room name.
{% endhint %}

## Create the connection flow

Create an Actions object for your connection menu:

1. Add **Photon Connect**.
2. Add a Trigger using **On Photon Connected to Master**.
3. From that Trigger, use one of these room Instructions:
   * **Photon Join Random Room**
   * **Photon Join Random or Create Room**
   * **Photon Join Room**
   * **Photon Create Room**
4. Add another Trigger using **On Photon Joined Room**.
5. Spawn the local player with **Photon Instantiate**.

Use the matching failure Events to show a useful message or try another path:

* **On Photon Join Random Failed**
* **On Photon Join Room Failed**
* **On Photon Create Room Failed**
* **On Photon Disconnected**
* **On Photon Error Info**

## Prepare a network player prefab

The player prefab should contain:

* the Game Creator Character setup used by your project
* a PhotonView
* the Photon Core character synchronization component
* any Photon add-on components required by the character's Stats, Shooter, Melee, Inventory, or Abilities

Add the prefab to Photon Core's cached prefab list and make sure it can be resolved by every build. Spawn it with **Photon Instantiate**, not Unity's regular Instantiate instruction.

## Test with two clients

1. Start one client and connect.
2. Join or create a test room.
3. Start a second client using a standalone build or a supported clone workflow.
4. Connect with the same App ID, App Version, and region.
5. Join the same room.
6. Confirm both clients see both players move.
7. Confirm local input only controls the locally owned player.
8. Leave and rejoin to test cleanup and late-join state.

{% hint style="info" %}
One Play-mode window proves only one side of the session. Always test at least two clients before calling a multiplayer flow complete.
{% endhint %}

## Upgrade checklist

When upgrading from Photon Core 1.4:

* update Game Creator Core and Photon PUN first
* install matching Core and Examples versions
* remove retired Ready Player Me integration and examples
* update Photon add-ons to versions compatible with Core 1.5
* reopen important visual scripting assets and check their player references
* test connection, room creation, spawning, leaving, rejoining, and a late joiner

Next, read the [Overview](overview.md) and [Multiplayer Guide](multiplayer-guide.md).
