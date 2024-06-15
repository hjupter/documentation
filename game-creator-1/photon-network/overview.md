# Overview

## Basic Concepts

Before you get started using this module let's get to understand some basic concepts.

### PUN

PUN is short for **Photon Unity Network** this is the base of this module.

### **RPC**

From here we will be talking about RPC's this the short for **Remote Procedure Call**. Can be a term for Operations (calling methods on the server) but in most cases it refers to calling a method on remote clients within [PUN](https://doc.photonengine.com/en-us/pun/current/reference/glossary#pun) games.

### Photon Player

Summarizes a "player" within a room, identified (in that room) by actorID.

Each player has an actorId (or ID), valid for that room. It's -1 until it's assigned by server. Each client can set it's player's custom properties with Set Properties Action, even before being in a room. They are synced when joining a room.

### Room

Players meet in rooms to play a match or communicate. Communication outside of rooms is not possible. Any client can only be active in one room.

## Photon Targets

With **Photon Unity Network** there is the option to send to different group of targets or single player.

* **All**: Sends the RPC to everyone else and executes it immediately on this client. Player who join later will not execute this RPC.\

* **Others**: Sends the RPC to everyone else. This client does not execute the RPC. Player who join later will not execute this RPC.\

* **MasterClient**: Sends the RPC to MasterClient only. Careful: The MasterClient might disconnect before it executes the RPC and that might cause dropped RPCs.\

* **AllBuffered**: Sends the RPC to everyone else and executes it immediately on this client. New players get the RPC when they join as it's buffered (until this client leaves).\

* **OthersBuffered**: Sends the RPC to everyone. This client does not execute the RPC. New players get the RPC when they join as it's buffered (until this client leaves).\

* **AllViaServer**: Sends the RPC to everyone (including this client) through the server.\nThe server's order of sending the RPCs is the same on all clients.\

* **AllBufferedViaServer**: Sends the RPC to everyone (including this client) through the server and buffers it for players joining later. The server's order of sending the RPCs is the same on all clients.

{% hint style="info" %}
Do you want to know more about Photon Network? [Click Here](https://doc.photonengine.com/en-us/pun/current/getting-started/pun-intro).
{% endhint %}

## The Editor

The Photon module comes with a preference window where you can manage:

* &#x20;**Prefabs**: this is a predefined list of prefabs for network instantiation. This is used by the _Photon Instantiate Action._ You can only use prefabs and they requires to **PhotonView** attached.\

* **Attachments**: this is a list of predefined attachments to use with the GameCreator's Character Attachment system.\

* **Debug**: from here you can preview **Photon State connection**, Photon _Player Properties_ and _Room Properties_.\

* **Setting**: under settings you can tweak some Photon Network values like **Send Rates.** Only change this if you know what you are doing. This section it's still under development.

![](../../.gitbook/assets/photon\_editor.gif)

{% hint style="warning" %}
If you try to attach an object to a **Character** and if not part of the attachment list it won't _synchronize the attachment_.
{% endhint %}
