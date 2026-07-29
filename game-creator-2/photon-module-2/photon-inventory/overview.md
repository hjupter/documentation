---
description: What Photon Inventory synchronizes
---

# Overview

Photon Inventory keeps each network player's Game Creator Inventory Bag consistent across a Photon room. The Bag on the client that owns its Photon View is the source of truth.

## Complete bag state

Photon Inventory 1.1 sends a complete Inventory snapshot instead of rebuilding a bag from item types alone. This preserves:

* Duplicate items as separate runtime items
* Stack counts and cell placement
* Runtime item properties
* Equipped runtime items
* Socket attachments
* Wealth and currencies
* Bag shape and size
* Cooldowns

This also means a late joiner or a player returning after a disconnect can request the owner's current state rather than relying on earlier network messages.

## Owner-authoritative changes

Run Inventory Instructions that change a player's Bag on the client that owns that player's Photon View. Bag Network observes those changes and sends the resulting state to the other clients.

Remote copies are read-only mirrors. A remote client cannot overwrite another player's Bag by sending its own snapshot.

{% hint style="warning" %}
If a Master Client owns a shared chest, run the chest's Inventory changes on the Master Client. If ownership moves, the new owner becomes authoritative and publishes its state.
{% endhint %}

## Dropped items

When an owner drops or removes an item, the removal is synchronized as part of the Bag state. Photon Inventory does not automatically turn the dropped world object into a Photon network object. Use Photon Core spawning for a drop that every client must see and interact with in the world.

## Visual scripting coverage

Photon Inventory does not add Inventory Instructions, Conditions, Events, or Properties. Use the current Game Creator Inventory visual-scripting units against the owning Bag. The only Photon Inventory surface is the [Bag Network component](bag-network-reference.md).
