# How to test a multiplayer game

## Fast iteration

Fusion's Multi-Peer Mode or an editor clone is useful while developing.
ParrelSync can run a second editor against a clone of the project. These tools
help inspect state and authority, but they do not replace release proof.

## Separate-process proof

Before release, run separate executable processes connected to the same
Photon Cloud application and region. At minimum, test:

### Shared Mode

1. Client A creates a named Shared session.
2. Client B discovers or joins it.
3. Both clients spawn exactly one Character.
4. Each owner drives movement, facing, jump, variables, and module input.
5. Transfer or request State Authority where the game permits it.
6. Join a third/late client and confirm current state is reconstructed.
7. Leave and rejoin with the same user identity.
8. Despawn and respawn the avatar without leaving stale UI or registry state.

### Host/Client

1. Process A starts Host mode.
2. Process B joins as Client.
3. Client input is read and simulated on State Authority.
4. Test prediction-sensitive movement and add-on commands under latency.
5. Confirm RPC requests are validated by the Host.
6. Exercise late join, disconnect, rejoin, scene changes, spawn, and despawn.

## Evidence to retain

Keep:

* editor/build version and dependency versions;
* separate logs for each process;
* session name, region, topology, and assigned player IDs;
* assertions for authority, Character lifecycle, variables, RPCs, and
  extension input;
* WebGL browser Console and macOS Player logs;
* build and package payload manifests.

An offline room, a single editor, or a Core-only simulated payload test is not
proof of a Photon Cloud multiplayer session.
