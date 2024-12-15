# State Machine Runner

The State Machine Runner is the component in charge of executing your state machine asset or embedded.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

### The Buttons

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

**`Edit`** this button will open or reload the current existing graph view window with the selected State machine

**`New Window`** this will open a new graph window. You can open as many as you want with different State Machines.

**`Clear`** this will remove any existing embedded data for an embedded State Machine

**`Embed`** embed or create an scene State Machine allowing you to use scene references directly&#x20;

**`Detach`** this will roll back to the State Machine asset if there was any. Existing embedde data won't be deleted.

{% hint style="info" %}
If no State Machine asset is present it will create and embed a new State Machine&#x20;
{% endhint %}

{% hint style="success" %}
If a State Machine asset is present it will create a copy of it and embed it into the runner
{% endhint %}
