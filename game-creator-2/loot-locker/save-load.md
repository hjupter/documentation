---
description: >-
  LootLocker module has built-in integration with Game Creator 2 Save & Load
  system
---

# Save Load

This module can use LootLocker files system to store all data from any module.

{% hint style="info" %}
Click [here](https://docs.gamecreator.io/gamecreator/advanced/save-load-game/) learn mode about Game Creator's 2 Save & Load system&#x20;
{% endhint %}

## Setup

It is pretty simple to set this up, just go to Game Creator > Settings > General and change the saving system to LootLocker Storage

<figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
In order to be able to save & load using LootLocker you need be [authenticated](authentication/).
{% endhint %}

## Trigger

Once a session is started saved data is loaded automatically and optionally you can use **On Save Game Loaded** to handle any use case you need.

<figure><img src="../../.gitbook/assets/image (72).png" alt=""><figcaption></figcaption></figure>
