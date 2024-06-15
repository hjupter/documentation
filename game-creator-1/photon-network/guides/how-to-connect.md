# How to Connect and Instantiate your Player

Connect to photon is really simple, here is a quick guide of how to connect, create a room and finally instantiate a character:

### 1. Connect to Photon

First create a trigger with **On Start** igniter, after you create the trigger go ahead create actions. \
Add a **Photon Connect** action, you can leave parameters as they are.

![You must be connected to the Photon Service before trying to call any action except Offline Mode.](<../../../.gitbook/assets/image (21).png>)

### 2. Create or Join a Room

Create another trigger with **On Connection Events** set the event type to **On Connected To Master**.&#x20;

When photon is connected this event is going to be called. Let's add Join Or Create Action this will join a room o create if it doesn't exists.

![You are only allowed to call any join or create room action when you are connected to the Master Server.](<../../../.gitbook/assets/image (19).png>)

### 3. On Joined Room

We want to instantiate our player once we join room so let's add a **On Photon Event** trigger and set the event type to **On Joined Room.**\
Within the On Joined Room event now add Photon Instantiate action and select or assign your Character Prefab.&#x20;

{% hint style="info" %}
Don't know which method to use? You can see more in [**Instantiation Options**](instantiation-options.md)
{% endhint %}

![(On this example we use a Player prefab that was previously added to Prefabs list in Photon Preferences)](<../../../.gitbook/assets/image (59).png>)

{% hint style="warning" %}
Player prefab can't be present on the scene they need to be Instantiated with the Photon Instantiate action
{% endhint %}

{% hint style="info" %}
**Pro Tip:** You can enable your player **Camera** after player is instantiated.
{% endhint %}

### 4. (Optional) Connection Status

You might want to have some feedback.

Let's add a text component to get the Photon Status but first we need the event.\
We can store the status/state in a local or global variable to later use this.

Finally add the text action and to show what we saved in a local variable.

![](<../../../.gitbook/assets/image (48).png>)

### 5. Voila. This is how it should look.

![](../../../.gitbook/assets/photon\_quickconnect.gif)
