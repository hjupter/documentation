---
description: Photon Fusion module for Game Creator 2
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

## Overview

Elevate your multiplayer game development with the **Fusion 2 Module for Game Creator 2**, designed to seamlessly integrate Photon Fusion's cutting-edge networking capabilities into your project.

This module ensures precise and efficient synchronization of characters, objects, and variables across all clients, delivering a smooth multiplayer experience.

{% embed url="https://youtu.be/eDtCsUxewmc" %}

{% hint style="success" %}
Play the [**Demo**](https://hjupter.itch.io/fusion-gamecreator-2) now!
{% endhint %}

---

## Architecture Overview

The Fusion module is built around four core managers that handle different aspects of multiplayer networking:

```
┌─────────────────────────────────────────────────────────────────┐
│                      Fusion Module Architecture                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │  NetworkManager  │◄───│   PlayerManager  │                   │
│  │                  │    │                  │                   │
│  │ • Session/Lobby  │    │ • Player Tracking│                   │
│  │ • Connection     │    │ • Avatar Spawning│                   │
│  │ • Host Migration │    │ • Join/Leave     │                   │
│  └────────┬─────────┘    └──────────────────┘                   │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │NetworkDataManager│    │ NetworkCharacter │                   │
│  │                  │    │                  │                   │
│  │ • Tick Timers    │    │ • Movement Sync  │                   │
│  │ • Shared Data    │    │ • State Sync     │                   │
│  │ • Random Seeds   │    │ • Attachments    │                   │
│  └──────────────────┘    └──────────────────┘                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Core Components

| Component | Purpose |
|-----------|---------|
| **NetworkManager** | Orchestrates session lifecycle, lobby management, and Fusion callbacks |
| **PlayerManager** | Tracks players/avatars, manages join/leave events and spawn data |
| **NetworkDataManager** | Handles networked data persistence, tick timers, and shared state |
| **NetworkCharacter** | Synchronizes character movement, rotation, attachments, and models |

---

## Key Features

### Character Synchronization
- **Complete Character Sync**: Movement, rotation, jumping, and ragdoll state
- **All Controller Types**: Works with NavMesh, Tank, Rigidbody, and custom controllers
- **Attachment Sync**: Weapons, gear, and cosmetics automatically replicated
- **Model Changes**: Character model/skin swapping synchronized across network

### Visual Scripting Integration
- **30+ Instructions**: Spawn, despawn, RPC calls, session management, and more
- **22+ Conditions**: Authority checks, connection status, session state queries
- **27+ Events**: Player join/leave, authority changes, session lifecycle callbacks
- **77+ Properties**: Access ping, usernames, session data, and network state

### Networking Features
- **All Topologies**: Shared Mode, Host Mode, and Dedicated Server support
- **Room Chat**: Built-in chat with floating bubbles and profanity filter
- **Region Selection**: Automatic best region detection with ping display
- **Variable Sync**: Replicate Local and Global variables across network

### Developer Experience
- **Ready-to-Use UI**: Session browser, region dropdown, chat components
- **Fail-Safe System**: Configurable protection against common runtime errors
- **Extensive Demos**: Multiple example scenes demonstrating features
- **Full GC2 Compatibility**: Works with all Game Creator 2 modules

---

## Network Topologies

The Fusion module supports all Photon Fusion 2 topologies:

| Topology | Description | Best For |
|----------|-------------|----------|
| **Shared Mode** | Peer-to-peer with distributed authority | Casual games, small sessions |
| **Host Mode** | Listen server (host is also a player) | Mid-size games, competitive |
| **Dedicated Server** | Headless server, no local player | Large-scale, competitive games |

{% hint style="info" %}
All visual scripting components work across all topologies. Use conditions like **Is Host** or **Is Dedicated Server** to implement topology-specific logic.
{% endhint %}

---

## Session Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Lobby     │────▶│  Connecting │────▶│   Playing   │
│             │     │             │     │             │
│ • Browse    │     │ • Join/Host │     │ • Spawned   │
│ • Regions   │     │ • Load Scene│     │ • Syncing   │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                    ┌─────────────┐             │
                    │  Shutdown   │◀────────────┘
                    │             │
                    │ • Cleanup   │
                    │ • Reasons   │
                    └─────────────┘
```

### Key Events

| Phase | Events Fired |
|-------|--------------|
| **Starting** | On Lobby Starting, On Game Starting |
| **Connected** | On Lobby Started, On Game Started, On Connected Server |
| **Scene Load** | On Scene Load Start, On Scene Load Done |
| **Players** | On Player Joined, On Player Spawned, On Player Left |
| **Shutdown** | On Disconnected From Server, On Shutdown |

---

## Sub-Modules

Extend the Fusion module with additional networking capabilities:

| Module | Description |
|--------|-------------|
| [**Fusion Stats**](fusion-stats/) | Synchronize traits, attributes, and status effects |
| [**Fusion Inventory**](fusion-inventory/) | Replicate inventory and equipment |
| [**Fusion Melee**](fusion-melee/) | Network melee combat synchronization |
| [**Fusion Shooter**](fusion-shooter/) | Network shooter mechanics |
| [**Fusion Abilities**](fusion-abilities/) | Synchronize ability systems |
| [**Fusion Factions**](fusion-factions/) | Replicate faction relationships |

---

## Quick Start

1. **Install Prerequisites**: Game Creator 2 and Photon Fusion SDK
2. **Import Module**: Install via Package Manager
3. **Configure Fusion**: Set up your Photon App ID
4. **Add NetworkCharacter**: Attach to your player prefab
5. **Start Session**: Use the **Start Game** instruction

{% hint style="success" %}
Check the [Setup Guide](setup.md) for detailed installation steps.
{% endhint %}

---

## Requirements

| Requirement | Version |
|-------------|---------|
| Unity | 6000.0.0+ (Unity 6) |
| Game Creator 2 | 2.18.58+ |
| Photon Fusion SDK | 2.0.0+ |

---

## Resources

- [**Documentation**](https://docs.ninjutsugames.com/game-creator-2/fusion-module)
- [**Demo**](https://hjupter.itch.io/fusion-gamecreator-2)
- [**Photon Fusion Docs**](https://doc.photonengine.com/fusion/v2/)
- [**Discord Support**](https://discord.ninjutsugames.com)

{% hint style="info" %}
All instructions and conditions are compatible with other Game Creator 2 modules.
{% endhint %}
