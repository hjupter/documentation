---
description: Complete configuration reference for the Fusion module settings
---

# Settings

## Overview

The Fusion Settings panel provides centralized configuration for all module features. Access it via **Game Creator → Fusion → Settings** in Unity's menu.

<figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption><p>Fusion Module Settings</p></figcaption></figure>

---

## General Settings

### Default Player Name

The name format used when players don't have a username set.

| Setting | Type | Default |
|---------|------|---------|
| **Default Player Name** | String | `Player {0}` |

The `{0}` placeholder is replaced with a unique identifier (e.g., "Player 1", "Player 2").

### Pooling Configuration

Object pooling improves performance by reusing network objects instead of instantiating new ones.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Enable Pooling** | Boolean | `true` | Toggle the pooling system |
| **Pool Size** | Integer | `10` | Default pool size per prefab |

{% hint style="success" %}
Pooling is recommended for games with frequent spawning/despawning (projectiles, effects, NPCs).
{% endhint %}

### Custom Network Runner

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Custom Runner Prefab** | GameObject | `null` | Optional custom NetworkRunner prefab |

Use this to provide a preconfigured NetworkRunner with custom settings, additional components, or modified behavior.

---

## Session Code Generator

Generate human-readable codes for easy session sharing between players.

<figure><img src="../../.gitbook/assets/session-code-settings.png" alt=""><figcaption><p>Session Code Generator settings</p></figcaption></figure>

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Word List** | TextAsset | Built-in | Words used for code generation |
| **Separator** | String | `-` | Character between words |
| **Word Count** | Integer | `3` | Number of words in generated code |

### Example Generated Codes

```
Word Count: 2 → "swift-tiger"
Word Count: 3 → "brave-cosmic-eagle"
Word Count: 4 → "ancient-crystal-moon-knight"
```

### Using Session Codes

**Generate a Code:**
```
Instructions:
└── Set Local Variable: SessionCode = {Generated Session Code}
```

**Display the Code:**
```
UI Text: {Session Code}
```

---

## Regions

Configure which Photon regions are available to players.

| Region | Code | Location |
|--------|------|----------|
| **US East** | `us` | Washington, D.C. |
| **US West** | `usw` | San José |
| **Europe** | `eu` | Amsterdam |
| **Asia** | `asia` | Singapore |
| **Japan** | `jp` | Tokyo |
| **South America** | `sa` | São Paulo |
| **South Korea** | `kr` | Seoul |
| **Australia** | `au` | Melbourne |

### Enabling/Disabling Regions

- Check/uncheck regions to control availability
- Disabled regions won't appear in Region Dropdown UI
- Players can only connect to enabled regions

{% hint style="info" %}
Disable regions where you don't expect players to reduce matchmaking fragmentation.
{% endhint %}

### Region Selection Flow

```
┌─────────────────────────────────────────────────┐
│              Region Selection                    │
├─────────────────────────────────────────────────┤
│                                                  │
│   Settings: Enable regions                       │
│        │                                         │
│        ▼                                         │
│   RegionDropdownUI: Display to player            │
│        │                                         │
│        ▼                                         │
│   Player selects region                          │
│        │                                         │
│        ▼                                         │
│   Selection saved to PlayerPrefs                 │
│        │                                         │
│        ▼                                         │
│   Start Game uses selected region                │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Fail-Safe System

Runtime protection against common networking errors that could crash or destabilize your game.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Enabled** | Boolean | `true` | Toggle fail-safe protection |
| **Close Error Threshold** | Integer | `20` | Errors before gracefully closing session |
| **Shutdown Error Threshold** | Integer | `50` | Errors before forcing shutdown |
| **Error Time Window** | Float | `60` | Time window (seconds) for error counting |

### How It Works

1. Errors are tracked within the time window
2. When **Close Threshold** is reached:
   - Attempt graceful session closure
   - Log warning to console
3. When **Shutdown Threshold** is reached:
   - Force immediate shutdown
   - Prevent further damage

### Error Categories Monitored

- Network exceptions
- Serialization errors
- Authority violations
- Invalid state transitions
- RPC failures

{% hint style="warning" %}
Disabling fail-safe is not recommended for production builds. Only disable for debugging specific issues.
{% endhint %}

---

## Error Messages

Customize user-facing messages for different shutdown/failure scenarios.

| Shutdown Reason | Default Message | When Shown |
|-----------------|-----------------|------------|
| `Ok` | "Disconnected" | Normal shutdown |
| `Error` | "An error occurred" | Internal error |
| `GameNotFound` | "Session no longer exists" | Session closed/expired |
| `GameIsFull` | "Session is full" | Max players reached |
| `ConnectionTimeout` | "Connection timed out" | Network timeout |
| `Kicked` | "You were kicked" | Removed by host |
| `InvalidRegion` | "Invalid region" | Region unavailable |
| `ConnectionRefused` | "Connection refused" | Server rejected |
| `GameClosed` | "Game has ended" | Host closed session |
| `GameAlreadyExists` | "Session name in use" | Duplicate session name |
| `InvalidSession` | "Invalid session" | Corrupted session data |
| `MaxCcuReached` | "Server capacity reached" | Photon CCU limit |
| `PhotonCloudTimeout` | "Cloud timeout" | Photon service timeout |

### Customizing Messages

1. Expand the **Error Messages** section
2. Modify the message for each shutdown reason
3. Use the **Reset** button to restore defaults

### Displaying Error Messages

```
Trigger: On Shutdown
└── Instructions:
    └── Show UI Text: {Shutdown Reason Message}
```

---

## Debug Settings

Enable additional logging and visualization for development.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Debug Mode** | Boolean | `false` | Enable verbose logging |
| **Show Network Stats** | Boolean | `false` | Display RTT, packet loss |
| **Log RPC Calls** | Boolean | `false` | Log all RPC traffic |

### Debug Console Output

When Debug Mode is enabled:
- Session connect/disconnect events
- Player join/leave events
- Authority changes
- Variable synchronization
- RPC calls and responses

{% hint style="info" %}
Disable debug settings in production builds to improve performance.
{% endhint %}

---

## Configuration Best Practices

### For Development

```
Pooling: Enabled (test with real-world scenarios)
Fail-Safe: Enabled (catch issues early)
Debug Mode: Enabled (verbose logging)
Regions: Enable only one (faster testing)
```

### For Production

```
Pooling: Enabled (essential for performance)
Fail-Safe: Enabled (protect against crashes)
Debug Mode: Disabled (reduce overhead)
Regions: Enable based on player base
Error Messages: Customize for UX
```

### For Testing

```
Pooling: Can disable for debugging
Fail-Safe: Can disable to see raw errors
Debug Mode: Enabled
Regions: Use local region only
```

---

## Accessing Settings via Code

Settings can be accessed at runtime through the `FusionCoreSettings` singleton:

```
Property Getters:
├── Default Player Name → {Fusion Setting: Default Player Name}
├── Pool Size → {Fusion Setting: Pool Size}
└── Pooling Enabled → {Fusion Setting: Pooling Enabled}
```

---

## Related Documentation

- [Setup Guide](setup.md) - Initial configuration
- [Sessions](sessions.md) - Using regions and session codes
- [User Interface](user-interface.md) - Region dropdown UI
- [Troubleshooting](guides/troubleshooting.md) - Common issues
