# Actions

The **Actor** component comes with a set of **Actions** that complement **Game Creator**'s and allows to do different things with an Actor. All actions can be used on any other module and everywhere but it requires a target with an **Actor** component.

{% hint style="warning" %}
Some actions have different targets like **Skill Target, Skill Owner, Hit Target** these options are meant to be used only inside a **Skill**.
{% endhint %}

## Action Deal Damage

Deals damage to an **Actor** you can set it do deal a base value or use a formula to calculate the final damage. For example, this can be used on a Skill or with a trap.

![](../../../.gitbook/assets/Actor\_Actions\_01.png)

## Action Heal

Heals an actor with a base value or by percent.

![](../../../.gitbook/assets/Actor\_Actions\_02.png)

## Action Kill

Kills an actor.&#x20;

![](../../../.gitbook/assets/Actor\_Actions\_03.png)

## Action Restore

Restores an actor (if its death). It can be restored with certain amount of Health percent.

![](../../../.gitbook/assets/Actor\_Actions\_04.png)

## Action Invulnerable

Toggles invulnerability of an actor. For example, a tower in MOBA game that cannot be destroyed until another one is.

![](../../../.gitbook/assets/Actor\_Actions\_05.png)
