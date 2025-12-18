---
description: Fixing common multiplayer issues
---

# Troubleshooting

Solutions to common problems with networked state machines.

## Nodes Not Syncing

**Problem**: Nodes don't execute on other clients.

**Checklist**:
* Verify the networking module is installed correctly
* Check that Network Settings are configured on the node
* Ensure the PhotonView/NetworkObject is on the same GameObject
* Verify the client is connected to the network

## Desync Issues

**Problem**: Clients show different states.

**Causes**:
* Non-deterministic logic (random values, time-based conditions)
* Different state machine asset versions
* Race conditions in transition logic

**Solutions**:
* Use seeded random with a synced seed
* Ensure all clients have the same asset version
* Add proper synchronization points

## Late Join Issues

**Problem**: Players joining mid-game have incorrect state.

**Solutions**:
* Store important state in synced variables
* Use the current node state, not transition history
* Initialize UI based on current variable values

## Performance Problems

**Problem**: Game slows down with many networked state machines.

**Solutions**:
* Reduce the number of networked nodes
* Use **Run on Master** for heavy AI calculations
* Sync results instead of processes
* Batch actions into fewer nodes

## RPC Errors

**Problem**: "RPC target not found" or similar errors.

**Causes**:
* PhotonView/NetworkObject not properly set up
* Target client disconnected
* Incorrect authority settings

**Solutions**:
* Verify network components are on the same GameObject
* Add null checks for disconnected clients
* Review authority configuration

## Network Settings Not Appearing

**Problem**: Can't see network settings in node inspector.

**Solutions**:
* Verify Fusion Module or Photon Module 2 is installed
* Restart Unity after installing the module
* Check for console errors during import

## Ownership Issues

**Problem**: Nodes running on wrong client.

**Checklist**:
* Verify PhotonView ownership is correct
* Check NetworkObject authority settings
* Ensure **Run on Owner** is set for player-specific logic

