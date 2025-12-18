---
description: Visual scripting components for Fusion networking in Game Creator 2
---

# Visual Scripting

The Fusion Module provides a comprehensive set of visual scripting components that integrate seamlessly with Game Creator 2's visual scripting system. These components allow you to build multiplayer games without writing code.

## Overview

| Component Type | Count | Description |
|----------------|-------|-------------|
| **Instructions** | 30 | Actions to perform network operations |
| **Conditions** | 22 | Check network states and properties |
| **Events** | 27 | React to network events |
| **Properties** | 77+ | Access network data in your logic |

## Categories

The visual scripting components are organized into the following categories:

### Network Object
Components for spawning, despawning, and managing networked objects including authority control.

### Session
Session management including starting games, joining lobbies, and controlling session visibility.

### Player
Player lifecycle events and properties like username, ping, and player state.

### Lobby
Lobby-specific operations for matchmaking and session discovery.

### Visual Scripting (RPC)
Remote Procedure Call system for running triggers, actions, and conditions across the network.

### Network Character
Properties specific to networked characters including movement, death, and control states.

### Tick Timer
Network-synchronized timers for game logic.

## Quick Start

### Spawning a Player

1. Add a **Trigger** with the event **On Game Started**
2. Add the instruction **Spawn Player**
3. Configure the prefab, position, and rotation

### Running Instructions on All Clients

1. Create an **Actions** asset with a **NetworkObject** component
2. Use the **RPC Actions** instruction to run it on all clients
3. Configure the target (All, Proxies, Input Authority, or State Authority)

### Checking Authority

Use these conditions before performing authoritative operations:
- **Has State Authority** - For state modifications
- **Has Input Authority** - For input-driven actions
- **Is Host** - For host-only operations
- **Is Server** - For server-only operations

{% hint style="info" %}
All RPC-related components require a **NetworkObject** component attached to the same GameObject.
{% endhint %}
