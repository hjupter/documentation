---
description: Photon Fusion 2 networking for Game Creator 2
cover: ../../.gitbook/assets/Cover_Horizontal (2).png
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# ☢️ Fusion Module

Fusion Module connects Game Creator 2 characters, visual scripting, variables,
scenes, sessions, UI, chat, and network objects to Photon Fusion 2.

{% embed url="https://youtu.be/eDtCsUxewmc" %}

{% hint style="success" %}
[Play the demo](https://hjupter.itch.io/fusion-gamecreator-2) or
[get Fusion Module on the Unity Asset Store](https://www.ninjutsugames.com/go/fusion?src=docs_fusion_overview).
{% endhint %}

## Compatibility

Fusion Core 1.4.0 targets this exact dependency matrix:

| Dependency | Supported version |
| --- | --- |
| Unity | `6000.0.60f1` and `6000.3.14f1` |
| Photon Fusion | `2.1.1` Stable, build `2177` |
| Photon Realtime | Major version `5` (included with Fusion 2.1) |
| Game Creator Core | `2.18.60` |

Unity 6.4 and 6.5 are not in the supported Fusion 2.1.1 matrix for this
release. Fusion and Game Creator remain customer-managed dependencies; Fusion
Core does not redistribute either SDK.

## Features

* Shared Mode and Host/Client session workflows.
* Character movement, facing, jump, model, prop, ragdoll, and look
  synchronization.
* State-authority and input-authority checks, ownership requests, spawning,
  despawning, scene loading, pooling, and tick timers.
* Networked Local and Global Name Variables and List Variables, including
  late-join reconstruction.
* Actions, Conditions, and Trigger RPCs with optional late-join cache.
* Session browser, region selector, room chat, floating text, and example UI.
* A fixed, deterministic network-input extension used by Fusion Melee,
  Shooter, and Abilities without replacing Core's `NetworkInputData`.

## Start here

1. Follow [Setup](setup.md) and configure a Fusion App Id.
2. Learn the [Sessions](sessions.md) and [Characters](characters.md) authority
   flow.
3. Install the Examples and UI packages.
4. Use the [visual scripting reference](references/visual-scripting.md) for the
   exact titles shown in Game Creator's selectors.
5. Read the [compatibility and input contract](references/compatibility.md)
   before integrating a Fusion add-on.

{% hint style="warning" %}
An offline session or one editor with multiple simulated peers is useful for
iteration, but it is not release proof. Test separate processes connected to
Photon Cloud in every topology you ship.
{% endhint %}
