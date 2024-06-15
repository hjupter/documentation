# Actions

The **Photon** module comes with a set of **Actions** that complement **Game Creator**'s. All actions can be used on any other module

{% hint style="warning" %}
Most of the Actions won't work if you are not connect to the Photon Service unless you have **offline mode** activated.
{% endhint %}

## Synchronizing Actions

Synchronizing Actions it's just as easy as a single click. Once the module it's installed you will notice a new tab called "**Network Settings**" below the _Action's Inspector_ in order to make this work just go ahead and enabled the option "**Sync Actions**" that's pretty much it (well that was actually 2 clicks).

{% hint style="warning" %}
This requires to be within a **room** to work. Nothing happens if not.
{% endhint %}

{% hint style="danger" %}
If you are _synchronizing_ **actions** some times you might need to use target **Invoker** instead of **Player**
{% endhint %}

![(Example of the built-in sync actions inspector)](../../.gitbook/assets/sync\_actions.gif)

Once you enabled **Sync Actions** you can select the [targets](https://njg.gitbook.io/gc-modules/\~/drafts/-LGavgvIRvIu9eDV2NNm/primary/photon-network/photon-network/overview#targets) you want to synchronize with.&#x20;

{% hint style="info" %}
Notice that this will add a **Photon View** component to the game object.
{% endhint %}

## Action Photon Connect <a href="#action-photon-connect" id="action-photon-connect"></a>

Allows you connect to the Photon Service, parameters:

* **Game Version**: this client's version number. Users are separated from each other by game version (which allows you to make breaking changes).
* **Methods:** this action allows you to connect using 3 different method types:
  * **UsingSettings**: Connect to Photon as configured in the PUN settings
  * **Region**: Connects to the Photon Cloud region of choice.
  * **BestCloudServer**: Connect to the Photon Cloud region with the lowest ping.

![](<../../.gitbook/assets/Actions1\_01 (1).png>)

{% hint style="danger" %}
Connecting to the **Photon Cloud** might fail due to:

\- **Invalid AppId** calls: OnFailedToConnectToPhoton. check exact AppId value

\- **Network issues** calls: OnFailedToConnectToPhoton

&#x20;\- **Invalid region** calls: OnConnectionFail with DisconnectCause.InvalidRegion

&#x20;\- **Subscription CCU limit reached** calls: OnConnectionFail with DisconnectCause.MaxCcuReached. also calls: OnPhotonMaxCccuReached
{% endhint %}

## Actions Photon Disconnect <a href="#actions-photon-disconnect" id="actions-photon-disconnect"></a>

Makes this client disconnect from the photon server, a process that leaves any room and calls OnDisconnectedFromPhoton on completion.

![](../../.gitbook/assets/Actions1\_03.png)

## Action Photon Instantiate <a href="#action-photon-instantiate" id="action-photon-instantiate"></a>

Instantiate a prefab over the network. There is 2 types of instantiations:

* **Player Object**: the owner of the object is the player. Normally when player disconnects all instantiated player objects will be destroyed.
* **Scene Object**: the owner of the object is the scene. The object will always be there unless someone destroys it.

![](../../.gitbook/assets/Actions1\_04.png)

{% hint style="warning" %}
This prefab needs to be defined in **Prefabs list** from **Photon Preferences Settings** or located in the root of a "Resources" folder.
{% endhint %}

## Action Create Room <a href="#action-create-room" id="action-create-room"></a>

![](<../../.gitbook/assets/Actions1\_02 (2).png>)

## Action Join or Create Room <a href="#action-join-or-create-room" id="action-join-or-create-room"></a>

![](../../.gitbook/assets/Actions1\_05.png)

## Action Join Room <a href="#action-join-room" id="action-join-room"></a>

![](<../../.gitbook/assets/Actions1\_07 (1).png>)

## Action Kick Player <a href="#action-kick-player" id="action-kick-player"></a>

![](../../.gitbook/assets/Actions1\_08.png)

## Action Leave Room <a href="#action-leave-room" id="action-leave-room"></a>

![](../../.gitbook/assets/Actions1\_09.png)

## Action Reconnect <a href="#action-reconnect" id="action-reconnect"></a>

![](<../../.gitbook/assets/Actions2\_03 (1).png>)

## Action Reconnect and Rejoin <a href="#action-reconnect-and-rejoin" id="action-reconnect-and-rejoin"></a>

![](<../../.gitbook/assets/Actions2\_04 (1).png>)

## Action Rejoin Room <a href="#action-rejoin-room" id="action-rejoin-room"></a>

![](<../../.gitbook/assets/Actions2\_05 (1).png>)

## Action Send Photon RPC <a href="#action-send-photon-rpc" id="action-send-photon-rpc"></a>

![](../../.gitbook/assets/Actions2\_07.png)

## Action Score <a href="#action-score" id="action-score"></a>

![](../../.gitbook/assets/Actions2\_02.png)

## Action Player Property <a href="#action-player-property" id="action-player-property"></a>

![](../../.gitbook/assets/Actions2\_01.png)

## Action Room Property <a href="#action-room-property" id="action-room-property"></a>

![](../../.gitbook/assets/Actions2\_06.png)

## Action Start Timer

![](../../.gitbook/assets/Actions3\_02.png)

## Action Photon Change Text

![](../../.gitbook/assets/Actions3\_01.png)
