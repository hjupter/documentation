# 💫 Fusion Stats

Fusion Stats synchronizes Game Creator 2 Stats data over Photon Fusion. Add
**Traits Network** beside **Traits** on a spawned Fusion Network Object to
replicate:

* Stat base values and aggregate Modifiers
* Attribute current values
* Status Effect stacks, removals, and elapsed duration state
* Initial class state for late join and reconnect

{% hint style="success" %}
[**Get Fusion Stats on the Unity Asset Store →**](https://www.ninjutsugames.com/go/fusion-stats?src=docs_fusion_stats_overview)
{% endhint %}

## Compatibility

The Fusion Stats 1.1.0 candidate targets this exact compatibility set:

| Dependency | Supported version |
| --- | --- |
| Fusion Stats | 1.1.0 |
| [Fusion for Game Creator 2](https://www.ninjutsugames.com/go/fusion?src=docs_fusion_stats_requirement_core) | 1.4.0 candidate |
| [Photon Fusion](https://www.ninjutsugames.com/go/photon-fusion?src=docs_fusion_stats_requirement_sdk) | 2.1.1 Stable, build 2177, Realtime 5 |
| [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_fusion_stats_requirement_gc2) | 2.18.60 |
| [Stats 2](https://www.ninjutsugames.com/go/stats-2?src=docs_fusion_stats_requirement_stats) | 2.6.23 |
| Unity | 6000.0.60f1 or 6000.3.14f1 |

Fusion Stats does not embed these dependencies. Install the compatible external
packages first.

{% hint style="warning" %}
Version 1.1.0 is upcoming. Its compatibility set remains a release candidate
until the supported-editor, build, package, upgrade, and two-client Cloud checks
finish.
{% endhint %}

## Where to go next

* [Install and configure Fusion Stats](getting-started.md)
* [Understand synchronization and authority](synchronization-and-authority.md)
* [Use the Fusion Stats visual scripting actions](visual-scripting.md)
* [Upgrade from 1.0.0](upgrading.md)
* [Troubleshoot common setup and runtime issues](troubleshooting.md)

{% hint style="info" %}
Normal Stats conditions, events, properties, formulas, and UI read the replicated
local Traits state. Gameplay mutations should use the actions under
**Fusion → Stats**.
{% endhint %}
