# How to setup Camera Motor

## Overview

Using a Game Creator camera motor for a Multiplayer doesn't work the same way as a Single player game and the reason for this is that depending on the type of camera you use like **Adventure** or **First Person** these types of camera requires a target and usually you use **Player** as target

The problem is the Player instance doesn't exists yet therefore you will get errors.&#x20;

## Solutions

For all the possible solutions you can have 2 separate Camera Motors one that will be active at the beginning looking at your map for example and another one for the player that should be inactive.

### Use a Variable

Inside the Photo Instantiate action there is a **Assign To Variable** field which you can use to store your player instance.&#x20;

![](<../../../.gitbook/assets/image (17).png>)

Once your player is instantiated this variable will change therefore you could use a \
**On Variable Change**

Once your player becomes active you can turn on your player camera and call the change Camera action.

![](<../../../.gitbook/assets/image (81).png>)

In this example we choose to set Player Camera target to be the same variable we use to store our player Instance. If you choose to use Player instead of a variable as target you must have this game object turned off at the beginning.

![](<../../../.gitbook/assets/image (44).png>)

