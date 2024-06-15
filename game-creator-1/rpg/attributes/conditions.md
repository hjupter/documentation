# Conditions

&#x20;**Attributes** comes with a set of **Conditions** that allows you to _check_ whether an actor has enough mana or  strength or if health went down etc...

## Condition Attribute Compare

With this condition you can check every value of an _attribute_ within an _Actor_ like: [**Value**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts), [**Consumable Value**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts) and [**Bonus**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts)**.** And also [**Percent** ](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts)and [**Last Time Modified**](https://njg.gitbook.io/gc-modules/\~/drafts/-LGYBUg5rvA5jswJTE97/primary/rpg/rpg/attributes#concepts) values.

![](../../../.gitbook/assets/attribute\_condition.gif)

## Condition Attribute Changed

This condition allows you to check whether a attribute went down or not. For example, using actor's attribute changed event and by adding this condition if health went down then play hurt animation and show some blood!

![](../../../.gitbook/assets/Attribute\_ActionsAndConditions\_01.png)

## Condition Attribute Last Influence

This condition allows you to check who was the last influence of the attribute. For example, if another actor hurts your player that will affect your health and then it's going to become the last influence of the health attribute. You can use this with any attribute.

![](../../../.gitbook/assets/Attribute\_ActionsAndConditions\_02.png)
