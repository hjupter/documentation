# Variables

## Overview

Fusion module has built-in components to synchronize Local or Global Name Variabes and Lists.

{% hint style="info" %}
They all require to exist in a scene with a **Network Object** in order to work.
{% endhint %}

{% hint style="success" %}
These components, besides synchronizing their current state to remote players, will replicate the state to newly joined players.
{% endhint %}

## Local Name Variables

To synchronize Local Name Variables simply attach a Local Name Variables Netwok component.

<figure><img src="../../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>

## Global Name Variables

To synchronize Global Name Variables create a new game object, attach a **`Global Name Variables Netwok`** then select the Global Name Variables you need

<figure><img src="../../.gitbook/assets/image (138).png" alt=""><figcaption></figcaption></figure>

## Local List Variables

To synchronize Local List Variables simply attach a Local List Variables Netwok component and select **Sync Mode** to **Sync Data**

<figure><img src="../../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

## Global List Variables

To synchronize Global List Variables create a new game object, attach a **`Global List Variables Netwok`** then select the Global List Variables you need and select **Sync Mode** to **Sync Data**

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

## List Sync Modes

List Network components has 4 different types of synchronization modes:

### **Sync Data**&#x20;

This mode will sync state of list data

### **Players List**&#x20;

This mode will populate the list with all players and update it as they join or leave.

### **Attachments**&#x20;

This mode is meant to be used to register attachment props through the network, once props are registered you can freely use Attach or Remove Prop instructions and it wil automatically replicate the attachments.&#x20;

{% hint style="success" %}
You can read more about this [**here**](characters.md#attachments).
{% endhint %}

### Models

This mode is meant to be used to register models or skins through the network, once props are registered you can freely use Change Model instructions and it wil automatically replicate it.&#x20;

{% hint style="success" %}
You can read more about this [**here**](characters.md#models).
{% endhint %}
