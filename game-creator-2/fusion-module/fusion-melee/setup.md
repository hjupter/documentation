---
description: Install and configure the Fusion Melee 1.0.0 candidate
---

# Setup

## Before you begin

Back up or commit your project, then install the candidate dependencies in this
order:

1. Unity `6000.0.60f1` or `6000.3.14f1`
2. Game Creator Core `2.18.60`
3. Game Creator Melee `2.2.14`
4. Photon Fusion `2.1.1`, build `2177`
5. Fusion Core `1.4.0` candidate
6. Fusion Melee `1.0.0` candidate

{% hint style="danger" %}
Do not manually extract Fusion Melee into a generic `Plugins` folder, and do not
use Game Creator's stock Install window for this candidate. Paid Game Creator,
Melee, and Photon files must be installed separately.
{% endhint %}

## Install the module

When a candidate package is supplied:

1. Import `Fusion.Melee-1.0.0.unitypackage`.
2. Choose **Tools → Ninjutsu Games → Fusion → Safe Install → Melee**.
3. Review the dependency result.
4. Continue only when the shared Fusion Core preflight accepts every minimum.
5. Wait for Unity to finish compiling.
6. Confirm the installed version is `1.0.0`.

The Melee adapter contributes `GameCreator.Melee >= 2.2.14` to Fusion Core's
shared preflight. Core reads:

`Assets/Plugins/GameCreator/Packages/Melee/Editor/Version.txt`

Missing, malformed, duplicate, or below-minimum evidence blocks installation
before package mutation. Fusion Melee does not call Game Creator's raw install
manager or Unity's raw package-import API.

The module installs under:

`Assets/Plugins/NinjutsuGames/Packages/Fusion/SubModules/FusionMelee`

## Configure Melee options

Fusion Melee currently has no project-global subsection in Fusion settings.
Configure options at the scope where they are used:

* **Weapons**, **Synchronize Equipment**, **Synchronize Combo Selection**, and
  **Log Validation Warnings** belong to each Fusion Melee Network component.
* **Include PhysX**, **Subtick Accuracy**, and shape dimensions belong to each
  Fusion Sphere or Fusion Capsule striker.
* Character, target, registry key, outcome, and Unity Event values belong to
  their visual-script node or event-relay prefab.

These values may legitimately differ between Characters, weapons, and attack
shapes. Fusion Melee does not modify `fusion.general.asset` or create a separate
top-level settings repository. No App ID, API key, password, credential, or
connection token is serialized by the module.

## Prepare the network Character

Start with a Game Creator `Character` that is spawned as a Fusion
`NetworkObject`.

1. Add **Fusion Melee Network** to the same GameObject.
2. Keep the automatically required **Fusion Melee Input Contributor**.
3. Confirm Fusion Core's input pooling component is active on the local
   `NetworkRunner`.
4. Do not add another `NetworkInputData` type or a second Melee contributor to
   the same runner.

Only the object with Input Authority should submit local combat requests. State
Authority validates and stores the accepted state.

## Configure the weapon registry

Add every networked `MeleeWeapon` to **Weapons** on Fusion Melee Network.

For each entry:

* choose a unique key from `1` through `32767`
* assign the matching Melee weapon asset
* optionally assign a presentation-only model prefab

The stable numeric key crosses the network. Asset paths, instance IDs, and
ScriptableObject references do not.

{% hint style="warning" %}
Never reuse a released key for another weapon. Every client build must use the
same key-to-weapon mapping.
{% endhint %}

## Choose synchronization options

**Synchronize Equipment** lets the replicated equipment snapshot drive local
equip and unequip presentation.

**Synchronize Combo Selection** lets proxies replay the authoritative charge or
skill selection. Disable it only when your project deliberately drives all
animation from replicated Properties and Events.

## Configure hit queries

Melee Strikers can use:

* **Fusion Sphere**
* **Fusion Capsule**

Host or Server topology can query historical Fusion hit data. Shared Mode uses
the current physics scene and keeps Shared Mode's normal client-trust boundary.
Targets need collider-backed Fusion hit geometry that the Melee striker can
resolve.

## Connect resolved impacts

Your State Authority combat logic remains responsible for deciding the target,
damage, blocked, parried, or guard-broken result.

After the result is final, run **Report Authoritative Melee Impact** from the
appropriate Melee instruction list. This publishes presentation data for
animation, audio, VFX, camera, and UI. It does not apply damage.

## Upgrade or uninstall

Before an upgrade, back up the project and preserve every released weapon
registry key. Import the replacement installer, install the new module version,
let Unity compile, and repeat the two-client equipment, combat, late-join, and
reconnect checks.

Use **Game Creator → Uninstall → Fusion Melee** to uninstall the add-on. The
command moves only the Fusion Melee module folder to the operating-system Trash.
Uninstalling Fusion Core is designed to preserve the shared `Fusion/SubModules`
tree that contains add-ons.

Next, read [Authority and synchronization](concepts.md).
