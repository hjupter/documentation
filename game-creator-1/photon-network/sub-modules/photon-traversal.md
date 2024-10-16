---
description: Photon Traversal brings the power of Photon to the Traversal module.
---

# 🏃 Photon Traversal

## Overview

Photon Traversal tightly integrates Photon by automatically syncronizing all types of **obstacles, climbables** and **players**

There are three main objects in the **Photon Traversal** sub-module.

* **Traversable Registry:** A configuration object which contains all **Traversable** objects that are required for your game to run.
* **Traversal Character Network:** A component required to syncronize all traversable character actions.
* **Climbable Network:** A component required to syncronize the climbable actions of an object.
* **Obstacle Network:** A component required to syncronize the obstacle actions of an object.
* **Graple Hook Network:** A component required to syncronize the graple hook actions of an object.

{% hint style="success" %}
This sub-module requires the [**Traversal**](https://assetstore.unity.com/packages/tools/animation/traversal-179526)[ ](https://gamecreator.page.link/shooter)and [**Photon Network**](https://assetstore.unity.com/packages/tools/network/photon-module-for-game-creator-123155) module
{% endhint %}

{% hint style="info" %}
Download the [**Photon Traversal**](https://u3d.as/2sC2) module
{% endhint %}

## Setup

Setting up the **Photon Traversal** sub module is a fairly straight forward process after you learn how to use the **Photon module** and **Traversal** module.

![](<../../../.gitbook/assets/Setup (2).png>)

### &#x20;1. Traversable Registry

The first thing you need is to setup a **Traversable Registry** component into your scene.&#x20;

{% hint style="info" %}
**Right Click** in **Hierarchy** panel:\
Game Creator > Traversal > Traversable Registry
{% endhint %}

### 2. Register All Traversables

Use the **Find All** button to look up for all **Traversable** components on the scene.

Use the **Convert to Network** to replace all regular single player components to their respective networked version.

Use **Convert to Normal** to roll them back to the original Traversal components

![](<../../../.gitbook/assets/image (39).png>)

### 3. Traversable Character Network

The **final step** is to add a **Traversable Character Network** component to your player prefab and you are good to go.

This component has 2 toggle options:

* **Disable With Chat:** when this is on and if room chat is open it will disable traversable control inputs.
* **Debug:** this will throw info messages into the console log just for debugging.

![](<../../../.gitbook/assets/image (98).png>)

{% hint style="info" %}
Please keep in mind this module is in **BETA**, if you see any bugs just report it to [**support@ninjutsugames.com**](mailto:support@ninjutsugames.com) or at the [**Discord Server**](https://discordapp.com/invite/u2K64A7)&#x20;
{% endhint %}
