---
description: Using State Machine 2 with Photon PUN2
---

# PUN2 Integration

When using the [Photon Module 2](../../photon-module-2/), State Machine 2 works with PUN2's networking.

## Setup

1. Install **Photon Module 2** for Game Creator 2
2. Install **State Machine 2**
3. Network settings automatically appear in node inspectors

## Ownership

* State machines respect PhotonView ownership
* RPCs are sent through the PhotonView component

## PhotonView Configuration

Ensure your networked GameObjects have:

1. A **PhotonView** component
2. A **State Machine Runner** component
3. Correct ownership assigned

### Ownership Transfer

When transferring PhotonView ownership, state machines automatically respect the new owner for nodes set to **Run on Owner**.

{% hint style="warning" %}
Ensure the PhotonView and State Machine Runner are on the same GameObject for proper RPC routing.
{% endhint %}

## RPC Usage

Nodes configured with **RPC** option will:

1. Execute locally on the calling client
2. Send an RPC to all other clients
3. Execute the same node on receiving clients

## See Also

* [Photon Module 2 Documentation](../../photon-module-2/)

