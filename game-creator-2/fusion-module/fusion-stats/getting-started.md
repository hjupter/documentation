# Getting started

## Install the dependencies

Install the versions listed on the [Fusion Stats overview](README.md) in this
order:

1. Game Creator 2
2. Stats 2
3. Photon Fusion
4. Fusion for Game Creator 2
5. Fusion Stats

Wait for Unity to finish importing and compiling after each package.

## Add Traits Network

1. Open the network prefab that owns the character or gameplay Traits.
2. Confirm the root has a Fusion **Network Object**.
3. Add the Game Creator **Traits** component and assign its Stats Class.
4. Add **Traits Network** to the same Game Object.
5. Keep **Mutation Authority** set to **State Authority Only** unless the object
   owner is intentionally allowed to request changes.
6. Save the prefab and rebuild the Fusion prefab table if Fusion prompts you.

The same prefab and Stats Class must be available on every peer. Fusion Stats
compares the Class layout before applying a snapshot and reports a warning when
the Stat or Attribute IDs differ.

<figure><img src="../../../.gitbook/assets/image.png" alt="Traits Network component beside Traits and Network Object in the Unity Inspector"><figcaption>Add Traits Network to the same prefab root as Traits and Network Object.</figcaption></figure>

## Install the sample

Open the Fusion Stats module installer in Game Creator's Hub and install the
1.1.0 example. If a 1.0.0 sample is already installed, back up any custom work,
remove the old sample, and install the new version.

The sample uses the network-aware actions under **Fusion → Stats** for mutations.
Use it as a reference; do not copy a Photon AppId from another project.

## First multiplayer check

Run one Host and one Client through Photon Cloud:

1. Spawn the same Traits Network prefab for both peers.
2. Change a Stat or Attribute on State Authority.
3. Add a negative or percentage Modifier.
4. Add and remove stacked Status Effects.
5. Join a Client after those changes and confirm the full state appears.

Continue with [synchronization and authority](synchronization-and-authority.md)
before enabling owner requests.
