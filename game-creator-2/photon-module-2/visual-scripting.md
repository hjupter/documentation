---
description: Photon Instructions, Conditions, Events, and Properties for Game Creator 2
---

# Visual Scripting Reference

Photon Core adds visual scripting tools under the **Photon** category. This page lists the tools included in Core 1.5 and explains when to use them.

{% hint style="info" %}
Photon add-ons provide their own module-specific tools. For example, weapon or stat synchronization belongs to Photon Shooter or Photon Stats rather than Photon Core.
{% endhint %}

## Synchronize custom Actions and Triggers

Add **Actions RPC** beside a Game Creator Actions component, or **Trigger RPC** beside a Trigger, when its visual scripting should run on other clients.

Choose the target in the RPC component:

* **All** for every current player
* **Others** when the sender already performed the result locally
* **Master Client** for one authoritative room decision
* **All Via Server** when every client should receive events in server order
* a buffered target only when late joiners genuinely need to replay the call

Enable **Send State to New Players** only for an RPC that may still be running when a player joins.

## Instructions

### Connection and matchmaking

* Photon Connect
* Photon Connect to Best Cloud Server
* Photon Connect to Region
* Photon Disconnect
* Photon Reconnect
* Photon Reconnect And Rejoin
* Photon Join Lobby
* Photon Leave Lobby
* Photon Create Room
* Photon Join Room
* Photon Join or Create Room
* Photon Join Random Room
* Photon Join Random or Create Room
* Photon Rejoin Room
* Photon Find Friends

### Room and scene control

* Photon Automatically Sync Scene
* Photon Load Level Name
* Photon Load Level Index
* Photon Change Room Open State
* Photon Change Room Visible State
* Photon Allow Kicking Players
* Photon Kick Player
* Photon Leave Room
* Photon Set Offline Mode
* Photon Flush Network Messages
* Is Message Queue Running
* Don't Destroy On Load

### Network objects and ownership

* Photon Instantiate
* Photon Instantiate Room Object
* Photon Destroy
* Photon Request Ownership
* Photon Transfer Ownership

### Player data

* Photon Set Player Name
* Photon Set Player Number
* Photon Change Player Score
* Photon Player Property Boolean
* Photon Player Property Float
* Photon Player Property Integer
* Photon Player Property String

### Room data and time

* Photon Room Property Boolean
* Photon Room Property Float
* Photon Room Property Integer
* Photon Room Property String
* Photon Start Timer
* Photon Start Countdown Timer
* Photon Wait Seconds

### Visual scripting and presentation

* Photon Change RPC Property
* Floating Text

## Conditions

### Connection and authority

* Connection State
* Photon Is Connected
* Photon Is Connected And Ready
* Photon Is In Lobby
* Photon In Room
* Photon Is Offline Mode
* Photon Is Master Client
* Photon Is Mine
* Photon Is Owner

### Room state

* Photon Room Is Open
* Photon Room Is Visible
* Photon Room Is Offline
* Photon Room Is Full
* Photon Player Count
* Photon Room Elapsed Time
* Photon Room Remaining Time

### Player data

* Photon Player Nickname
* Photon Player Number
* Photon Player Score
* Photon Has Player Property
* Photon Player Property Bool
* Photon Player Property Float
* Photon Player Property Integer
* Photon Player Property String

### Room data

* Photon Has Room Property
* Photon Room Property Bool
* Photon Room Property Float
* Photon Room Property Integer
* Photon Room Property String

## Events

### Connection, lobby, and discovery

* On Photon Connected
* On Photon Connected to Master
* On Photon Disconnected
* On Photon Status
* On Photon Error Info
* On Photon Custom Authentication Failed
* On Photon Region List Received
* On Photon Joined Lobby
* On Photon Left Lobby
* On Photon Lobby Statistics Update
* On Photon Room List Update
* On Photon Friend List Update

### Room lifecycle

* On Photon Created Room
* On Photon Create Room Failed
* On Photon Joined Room
* On Photon Join Room Failed
* On Photon Join Random Failed
* On Photon Left Room
* On Photon Master Client Switched

### Players and properties

* On Photon Player Entered Room
* On Photon Player Left Room
* On Photon Player Spawned
* On Photon Player Despawned
* On Photon Player Properties Update
* On Photon Room Properties Update

### Network objects and ownership

* On Photon Instantiate
* On Ownership Request
* On Ownership Transferred
* On Ownership Transfer Failed
* On Photon Serialize View

Event player outputs are often the safest way to target the player involved in that event. Use **RPC Sender** when the logic needs the client that initiated a network Action or Trigger.

## Properties

### GameObject Properties

* Game Object Name
* Local Player
* RPC Sender
* Master Client
* Player by Number
* Last Joined Player
* Last Chat Player
* Player Camera
* Photon Runtime Model
* Photon Runtime Model by Name

### Number and Color Properties

* Player Count
* Photon Room Player Limit
* Player Number
* Player Ping
* Player Score
* Photon Network Time
* Photon Room Float
* Ping Color

### String Properties

* Photon Cloud Region
* Photon Connection State
* Photon User ID
* Room Name
* Room Property
* Player Nickname
* Player Number
* Player Count
* Player Property
* Last Chat Message
* Network Variable
* Photon Local Models List

### Sprite and model Properties

* Photon Runtime Model Sprite
* Photon Runtime Model Sprite by Name

Properties return safe default values when Photon data is unavailable. Use the matching connection, room, player, or property-existence Condition when the distinction matters to gameplay.

## Choosing the right tool

| Goal | Recommended tool |
| --- | --- |
| Show a temporary effect now | RPC to All or Others |
| Ask one client to decide | RPC to Master Client |
| Store a player's ready state | Player property |
| Store the match phase | Room property |
| Spawn something everyone must see | Photon Instantiate |
| Spawn something owned by the room | Photon Instantiate Room Object |
| Respond to shared state changing | Player or room property update Event |
| Find who sent a network call | RPC Sender |
| Find who joined or left | The Event's player output |

See [Multiplayer Guide](multiplayer-guide.md) for complete patterns.
