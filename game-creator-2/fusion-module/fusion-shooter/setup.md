---
description: Install and configure the Fusion Shooter candidate
---

# Setup

{% hint style="warning" %}
This setup targets the unreleased 1.0.0 candidate. Use a backed-up test project and the exact dependency matrix below. Do not upgrade or substitute package versions while validating the candidate.
{% endhint %}

## Requirements

Use exactly one of these Unity editors:

* `6000.0.60f1`
* `6000.3.14f1`

Install these package baselines:

| Package | Version or candidate |
| --- | --- |
| Game Creator 2 | `2.18.60` |
| Shooter | `2.2.7` |
| Photon Fusion | `2.1.1` Stable Build `2177` |
| Fusion for Game Creator 2 | `b2aa676972b0ce7f747a83bb9815f7057524e909` |
| Fusion Shooter | `1.0.0` candidate |

## Install order

1. Create or open a project in a supported Unity editor.
2. Install Game Creator 2 `2.18.60`.
3. Install Game Creator 2 Shooter `2.2.7`.
4. Install Photon Fusion `2.1.1` Stable Build `2177`.
5. Install Fusion for Game Creator 2 from the exact candidate commit.
6. Select the `Fusion.Shooter` Installer asset and choose **Tools > Ninjutsu Games > Fusion > Safe Install > Add-On...**.
7. Import the Fusion Shooter Examples package only if you want the sample.

Fusion Shooter does not include Photon Fusion, Game Creator 2, Shooter or Fusion Core payloads. Install each licensed dependency from its authorized source.

Fusion Shooter must install through Fusion Core's package-resident safe preflight. Do not use Game Creator 2's stock Install window, `GameCreator.Editor.Installs.InstallManager.Install`, or a direct `AssetDatabase.ImportPackage` call. The stock Game Creator `2.18.60` Install window bypasses Core's preflight and can accept an installed version below the declared minimum.

After every guarded import, wait for Unity compilation to finish before importing the next dependency. Resolve all Console errors before continuing.

### Shooter dependency contribution

Fusion Shooter contributes this requirement to Core's shared preflight:

| Component | Minimum | Evidence |
| --- | --- | --- |
| `GameCreator.Shooter` | `2.2.7` | `Assets/Plugins/GameCreator/Packages/Shooter/Editor/Version.txt` |

Core compares numeric major, minor and patch values and requires `installedVersion >= minimumVersion`. Missing, below-minimum, malformed, duplicate or conflicting evidence blocks installation before mutation. Equal and newer compatible versions satisfy the version comparison, although this release candidate is validated only against Shooter `2.2.7`.

## Verify the installed versions

Before configuring a scene:

1. Confirm Unity's full version in **Unity > About Unity**.
2. Confirm Game Creator 2 Core from `Assets/Plugins/GameCreator/Packages/Core/Editor/Version.txt`.
3. Confirm Shooter from `Assets/Plugins/GameCreator/Packages/Shooter/Editor/Version.txt`; the value must be at least `2.2.7`.
4. Confirm Fusion's signed package `build_info.txt` reports version `2.1.1`, Stable Build `2177`.
5. Confirm the Fusion Core source is from commit `b2aa676972b0ce7f747a83bb9815f7057524e909`.
6. Confirm Fusion Shooter's `Editor/Version.txt` reports `1.0.0`.

Do not use only Fusion's `package.json` to identify the SDK build if it conflicts with `build_info.txt`.

## Configure Fusion first

Complete the base [Fusion Module setup](../setup.md), including:

* Photon App Id and Fusion project configuration
* Session creation and shutdown flow
* Networked player spawning
* Input provision on the correct `NetworkRunner`
* Registration of every network prefab used by the scene

Fusion Shooter adds weapon input to Fusion Core's existing root input. It does not replace the root input type or create another input callback.

## Create a Shooter catalog

1. In the Project window, choose **Create > Game Creator > Fusion > Shooter Catalog**.
2. Add one entry for each networked Shooter weapon.
3. Assign a unique, non-zero **Catalog ID** and a stable authored key.
4. Assign the matching Game Creator Shooter Weapon.
5. Choose **Hitscan** or **Projectile**.
6. Configure magazine size, starting reserve, cartridges per shot, fire interval ticks, reload ticks, range and hit layers.
7. Select one damage-dispatch mode.
8. Add stable sight mappings where required.
9. Click **Validate Catalog**.

All peers must use the same catalog schema, IDs and deterministic settings. Do not derive network identity from Unity object names or list positions.

The candidate supports at most 16 catalog weapons because per-weapon ammunition snapshots have a fixed network capacity.

### Damage dispatch

Choose exactly the behavior your game needs:

* **Shooter Hit Actions** invokes the configured Shooter weapon hit flow.
* **Damage Receiver** invokes your subclass of `FusionShooterDamageReceiver`.
* **Shooter Hit Actions And Receiver** invokes both intentionally.

Do not apply the same damage a second time from a confirmed-hit visual event.

### Projectile entries

A projectile weapon also requires:

* A prefab with `NetworkObject`
* A `FusionShooterProjectile` component
* Registration as a spawnable Fusion prefab
* Projectile speed, gravity, lifetime and collision layers

Only state authority spawns and resolves the projectile.

## Configure the player prefab

On the networked Game Creator player prefab:

1. Keep the existing `NetworkObject` and Game Creator `Character`.
2. Add **Game Creator > Fusion > Shooter > Shooter Network**.
3. Assign the Shooter Catalog.
4. Assign the player Character.
5. Assign an aim-origin Transform at the real muzzle or firing origin.
6. Leave **Apply Game Creator Presentation** enabled for normal gameplay.
7. Register the finished player prefab in Fusion's prefab configuration.

The aim origin must represent the input owner's actual muzzle. A remote proxy must never substitute its own camera or crosshair.

## Configure each Shooter weapon

In the Game Creator Shooter Weapon:

1. Keep the authored Shooter animation, stance, audio and effect configuration.
2. Select **Fusion Network** as the shot implementation.
3. Make sure the same Weapon asset is assigned to its Fusion Shooter catalog entry.
4. Map every networked sight to a stable, non-zero catalog sight ID.

The Fusion Network shot submits intent. State authority still validates the equipped catalog ID, ammunition, reload phase, fire interval, aim bounds and command order.

## Configure hitscan targets

For Host or Server lag compensation, configure Fusion `HitboxRoot` and `Hitbox` components on eligible targets and include the correct layers in the weapon entry.

Shared Mode uses the firing client's current state-authority physics query and does not provide server-authoritative lag compensation.

## Add controls

Use the [Fusion Shooter visual-scripting units](visual-scripting.md) on the object that contains `FusionShooterNetwork`. Equipment, aim, trigger and reload Instructions only submit from input authority; calls made on a proxy safely do nothing.

## Candidate preflight

Before attempting multiplayer validation:

* Every peer uses the same catalog asset and schema
* All catalog IDs and stable keys are unique
* Every projectile prefab is registered with Fusion
* The player has both input and state authority according to the chosen topology
* Host/Server targets use the intended lag-compensated hitboxes
* Damage is dispatched through one deliberate boundary
* Photon credentials are stored outside source control

The available **Game Creator > Fusion > Shooter > Validate Release** command is candidate tooling. A successful source preflight is not package, build or runtime proof.
