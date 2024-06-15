# Characters

## Synchronizing Characters <a href="#synchronizing-actions" id="synchronizing-actions"></a>

Synchronizing a **Character** it's just as easy as a single click. Once the module it's installed you will notice a new tab called "**Network Settings**" below the **Character's** or **PlayerCharacter's** _Inspector_ in order to make this work just go ahead and enabled the option "**Sync Character**" that's pretty much it (well that was actually 2 clicks).  This auto-magically synchronize every property of a character: _Position_, _Rotation_, _Speed_, _Jump Height_ etc.

![(Example of the Character Network Settings)](../../.gitbook/assets/character\_network.gif)

{% hint style="info" %}
Notice that this will add a **Photon View** component to the game object.
{% endhint %}

By enabling **Sync Character** option you will be allowed to tweak some values like:

* **Teleport Distance**: if the character's position is too far from this value (distance) it will teleport to the position.
* **Rotation Dampening**: how smooth it should rotate.
* **Sync Attachments**: whether it should synchronize attachments or not. Just make sure to add any attachments do you want to synchronize to the list as stated [here](overview.md#the-editor).

{% hint style="warning" %}
This requires to be within a **room** to work. Nothing happens if not.
{% endhint %}
