---
description: Read and write State Machine variables from anywhere
---

# Properties

Properties allow you to read and write State Machine variables from anywhere in Game Creator 2's visual scripting system.

## Get Properties

Read values from State Machine or Runner variables. Available in any Game Creator 2 property field.

| Type | Asset | Runner | Description |
|------|:-----:|:------:|-------------|
| **Animation Clip** | ✓ | ✓ | Get an animation clip reference |
| **Audio Clip** | ✓ | ✓ | Get an audio clip reference |
| **Bool** | ✓ | ✓ | Get a boolean (true/false) value |
| **Color** | ✓ | ✓ | Get a color value (RGBA) |
| **Decimal** | ✓ | ✓ | Get a decimal number value |
| **Direction** | ✓ | ✓ | Get a direction vector |
| **GameObject** | ✓ | ✓ | Get a GameObject reference |
| **Material** | ✓ | ✓ | Get a material reference |
| **Position** | ✓ | ✓ | Get a world position (Vector3) |
| **Rotation** | ✓ | ✓ | Get a rotation value (Quaternion/Euler) |
| **Scale** | ✓ | ✓ | Get a scale vector |
| **Sprite** | ✓ | ✓ | Get a sprite reference |
| **String** | ✓ | ✓ | Get a text string value |
| **Texture** | ✓ | ✓ | Get a texture reference |

## Set Properties

Write values to State Machine or Runner variables. Available in Game Creator 2 Set property actions.

| Type | Asset | Runner | Description |
|------|:-----:|:------:|-------------|
| **Animation Clip** | ✓ | ✓ | Set an animation clip reference |
| **Bool** | ✓ | ✓ | Set a boolean (true/false) value |
| **Color** | ✓ | ✓ | Set a color value (RGBA) |
| **Float** | ✓ | ✓ | Set a floating-point number |
| **GameObject** | ✓ | ✓ | Set a GameObject reference |
| **Material** | ✓ | ✓ | Set a material reference |
| **Sprite** | ✓ | ✓ | Set a sprite reference |
| **String** | ✓ | ✓ | Set a text string value |
| **Texture** | ✓ | ✓ | Set a texture reference |
| **Vector3** | ✓ | ✓ | Set a 3D vector (position/direction/scale) |

## How to Use Properties

1. In any Game Creator 2 action that accepts a property value, click the property dropdown
2. Navigate to **Variables → State Machine** or **Variables → State Machine Runner**
3. Select the variable you want to read or write
4. For Runner properties, also specify the target GameObject

## Usage Examples

### Reading a Variable

```
Action: Set Text
└─ Text: [Property] Variables → State Machine Runner Variable
    ├─ Variable: "PlayerName"
    └─ Runner: Self
```

### Writing a Variable

```
Action: Change Material Color
└─ Color: [Property] Variables → State Machine Variable
    └─ Variable: "HighlightColor"
```

## Asset vs Runner Properties

| Use Case | Use Asset | Use Runner |
|----------|:---------:|:----------:|
| Shared state across all instances | ✓ | |
| Per-instance behavior (each enemy has own state) | | ✓ |
| Global game state (game mode, settings) | ✓ | |
| Individual character state (health, ammo) | | ✓ |
| Prefab-based objects | | ✓ |
| Singleton managers | ✓ | |

{% hint style="info" %}
**Best Practice**: Use **Runner** properties for most gameplay scenarios. Use **Asset** properties only for truly global state that should be shared across all instances.
{% endhint %}

## Special Properties

### GameObject List

In addition to single GameObject properties, State Machine 2 supports **GameObject List** properties for working with collections of objects.

| Property | Description |
|----------|-------------|
| **Get GameObject List** | Read a list of GameObjects from a State Machine variable |
| **Set GameObject List** | Write a list of GameObjects to a State Machine variable |

### State Machine Instance

Get a reference to the State Machine Runner's instance GameObject:

| Property | Description |
|----------|-------------|
| **Get Instance** | Returns the GameObject that the State Machine Runner is attached to |

{% hint style="success" %}
Use the Instance property when you need to reference the runner's GameObject from within the state machine logic.
{% endhint %}
