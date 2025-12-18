---
description: Using State Machine 2 with Photon Fusion
---

# Fusion Integration

When using the [Fusion Module](../../fusion-module/), State Machine 2 integrates with Fusion's network architecture.

## Setup

1. Install **Fusion Module** for Game Creator 2
2. Install **State Machine 2**
3. Network settings automatically appear in node inspectors

## Authority

| Authority Type | Description |
|---------------|-------------|
| **Input Authority** | Player-controlled state machines run on the owning client |
| **State Authority** | Server-authoritative state machines run on the host |

## Tick-Based Execution

Fusion's tick-based simulation ensures deterministic state machine execution across all clients.

### Benefits

* Consistent behavior across all clients
* Rollback support for client-side prediction
* Smooth synchronization even with network latency

## Network Object Setup

Ensure your networked GameObjects have:

1. A **NetworkObject** component
2. A **State Machine Runner** component
3. Proper authority settings on each node

{% hint style="info" %}
For player-controlled state machines, ensure the NetworkObject has **Input Authority** assigned to the controlling player.
{% endhint %}

## See Also

* [Fusion Module Documentation](../../fusion-module/)

