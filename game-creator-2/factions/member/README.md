---
description: >-
  The Member component is essential for integrating any object or character into
  the Faction system. By adding this component, you enable the object or
  character to join or leave factions dynamically.
---

# Member

{% hint style="info" %}
It is usually attached to the **Character** object so it's easy to access. However, you can decide to attach it to some other object or even have multiple characters.
{% endhint %}

## Overview

The Member component allows an object or character to:

* Join multiple factions at the start or dynamically during runtime.
* View and manage affiliations with various factions.
* Display status towards the player if the selected member is not the player.
* &#x20;Handle reputation points if enabled for specific factions.

<div align="left">

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 1.59.36 PM.png" alt=""><figcaption></figcaption></figure>

</div>

## Handling Reputation Points

If reputation points are enabled for a faction, the member’s actions can influence their status within that faction.

{% hint style="info" %}
Use the **Ignore Reputation Points** checkbox to exclude reputation points from affecting the member’s faction status.
{% endhint %}

## Live Debugging

### Active Factions

Displays the list of factions the member is currently part of.

Shows the current status (e.g., Friendly, Neutral, Hostile) and allows leaving the faction.

### Other Factions

Lists all other available factions.

Shows the relationship status and provides options to join the factions.

### Status Towards Player

If the selected member is not the player, the component will display the status of this member towards the player.

This helps in understanding the relationship dynamics from the member’s perspective.

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-16 at 1.58.12 PM.png" alt=""><figcaption></figcaption></figure>
