---
description: >-
  Create time-based system. Use the server's time to make sure players can't
  cheat by changing the time on their device
---

# Replenish System

## Initialization

To use this system simply call the **Initialize Replenish Value** instruction.

<figure><img src="../../.gitbook/assets/image (71).png" alt=""><figcaption></figcaption></figure>

#### Replenish Key

A key needed to store the value in Player's storage

#### Initial Value

The initial value that will have the Player's storage value

#### Max Value

The maximum value the player can earn with the system

#### Interval

How often this value will be incremented by 1.

#### Auto Collect Offline Earnings

If enabled offline earnings will be auto collected, otherwise an event will be triggered that can be used to do it manually

## Offline Earnings

Offline earnings can be received manually by using a trigger.

<figure><img src="../../.gitbook/assets/image (97).png" alt=""><figcaption></figcaption></figure>

Once this trigger is execute the instruction **Collect Offline Earnings** can be used

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
To see this in action you can play the demo scene **9\_ReplenishSystem**
{% endhint %}
