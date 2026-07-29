# Characters

## Network Character

Add **Network Character** to a Game Creator Character prefab that also has a
Fusion `NetworkObject`. The inspector adds and configures the required Fusion
behaviours.

Network Character synchronizes:

* movement input, facing, and jump state;
* alive/dead and ragdoll state;
* selected model;
* registered props and attachments;
* look target;
* player identity and ping surfaces used by the UI.

Game Creator controllers such as directional, point-and-click, NavMesh, tank,
or Rigidbody can use the same Network Character bridge. The controller still
needs an authority-safe gameplay design.

## Shared Mode

The peer with State Authority drives the Character. Remote peers render the
replicated result. If ownership can move between peers, enable
`Allow State Authority Override` on the `NetworkObject` and request authority
before writing state.

## Host/Client

The client with Input Authority contributes `NetworkInputData`. State
Authority reads that input during `FixedUpdateNetwork`, simulates the
Character, and replicates the result. Core preserves the existing
`MoveDirection`, `FaceDirection`, and `JumpCount` fields.

Fusion add-ons use the fixed `Extensions` payload in the same root input.
They must not send gameplay input only by RPC or encode buttons in vector
magnitudes. See [Compatibility and input contract](references/compatibility.md).

## Spawn and despawn

Use **Spawn Player** after **On Scene Load Done**. State Authority should
validate the requested prefab and initial position. Use **Despawn Object** for
networked teardown; destroying only the local GameObject leaves other peers
out of sync.

Treat peer and avatar lifecycle separately:

* **On Player Joined/Left** reports the connection.
* **On Player Spawned/Despawned** reports the avatar.
* A late joiner may observe existing avatars before local UI has finished
  initializing.

## Attachments

Register allowed prop prefabs in **Local List Variables Network** or
**Global List Variables Network** with Sync Mode **Attachments**. After
registration, Game Creator's regular Attach and Remove Prop instructions use
the replicated prop identity.

The same registry and ordering must exist on every peer. Do not replicate an
arbitrary local prefab reference.

## Models

Register allowed Character models with **Local List Variables Network** or
**Global List Variables Network** using Sync Mode **Models**, or use
**Register Character Models**. Game Creator's Change Model instruction then
replicates the selected model key.

Model Config properties include:

* **Model Prefab**
* **Model Name**
* **Model Prefab Name**
* **Selected Model**
* **Model Sprite**
* **Selected Model Prefab**
* **Selected Model Sprite**

Keep stable list order and entries between versions to preserve saved and
networked selections.
