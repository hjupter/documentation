---
description: State Machine and Runner Variables
---

# Variables

State Machine 2 introduces two types of variables that integrate with Game Creator 2's visual scripting system.

{% hint style="success" %}
All variables can be created from the State Machine Asset, State Machine Runner, or the Blackboard in the Graph Editor.
{% endhint %}

## Variable Types

| Type | Scope | Use Case |
|------|-------|----------|
| **State Machine Variables** | Asset-level (global) | Shared state across all runners |
| **Runner Variables** | Instance-level (per runner) | Unique state per GameObject |

## State Machine Variables

These variables are stored in the State Machine Asset itself. All runners using the same asset share these values.

<figure><img src="../../.gitbook/assets/image (66).png" alt=""><figcaption><p>State Machine Variables in the Blackboard</p></figcaption></figure>

### Use Cases

* Global game settings
* Shared configuration values
* Default values for all instances

### Behavior

* Changes affect all runners using the asset
* Values persist between play sessions (stored in asset)
* Reset when asset is reimported

{% hint style="warning" %}
Be careful when modifying State Machine Variables during runtime - changes will affect all active runners.
{% endhint %}

## State Machine Runner Variables

These variables are instance-specific. Each runner maintains its own copy with independent values.

<figure><img src="../../.gitbook/assets/image (109).png" alt=""><figcaption><p>Runner Variables in the Inspector</p></figcaption></figure>

### Use Cases

* Character-specific state (health, mana, ammo)
* Individual object behavior
* Per-instance configuration

### Behavior

* Each runner has independent values
* Values are initialized from the State Machine Asset
* Changes don't affect other runners

## Creating Variables

### From the Blackboard

1. Open the Graph Editor
2. Click **+** in the Blackboard panel
3. Choose the variable type
4. Name your variable

### From the Inspector

1. Select the State Machine Asset or Runner
2. Expand the Variables section
3. Click **Add Variable**
4. Configure the variable type and name

## Supported Types

| Type | Description |
|------|-------------|
| **Bool** | True/false values |
| **Integer** | Whole numbers |
| **Float** | Decimal numbers |
| **String** | Text values |
| **Color** | RGBA color values |
| **Vector2** | 2D coordinates |
| **Vector3** | 3D coordinates/positions |
| **GameObject** | Reference to a GameObject |
| **Sprite** | Reference to a Sprite |
| **Texture** | Reference to a Texture |
| **Material** | Reference to a Material |
| **Animation Clip** | Reference to an Animation Clip |
| **Audio Clip** | Reference to an Audio Clip |
| **Game Object List** | List of GameObjects |

## Using Variables in Nodes

Variables can be accessed directly in node properties:

1. Click on a property field
2. Select **Variables → State Machine** or **Variables → Runner**
3. Choose the variable

## Accessing Variables via Visual Scripting

Use the [Properties](visual-scripting/properties/README.md) system to read and write variables from any Game Creator 2 instruction or condition.

## Network Synchronization

When using multiplayer modules (Fusion or Photon):

1. Select a variable in the Blackboard
2. Enable **Network Sync**
3. The variable value syncs across all clients

{% hint style="info" %}
Only Runner Variables can be synced per-instance. State Machine Variables sync globally.
{% endhint %}

## Best Practices

### Use Runner Variables for Gameplay

Most gameplay values should be Runner Variables:
* Health, mana, stamina
* Inventory counts
* Quest progress
* Character state

### Use Asset Variables for Defaults

Asset Variables work well for:
* Default configuration
* Shared constants
* Initial values (copied to runners)

### Name Consistently

Use clear, descriptive names:
* `PlayerHealth` (good)
* `h` (bad)
* `EnemyChaseSpeed` (good)
* `speed` (ambiguous)

