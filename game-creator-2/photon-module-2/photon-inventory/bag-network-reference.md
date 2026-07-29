---
description: Complete Photon Inventory component and visual-scripting surface
---

# Bag Network Reference

## Component

Add **Bag Network** from:

`Game Creator > Photon > Inventory > Bag Network`

The component requires:

* Game Creator Inventory **Bag**
* PUN **Photon View**

It synchronizes the owning player's complete Bag state, including items, stacks, equipment, sockets, wealth, bag size, cooldowns, late join, and reconnect recovery.

## Inspector

### Log State Changes

Writes snapshot requests, sends, and applies to the Unity Console. Leave this disabled for normal play and enable it while diagnosing authority or late-join behavior.

## Project settings

Photon Inventory does not add a page to **Game Creator > Settings** because it has no module-wide project option:

* Network runtime configuration belongs to Photon Core.
* The Photon Cloud App ID belongs to PUN's PhotonServerSettings.
* The item catalogue and Inventory data belong to Game Creator Inventory.
* **Log State Changes** belongs to each Bag Network component and defaults to disabled.

Unity serializes Log State Changes with the component's scene or prefab, so it persists through domain reloads without a global settings repository. Photon Inventory creates no settings asset or repository ID during install or upgrade, leaves none behind on uninstall, and does not duplicate or serialize the PUN App ID, authentication values, tokens, or secrets.

{% hint style="info" %}
An empty Photon Inventory settings panel would duplicate existing package ownership without adding a real project-level choice.
{% endhint %}

## Instructions

Photon Inventory adds no Instructions. Use Game Creator Inventory Instructions on the owning Bag.

## Conditions

Photon Inventory adds no Conditions. Use Game Creator Inventory Conditions for bag state and Photon Core Conditions for connection and ownership.

## Events

Photon Inventory adds no Events. Use Game Creator Inventory Events for bag changes and Photon Core Events for room, player, and ownership changes.

## Properties

Photon Inventory adds no Properties. Use Game Creator Inventory Properties to read Bag data and Photon Core Properties to identify network players and ownership.

{% hint style="info" %}
This page covers every surface supplied by Photon Inventory 1.1: the Bag Network component and its Log State Changes inspector option.
{% endhint %}
