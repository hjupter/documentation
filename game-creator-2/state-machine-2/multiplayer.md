---
description: Multiplayer integration with Photon Fusion and PUN2
---

# Multiplayer

State Machine 2 provides built-in support for multiplayer games using Photon Fusion or Photon PUN2.

## Requirements

To use multiplayer features, you need one of the following modules installed:

| Module | Networking Solution |
|--------|---------------------|
| [Fusion Module](../fusion-module/) | Photon Fusion |
| [Photon Module 2](../photon-module-2/) | Photon PUN2 |

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

## Photon Fusion Integration

When using the [Fusion Module](../fusion-module/), State Machine 2 integrates with Fusion's network architecture.

### Setup

1. Install **Fusion Module** for Game Creator 2
2. Install **State Machine 2**
3. Network settings automatically appear in node inspectors

### Authority

* **Input Authority**: Player-controlled state machines run on the owning client
* **State Authority**: Server-authoritative state machines run on the host

### Tick-Based Execution

Fusion's tick-based simulation ensures deterministic state machine execution across all clients.

## Photon PUN2 Integration

When using the [Photon Module 2](../photon-module-2/), State Machine 2 works with PUN2's networking.

### Setup

1. Install **Photon Module 2** for Game Creator 2
2. Install **State Machine 2**
3. Network settings automatically appear in node inspectors

### Ownership

* State machines respect PhotonView ownership
* RPCs are sent through the PhotonView component

## Common Multiplayer Patterns

### Player State Machine

For player-controlled characters:

```
Start Node [Run on Owner]
└─ Input Trigger [Run on Owner]
    └─ Movement Actions [RPC to All]
```

### AI State Machine

For server-authoritative AI:

```
Start Node [Run on Master]
└─ AI Decision [Run on Master]
    └─ AI Actions [RPC to All]
```

### Shared Game Logic

For game-wide state (lobby, match state):

```
Start Node [Run on Master]
└─ Game State Changes [RPC to All]
    └─ UI Updates [Run on All]
```

## Best Practices

### Minimize Network Traffic

* Only sync nodes that need to affect all clients
* Use **Run on Owner** for local-only logic (UI, sounds)
* Batch related actions in single nodes

### Handle Late Joins

* State machines automatically sync state to late joiners
* Ensure Start nodes handle mid-game joins gracefully
* Use variables to store persistent state

### Debugging Networked State Machines

* Use **Live Debug** to see which nodes are active
* Check the Console for network-related errors
* Test with multiple clients using ParrelSync or builds

## Troubleshooting

### Nodes Not Syncing

* Verify the networking module is installed correctly
* Check that Network Settings are configured on the node
* Ensure the PhotonView/NetworkObject is on the same GameObject

### Desync Issues

* Avoid random values in networked nodes (use seeded random)
* Ensure all clients have the same state machine asset version
* Check for race conditions in transition logic

### Performance

* Reduce the number of networked nodes
* Use **Run on Master** for heavy AI calculations
* Sync results instead of processes

## Examples

### Networked Door

```
Trigger: On Interact [Run on Owner]
└─ Action: Toggle Door State [RPC to All]
    ├─ True → Action: Open Door Animation [Run on All]
    └─ False → Action: Close Door Animation [Run on All]
```

### Synced Health Pickup

```
Trigger: On Trigger Enter [Run on Master]
└─ Condition: Is Player? [Run on Master]
    └─ True → Actions [RPC to All]:
        ├─ Add Health
        ├─ Play Sound
        └─ Destroy Pickup
```

## See Also

* [Fusion Module Documentation](../fusion-module/)
* [Photon Module 2 Documentation](../photon-module-2/)
* [Variables](variables.md) — For syncing variable data

