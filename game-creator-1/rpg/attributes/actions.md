# Actions

&#x20;**Attributes** comes with a set of **Actions** that complement **Actor and Class** and allows to do different things _give experience_, _add bonuses_, _consume mana_ etc. All actions can be used on any other module and everywhere but it requires a target with an **Actor** component.

{% hint style="warning" %}
Some actions have different targets like **Skill Target, Skill Owner, Hit Target** these options are meant to be used only inside a **Skill**.
{% endhint %}

## Action Change Attribute

With this action you can change every property of an attribute: [**Value**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts), [**Consumable Value**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts) and [**Bonus**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts)**.** \
It is also possible to _reduce_ or _multiply_ any of the values.

![](../../../.gitbook/assets/change\_attribute.gif)

{% hint style="info" %}
This is one of the Actions that will get to use more. You can use it with a sword that boost the Actor attributes for example.
{% endhint %}

## Action Give Experience

Use this action to give **experience** to your player. For example, after you kill an enemy use Actor event death and add this action to award the actor for every kill or use it with the [**quest** ](https://docs.gamecreator.io/quests/quests)module.

![](../../../.gitbook/assets/Attribute\_ActionsAndConditions\_04.png)
