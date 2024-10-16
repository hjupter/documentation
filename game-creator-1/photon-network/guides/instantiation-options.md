---
description: There is multiple ways to instantiate an object or player.
---

# Instantiation Options

{% hint style="warning" %}
All instantiation options requires the prefab to have a **Photon View** attached to it.
{% endhint %}

## 1. Photon Database

To instantiate a player object you can add drag and drop you prefabs to the Prefabs tab in Photon Preferences inside Game Creator Preferences.

![This method make your objects available globally for instantiation.](<../../../.gitbook/assets/image (99).png>)

## 2. Game Creator List

This method makes whatever object you put in this Game Creator list available for network instantiation.

By using a list you can make it easy if you want the player to have an specific or random prefab based on the list iterator.

![](<../../../.gitbook/assets/image (62).png>)

{% hint style="info" %}
This method is useful if you want to keep your instantiation available only on an specific scene which its also useful for Asset Bundles.
{% endhint %}

## 3. Prefab inside Resources Folder

If you choose to pick a prefab directly in the **Photon Instantiate** action your prefab must be inside a Resources Folder or added to the **Photon Database** (see option 1)\


![](<../../../.gitbook/assets/image (103).png>)
