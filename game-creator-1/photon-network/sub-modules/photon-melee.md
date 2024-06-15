---
description: Photon Melee brings the power of Photon to the Melee module.
---

# ⚔️ Photon Melee

## Overview

There are three main components in the **Photon Melee** sub-module.

* **Melee Registry:** A configuration object which contains all **Weapons,** **Shields** and **Clips** that are required for your game to run.
* **Character** **Melee Network:** A component required to syncronize all melee actions.

{% hint style="success" %}
This sub-module requires the [**Melee**](https://assetstore.unity.com/packages/tools/game-toolkits/melee-game-creator-1-164145) and [**Photon Network**](https://assetstore.unity.com/packages/tools/network/photon-module-for-game-creator-123155) module
{% endhint %}

{% hint style="info" %}
Download the [**Photon Melee**](https://u3d.as/2sC4) module
{% endhint %}

## Setup

Setting up the **Photon Melee** sub module is a fairly straight forward process after you learn how to use the **Photon module** and **Melee** module.

![](<../../../.gitbook/assets/Setup (3).png>)

### Step 1

The first thing you need is to setup a **Melee Registry** component and add all the weapons, shields and clips as needed.

![This component needs to be present on the scene before joining a room.](<../../../.gitbook/assets/Screen Shot 2021-12-19 at 1.50.51 AM.png>)

### Step 2

Once this is done the final step is to turn on the "**Sync Shooter"** option in your **Player Character Shooter** or **Character Shooter** components.

![](<../../../.gitbook/assets/Screen Shot 2021-12-19 at 1.53.43 AM.png>)

{% hint style="info" %}
Please keep in mind this module is in **BETA**, if you see any bugs just report it to [**support@ninjutsugames.com**](mailto:support@ninjutsugames.com) or at the [**Discord Server**](https://discordapp.com/invite/u2K64A7)&#x20;
{% endhint %}
