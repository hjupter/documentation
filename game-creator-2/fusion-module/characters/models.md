---
description: Synchronizing character models and skins across the network
---

# Models

## Overview

Model synchronization allows players to see each other's character appearances correctly. When a player changes their character skin or model, all other players see the new appearance.

---

## How It Works

```
┌─────────────────────────────────────────────────────┐
│                  Model Sync Flow                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│   Player A selects new model                         │
│        │                                             │
│        ▼                                             │
│   ┌─────────────────────┐                           │
│   │ LocalListVariables  │                           │
│   │ Network (Models)    │                           │
│   └──────────┬──────────┘                           │
│              │                                       │
│              │ Model ID synced                       │
│              ▼                                       │
│   ┌─────────────────────┐                           │
│   │ All Clients         │                           │
│   │ Load & display model│                           │
│   └─────────────────────┘                           │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## Setup

### Step 1: Create Model List

1. Create a **Local List Variables** asset for models
2. Add your model prefabs or Model Config entries

### Step 2: Add Network Component

1. Add **Local List Variables Network** to your character
2. Assign the model list variable
3. Set **Sync Mode** to **Models**

<figure><img src="../../../.gitbook/assets/image (132).png" alt=""><figcaption><p>Models sync mode configuration</p></figcaption></figure>

### Step 3: Configure Prefab

```
Character Prefab:
├── Character (GC2)
├── NetworkObject
├── NetworkCharacter
├── Local List Variables (Models)
└── Local List Variables Network
    └── Sync Mode: Models ✓
```

---

## Usage

### Changing Models

Use the standard **Change Model** instruction:

```
Event: On Model Selected
└── Instructions:
    └── Change Model
        ├── Character: {Self}
        └── Model: {Selected Model Prefab}
```

<figure><img src="../../../.gitbook/assets/image (134).png" alt=""><figcaption><p>Using Change Model instruction</p></figcaption></figure>

### Model Selection UI

```
Event: On Character Selection Screen
└── For Each: Model in Model List
    └── Create Button
        ├── Icon: {Model Sprite}
        ├── Name: {Model Name}
        └── On Click: Change Model
```

---

## Model Config Variable Type

The Fusion module adds a special **Model Config** variable type for organized model data:

<figure><img src="../../../.gitbook/assets/image (133).png" alt=""><figcaption><p>Model Config variable type</p></figcaption></figure>

### Fields

| Field | Type | Description |
|-------|------|-------------|
| **Name** | String | Display name for UI |
| **Prefab** | GameObject | The model prefab |
| **Sprite** | Sprite | Icon for selection UI |

### Using Model Config

```
Event: On Create Character Select Grid
└── For Each: Config in Model Configs
    └── Create Selection Button
        ├── Text: {Config.Name}
        ├── Image: {Config.Sprite}
        └── On Click:
            └── Change Model: {Config.Prefab}
```

---

## Model Properties

Access model data via property getters:

| Property | Type | Description |
|----------|------|-------------|
| **Model Prefab** | GameObject | Prefab from list by index |
| **Model Name** | String | Name from config |
| **Model Prefab Name** | String | Prefab asset name |
| **Selected Model** | String | Currently selected model ID |
| **Model Sprite** | Sprite | Sprite from config |
| **Selected Model Sprite** | Sprite | Current model's sprite |

### Example: Display Current Model

```
Event: On UI Update
└── Instructions:
    └── Set Text: {Selected Model Name}
    └── Set Image: {Selected Model Sprite}
```

---

## Addressable Models

For games with many character options, use Unity Addressables to reduce memory:

### Setup

1. Mark model prefabs as Addressable
2. Use **Register Character Models** at runtime

### Registration

```
Event: On Game Started
└── Instructions:
    └── Register Character Models
        └── Models List: [Addressable References]
```

### Benefits

| Benefit | Description |
|---------|-------------|
| Reduced load time | Models load on-demand |
| Lower memory | Only loaded models in memory |
| DLC support | Add models without rebuild |
| Smaller build | Initial package smaller |

---

## Character Selection Screen

### Complete Setup

```
Scene Structure:
├── Character Selection Manager
│   └── Model List Variable (with all models)
├── Preview Character
│   └── Displays selected model
├── Model Grid UI
│   └── Buttons for each model
└── Confirm Button
    └── Saves selection and proceeds

Event Flow:
1. Load available models
2. Display grid with previews
3. Player selects model
4. Update preview character
5. On confirm, save selection
6. Proceed to lobby/game
```

### Persistent Selection

```
Event: On Model Confirmed
└── Instructions:
    ├── Save to Player Prefs: Selected Model ID
    └── Set Network Variable: Model Selection
```

### Load on Join

```
Event: On Player Spawned
└── Condition: Is Local Player
    └── Instructions:
        └── Load From Player Prefs: Selected Model
        └── Change Model: {Loaded Model}
```

---

## Multiple Model Categories

### Body + Accessories

```
Model Categories:
├── Body Type (base character)
├── Hairstyle
├── Outfit
└── Accessories

Each category:
├── Separate List Variable
├── Separate sync mode
└── Combined on character
```

### Layer System

```
Character Model Layers:
├── Layer 0: Base Body
├── Layer 1: Clothing
├── Layer 2: Armor
└── Layer 3: Accessories
```

---

## Performance Considerations

### Optimization Tips

| Tip | Reason |
|-----|--------|
| Use LODs | Reduce poly count at distance |
| Share materials | Reduce draw calls |
| Pool models | Avoid instantiate overhead |
| Limit variants | Less memory, faster load |

### Recommended Limits

| Aspect | Suggestion |
|--------|------------|
| Unique models | 10-20 for selection |
| Polygons per model | Based on target platform |
| Textures | Use atlases where possible |

---

## Common Patterns

### Random Model on Spawn

```
Event: On Player Spawned (NPC)
└── Condition: Has State Authority
    └── Instructions:
        └── Change Model
            └── Model: Random from List
```

### Model Based on Team

```
Event: On Team Assigned
└── Instructions:
    └── Condition Branch
        ├── Team A → Change Model: {Team A Model}
        └── Team B → Change Model: {Team B Model}
```

### Unlockable Models

```
Event: On Achievement Unlocked
└── Instructions:
    └── Unlock Model
        └── Model: {Achievement Reward Model}

Event: On Character Selection
└── For Each: Model in List
    └── Condition: Is Model Unlocked
        ├── Yes → Show enabled
        └── No → Show locked
```

---

## Troubleshooting

### Model not changing on remote clients

1. Verify model is in the list variable
2. Check sync mode is set to "Models"
3. Ensure model prefab has NetworkObject
4. Verify registration completed

### Wrong model displayed

1. Check model index matches expected
2. Verify list order is consistent
3. Ensure model swap completed before sync

### Addressable models not loading

1. Verify Addressables are built
2. Check registration happened before use
3. Ensure proper async loading handling

---

## Related Documentation

- [Characters](README.md) - NetworkCharacter overview
- [Attachments](attachments.md) - Equipment sync
- [User Interface](../user-interface.md) - Selection UI components
- [Troubleshooting](../guides/troubleshooting.md) - Common issues
