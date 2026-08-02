---
description: Synchronize Game Creator 2 Traits over Photon PUN 2
---

# 💫 Photon Stats

Photon Stats synchronizes a Game Creator 2 `Traits` component over Photon PUN 2.
The client that owns the character's `PhotonView` is authoritative for its Stats,
Attributes, and Status Effects.

{% hint style="success" %}
[**Get Photon Stats on the Unity Asset Store →**](https://www.ninjutsugames.com/go/photon-stats?src=docs_photon_stats_overview)
{% endhint %}

{% hint style="success" %}
[**Try the browser demo →**](https://hjupter.itch.io/photon-stats-game-creator-2)
{% endhint %}

## Compatibility

Photon Stats 1.2.0 is validated with:

* Unity 6.3, 6.4, and 6.5
* Photon Module 2 / Core 1.5.0
* Photon PUN 2.55
* Game Creator 2 Core 2.18.60
* Stats 2.6.23

The Unity versions above are the module's tested range. They are not inherited
from Photon Core's compatibility claim.

## What is synchronized

* Stat base values and the owner's resulting modifier contribution
* Attribute values
* Status Effect additions, removals, expiry, elapsed time, and stack counts
* A complete Traits snapshot for runtime-spawned characters and late joiners

Remote state updates are accepted only from the character's `PhotonView` owner.
See [Synchronization](synchronization.md) for the exact behavior and boundaries.

## Install packages

Install the dependencies first. In Game Creator's Install window, install:

1. **Photon / Core**
2. **Photon / Stats**
3. **Photon / Stats Examples** (optional)

The installed module has a version marker at
`Assets/Plugins/GameCreator/Installs/Photon.Stats@1.2.0/Version.txt`. Use that file
to verify the actual installed payload if the Asset Store download label or local
cache displays an older version.

Continue with [Getting Started](getting-started.md).

{% hint style="danger" %}
Do not extract the install package manually into `Assets/Plugins`. Install
**Photon / Stats** from the Game Creator Install window after all dependencies
are present.
{% endhint %}

{% hint style="info" %}
Need help? Join the Photon channel in Game Creator's
[Discord server](https://discord.com/invite/99bbWBzKDX).
{% endhint %}
