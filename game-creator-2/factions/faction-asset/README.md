# Faction Asset

## Overview

The **Faction** asset defines the various factions within your game. It includes settings for reputation thresholds, relationships with other factions, and custom variables.



## Creating a New Faction Asset

To create a new **Faction** asset, right-click on the Project Panel and select Create → Game Creator → Factions → Faction.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-15 at 10.35.51 PM.png" alt="" width="375"><figcaption></figcaption></figure>

</div>

## Inspector Overview

The **Faction** asset has several distinct sections, each allowing you to configure different aspects of the faction.

The top section includes general information about the _**Faction**_ such as its **Name** or a **Description** (if any). It also optionally allows to determine a **Color** and a **Sprite** image used in [UI](../user-interface.md).

The **Type** field determines whether the _**Faction**_ is a _hidden_ faction, or a _normal_ one.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 12.18.35 AM.png" alt="" width="375"><figcaption></figcaption></figure>

</div>

{% hint style="info" %}
Hidden factions can be hidden from UI elements and are useful for setting up factions that should not be displayed to the user. For example, a player or secret faction.
{% endhint %}

The **Sorting Order** determines the priority of the _**Faction**_ compared to the rest, when being displayed as a list on UI elements. A _**Faction**_ with a higher value will be displayed above other _**Faction**_ assets.

The **ID** is a unique identifier that distinguishes a _**Faction**_ from others.

{% hint style="warning" %}
If there are two _Faction_ assets with the same **ID** value, an error message will appear above. To resolve it, click on any of the fields and it will reveal a button that regenerates the current value with a unique one.
{% endhint %}

## Reputation Thresholds

The Reputation Thresholds section allows you to define how reputation points translate into faction stances.

{% hint style="info" %}
Reputation points can be disabled in a Faction by disabling "Use Reputation"
{% endhint %}

Each stance is defined by a color and a point threshold, making it easy to visualize the current reputation level in the game.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 12.19.33 AM.png" alt="" width="375"><figcaption></figcaption></figure>

</div>

{% hint style="success" %}
Negative values can also be utilized for reputation thresholds.
{% endhint %}

## Faction Relationships

This section allows you to define the default relationships this faction has with other factions.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 12.20.00 AM.png" alt="" width="375"><figcaption></figcaption></figure>

</div>

{% hint style="success" %}
You can click on each circle to change **relationship** towards the specific **Faction**
{% endhint %}

## Faction Variables

Custom variables can be defined on factions. These variables can be used in gameplay to store faction-specific data.

Faction Variables allow you to define custom data specific to each faction. These variables work similarly to Global Name Variables, but with a **key distinction**: all factions have the same set of variables, but each faction can hold different values for these variables.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 12.20.19 AM.png" alt="" width="375"><figcaption></figcaption></figure>

</div>

{% hint style="success" %}
For example, if you define a variable called resourceLevel, every faction will have this variable, but the resourceLevel value can be different for each faction. This allows you to track and manage faction-specific data dynamically.
{% endhint %}

By using Faction Variables, you can create a rich, dynamic environment where each faction’s unique state can influence the overall gameplay experience.





## Save & Load

**Variables** and **Relationships** can be saved between play sessions to later be restored when loading a game. Disabling the _save_ option will make all variables keep the initial value as their starting value, even after loading a previously saved game.

<figure><img src="../../../.gitbook/assets/image (120).png" alt=""><figcaption></figcaption></figure>
