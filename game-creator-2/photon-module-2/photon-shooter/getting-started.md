# Getting Started

## Overview

Most of the magic happens automatically by simply attaching the ShooterNetwork, in some cases like equipping a weapon can simply be done by using an RPC component.

## Considerations

When using sights and you need to change camera FOV we don't want this to be run by remote players so always check if **Self** (the player who executed) is Mine&#x20;

When using Aims that requies Camera instead of using Main Camera alway choose Photon > Player Camera to avoid Remote Player aim direction to point to the local player camera direction.

<div align="left">

<figure><img src="../../../.gitbook/assets/image (1) (1) (1).png" alt="" width="375"><figcaption></figcaption></figure>

</div>

In some cases in ShooterWeapon you will have to use Self or Target instead of Player, like in projectile section the Character Target needs to be picked from who is executing the action in this case Self if you pick player remote players who fire to the local player target instead.

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>
