---
description: >-
  Complete guide to installing and configuring the Fusion module for Game Creator 2.
---

# Setup

## Prerequisites

Before installing the **Fusion** module, ensure you have:

| Requirement | Description |
|-------------|-------------|
| **Unity 6** | Version 6000.0.0 or higher |
| **Game Creator 2** | [Asset Store](https://assetstore.unity.com/packages/tools/game-toolkits/game-creator-2-203069) |
| **Photon Fusion SDK** | [Asset Store](https://assetstore.unity.com/packages/tools/network/photon-fusion-267958) |

{% hint style="warning" %}
**Game Creator 2** and **Photon Fusion SDK** must be imported before installing the Fusion module.
{% endhint %}

---

## Step 1: Install Photon Fusion SDK

1. Import Photon Fusion from the Asset Store
2. Open **Fusion > Fusion Hub** from the Unity menu
3. Create a Photon account or sign in
4. Create a new **Fusion App** in your dashboard
5. Copy the **App ID** and paste it in the Fusion Hub

{% hint style="info" %}
Follow the official [Photon Fusion Getting Started Guide](https://doc.photonengine.com/fusion/current/tutorials/shared-mode-basics/1-getting-started) for detailed Photon setup.
{% endhint %}

---

## Step 2: Install Fusion Module

1. Purchase the [**Fusion Module**](https://u3d.as/2Cws) from the Asset Store
2. Open **Window → Package Manager**
3. Search for "Fusion" in your assets
4. Click **Download** and then **Import**
5. Wait for Unity to compile

---

## Step 3: Install Examples (Recommended)

The module includes example scenes and UI prefabs to help you get started.

1. Open **Game Creator → Install** from the toolbar
2. In the Installer window, find the Fusion section
3. Click **Install** next to:
   - **Examples**: Demo scenes with various use cases
   - **UI**: Ready-to-use interface components

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption><p>Game Creator Installer Window</p></figcaption></figure>

{% hint style="success" %}
Installing **Examples** automatically includes all dependencies.
{% endhint %}

Once installed, navigate to:
```
Plugins/GameCreator/Installs/Fusion.Examples/
```

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption><p>Example scenes location</p></figcaption></figure>

---

## Step 4: Configure Fusion Settings

Open **Game Creator → Fusion → Settings** to configure the module:

### General Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Default Player Name** | Name format for unnamed players | `Player {0}` |
| **Pool Size** | Default pool size for network objects | `10` |
| **Enable Pooling** | Toggle object pooling | `true` |
| **Custom Runner Prefab** | Optional custom NetworkRunner prefab | `null` |

### Session Code Generator

Configure human-readable session codes for easy sharing:

| Setting | Description |
|---------|-------------|
| **Word List** | Words used for code generation |
| **Separator** | Character between words |
| **Word Count** | Number of words in generated code |

### Regions

Enable or disable Photon regions:

- **US East** (us)
- **US West** (usw)
- **Europe** (eu)
- **Asia** (asia)
- **Japan** (jp)
- **South America** (sa)
- **South Korea** (kr)
- **Australia** (au)

{% hint style="info" %}
Disabled regions won't appear in the Region Dropdown UI.
{% endhint %}

### Fail-Safe System

Configure runtime protection against common errors:

| Setting | Description | Default |
|---------|-------------|---------|
| **Enabled** | Toggle fail-safe protection | `true` |
| **Close Error Threshold** | Errors before closing session | `20` |
| **Shutdown Error Threshold** | Errors before forced shutdown | `50` |
| **Error Time Window** | Time window for error counting (seconds) | `60` |

### Error Messages

Customize user-facing error messages for shutdown reasons:

| Reason | Default Message |
|--------|-----------------|
| `GameNotFound` | "Session no longer exists" |
| `GameIsFull` | "Session is full" |
| `ConnectionTimeout` | "Connection timed out" |

---

## Step 5: Create Your First Networked Character

### Basic Setup

1. Create or select your player prefab
2. Ensure it has a **Character** component (Game Creator 2)
3. Add a **Network Character** component
4. Required components are added automatically:
   - NetworkObject
   - NetworkTransform
   - NetworkMecanimAnimator

<figure><img src="../../.gitbook/assets/network-character-ezgif.com-optimize.gif" alt=""><figcaption><p>Adding Network Character component</p></figcaption></figure>

### Register as Network Prefab

1. Select your player prefab
2. In the NetworkObject component, click **Register Prefab**
3. Or drag to the Fusion **NetworkPrefabAssetSource** list

---

## Step 6: Create a Basic Session Flow

### Start Session Trigger

Create a trigger to start a network session:

```
Trigger: On Button Click
└── Instructions:
    └── Start Game
        ├── Game Mode: Shared
        ├── Session Name: "MyGame"
        └── Scene: "GameScene"
```

### Spawn Player on Scene Load

Create a trigger to spawn the player when the scene loads:

```
Trigger: On Scene Load Done (Fusion Event)
└── Instructions:
    └── Spawn Player
        ├── Prefab: [Your Player Prefab]
        └── Position: [Spawn Point Transform]
```

---

## Project Structure

After installation, your project should have:

```
Assets/
├── Plugins/
│   └── GameCreator/
│       └── Installs/
│           ├── Fusion.Examples/    # Demo scenes
│           └── Fusion.UI/          # UI prefabs
└── Photon/
    └── Fusion/                     # Fusion SDK
```

---

## Verification Checklist

Ensure everything is set up correctly:

- [ ] Photon Fusion SDK imported
- [ ] Photon App ID configured in Fusion Hub
- [ ] Fusion Module imported
- [ ] Examples installed (optional but recommended)
- [ ] Fusion Settings configured
- [ ] Player prefab has NetworkCharacter component
- [ ] Player prefab registered as network prefab

---

## Next Steps

- [**Sessions**](sessions.md) - Learn about session management
- [**Characters**](characters.md) - Deep dive into NetworkCharacter
- [**Variables**](variables.md) - Synchronize game data
- [**Visual Scripting**](visual-scripting/) - Explore available components

{% hint style="success" %}
Run one of the example scenes to verify your setup works correctly before building your own game.
{% endhint %}
