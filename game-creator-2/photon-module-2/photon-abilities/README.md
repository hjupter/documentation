---
description: Synchronize Game Creator 2 Abilities over Photon PUN 2
---

# 🧙 Photon Abilities

Photon Abilities synchronizes Game Creator 2 Ability casts over Photon PUN 2.
The client that owns the character's `PhotonView` is authoritative for activation,
resolved target data, cancellation, learned slots, and cooldown state.

{% hint style="success" %}
[**Get Photon Abilities on the Unity Asset Store →**](https://www.ninjutsugames.com/go/photon-abilities?src=docs_photon_abilities_overview)
{% endhint %}

{% hint style="success" %}
[**Try the browser demo →**](https://hjupter.itch.io/photon-abilities)
{% endhint %}

## Compatibility

Photon Abilities 1.1.0 is validated with:

* Unity 6.3 and 6.4
* Photon Module 2 / Core 1.5.0
* Photon PUN 2.55
* Game Creator 2 Core 2.18.60
* Abilities | Game Creator 2 2.0.1

The Unity versions above are this module's tested range. They are not inherited
from Photon Core or the base Abilities package.

Abilities 2.0.1 does not compile unchanged on Unity 6.5, so Photon Abilities does
not claim that editor and does not install a patch into the paid dependency.

## What is synchronized

* Ability activation from the owning character
* The owner's resolved target set of world positions and network target objects through
  **Photon Synchronized Target**
* Single and channeled casts
* Explicit cast end and cancellation
* Learned and unlearned Ability slots
* Remaining cooldowns for initial synchronization and late joiners
* Active-cast state for a client joining an in-progress room

Remote messages are accepted only from the character's current `PhotonView` owner.
See [Synchronization](synchronization.md) for exact behavior and boundaries.

## Install packages

Use this order:

1. Game Creator 2, Abilities 2.0.1, and other gameplay dependencies
2. Photon PUN 2.55
3. **Photon / Core** 1.5.0
4. **Photon / Abilities** 1.1.0
5. **Photon / Abilities Examples** (optional)

{% hint style="warning" %}
Game Creator's Install dependency schema can resolve install-window packages such
as **Photon / Core**, but it cannot represent the base Abilities Asset Store
package. Import and install Abilities 2.0.1 before installing Photon Abilities.
{% endhint %}

The installed module has a version marker at
`Assets/Plugins/GameCreator/Installs/Photon.Abilities@1.1.0/Version.txt`. Check that
file when the Asset Store cache label does not match the payload you installed.

Continue with [Getting Started](getting-started.md).

{% hint style="danger" %}
Do not manually extract the Photon Abilities install package into
`Assets/Plugins`. Install **Photon / Abilities** from the Game Creator Install
window after its dependencies are present.
{% endhint %}

{% hint style="info" %}
Need help? Join the Photon channel in Game Creator's
[Discord server](https://discord.com/invite/99bbWBzKDX).
{% endhint %}
