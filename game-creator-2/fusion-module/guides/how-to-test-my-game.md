# How to test my game

When working a multiplayer game you need to be able to quickly test and iterate over your game, there are few ways to do this.

## Editor & Build

The easiest way to test your multiplayer game is to make a standalone build (PC or Mac) then run the editor and the build at the same time.

{% hint style="info" %}
It's recommeded to make a development build that way you can catch errors easier.
{% endhint %}

## Editor & Clone

This is my favorite way for testing a multiplayer project. You basically have your original project then create a clone out of it the best way to do this is by using by using [**ParrelSync**](https://github.com/VeriorPies/ParrelSync)**.**

[ParrelSync](https://github.com/VeriorPies/ParrelSync) is a Unity editor extension that allows users to test multiplayer gameplay without building the project by having another Unity editor window opened and mirror the changes from the original project.

![Test project changes on clients and server within seconds - both in editor ](<../../../.gitbook/assets/Showcase 1.gif>)

{% hint style="success" %}
This is the **recommended way** to test your multiplayer game, this allows you to debug and catch errors way easier than any other way.
{% endhint %}
