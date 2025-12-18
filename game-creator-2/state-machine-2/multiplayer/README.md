---
description: Multiplayer integration with Photon Fusion and PUN2
---

# Multiplayer

State Machine 2 provides built-in support for multiplayer games using Photon Fusion or Photon PUN2.

## Requirements

To use multiplayer features, you need one of the following modules installed:

| Module | Networking Solution |
|--------|---------------------|
| [Fusion Module](../../fusion-module/) | Photon Fusion |
| [Photon Module 2](../../photon-module-2/) | Photon PUN2 |

{% hint style="info" %}
The multiplayer features in State Machine 2 appear automatically when either module is detected.
{% endhint %}

## Per-Node Network Settings

Each node in a state machine can have individual networking configuration:

1. Select a node in the Graph Editor
2. Expand **Network Settings** in the Inspector
3. Configure the sync options

### Network Options

| Option | Description |
|--------|-------------|
| **Run on All** | Execute on all clients |
| **Run on Owner** | Execute only on the owning client |
| **Run on Master/Host** | Execute only on the host/master client |
| **RPC** | Send as a Remote Procedure Call |

## State Synchronization

State Machine 2 automatically handles state synchronization for networked games:

### Node State Sync

* Active node states are synchronized across clients
* Transitions are replicated to maintain consistency
* Late-joining clients receive the current state

### Variable Sync

State Machine variables can be synchronized:

1. Open the **Blackboard**
2. Select a variable
3. Enable **Network Sync** (requires Fusion/Photon Module)

