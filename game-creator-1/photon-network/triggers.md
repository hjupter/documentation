---
description: This is just a test
---

# Triggers

The **Photon** module comes with a set of **Igniters or Triggers** that are called when when photon events happens like On Connected, On Joined Room etc.

## On Connection Events

This event handle pretty much all Photon Events. Some of them like:

* **OnConnected**: Called to signal that the "low level connection" got established but before the client can call operation on the server.
* **OnConnectedToMaster**: Called when the client is connected to the Master Server and ready for matchmaking and other tasks.
* **OnDisconnected**: Called after disconnecting from the Photon server. It could be a failure or an explicit disconnect call

![](<../../.gitbook/assets/image (46).png>)

## On Connection State

This event it's called when the Photon Network connection state changes and also store the current state in a local or global variable.

![](<../../.gitbook/assets/image (44).png>)

## On Photon Matchmaking

This trigger contains all Photon Matchmaking related events

* **OnLeftRoom**: Called when the local user/client left a room.
* **OnCreatedRoom**: Called when this client created a room and entered it. _OnJoinedRoom_ will be called as well.
* **OnJoinedRoom**: Called when entering a room (by creating or joining it). Called on all clients (including the Master Client).
* **OnCreateRoomFailed:** Called when the server couldn't create a room (OpCreateRoom failed).
* **OnJoinRoomFailed:** Called when a previous OpJoinRoom call failed on the server.
* **OnJoinRandomFailed:** Called when a previous OpJoinRandom call failed on the server.
* **OnFriendListUpdate:** Called when the server sent the response to a FindFriends request.

![](<../../.gitbook/assets/image (102).png>)

## On Room Events

This trigger contains all Photon Room related events:

* **OnPlayerEnteredRoom:** Called when a remote player entered the room. This Player is already added to the playerlist.
* **OnPlayerLeftRoom:** Called when a remote player left the room or became inactive. Check otherPlayer.IsInactive.
* **OnMasterClientSwitched:** Called after switching to a new MasterClient when the current one leaves.

![](<../../.gitbook/assets/image (59).png>)
