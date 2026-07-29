# Visual Scripting Reference

Photon Shooter adds **Shooter Network**, not a parallel set of visual-scripting nodes. Use the
current Shooter 2 nodes below and run shared operations through Photon Core RPC components.
The titles match Shooter 2.2.7.

## Instructions

* Active Human Shooter IK
* Cancel Fire Trigger
* Change Wind
* Change Wind Direction
* Change Wind Magnitude
* Character Lean
* Eject Shell
* Equip Shooter Weapon
* Fix Jam
* Jam
* Pull Fire Trigger
* Release Fire Trigger
* Reload Weapon
* Set Default Sight
* Set Magazine
* Set Munition
* Set Sight ID
* Try Quick Reload
* Unequip Shooter Weapon

Equip and unequip instructions must run on every client that needs to render the weapon prop.
Shooter Network then synchronizes the selected weapon and its current combat state.

## Conditions

* Has Equipped Shooter
* Has Sight ID
* Is Jammed
* Is Pulling Trigger
* Is Reloading
* Is Sight ID

Evaluate ownership-sensitive conditions on the intended character. Use Photon Core's
ownership conditions when an instruction must run only for the local owner.

## Events

* On Equip Weapon
* On Shoot Hit
* On Unequip Weapon
* On Weapon Jam
* On Weapon Jam Fixed
* On Wind Change

Remote trigger playback can raise Shooter events. Apply gameplay damage or persistent room
state only once according to your authority model.

## Shooter properties

The current Shooter package exposes these property titles:

* Charge Ratio
* Current Equipped
* Last Object Hit
* Last Prop Shot
* Last Shot Charge
* Last Shot Direction
* Last Shot Distance
* Last Shot Hit
* Last Shot Muzzle
* Last Shot Pierces
* Last Weapon Shot
* Magazine
* Munition
* Pouch
* Reloading New Magazine
* Reloading Previous Magazine
* Shooter Global List Variable
* Shooter Global Name Variable
* Shooter Local List Variable
* Shooter Local Name Variable
* Shooter Weapon
* Wind
* Wind Direction
* Wind Force

The Shooter weapon setters also appear as **Global List Variable**, **Global Name Variable**,
**Local List Variable**, and **Local Name Variable**. **Magazine** and **Munition** are
available as both get and set number properties.

## Aim and shot strategies

For network characters, choose aim inputs deliberately:

* Camera Center at Distance
* Camera Center with Raycast
* Character Forward
* Character Target
* Pointer on Plane
* Pointer on Raycast

Shooter 2.2.7 provides **Raycast**, **Kinematic Projectile**, **Rigidbody Projectile**, and
**Tracer Projectile** shot strategies. Photon Shooter synchronizes weapon operation, while
the game's authority design decides which client accepts projectile hits and damage.
