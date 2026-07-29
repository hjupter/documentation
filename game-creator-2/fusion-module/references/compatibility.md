# Compatibility and input contract

## Release matrix

| Surface | Contract |
| --- | --- |
| Fusion Core | `1.4.0` |
| Unity | exactly `6000.0.60f1` and `6000.3.14f1` |
| Photon Fusion | `2.1.1` Stable build `2177` |
| Photon Realtime | major `5` |
| Game Creator Core | `2.18.60` |
| Release build gates | WebGL and macOS from `6000.3.14f1` |
| Core package root | `Assets/Plugins/NinjutsuGames/Packages/Fusion` |
| Runtime assembly | `NinjutsuGames.FusionNetwork.Runtime` |
| Embedded Examples installer | `Fusion.Examples@1.4.0` |
| Embedded UI installer | `Fusion.UI@1.2.0` |

Fusion and Game Creator are external dependencies. The exported Core package
must not contain `Assets/Photon` or `Assets/Plugins/GameCreator`.

Other Fusion/Unity build targets may be compatible, but are not claimed by
this Core release without project-specific build and runtime proof. Shared and
Host/Client are the required Core topology proofs; a Dedicated Server project
must validate its selected add-ons and server build separately.

The Core export contains the Examples and UI installers as nested
`.unitypackage` files. Release export regenerates both from their exact
versioned source roots before exporting Core. CI then compares every pathname
in all three release packages with the corresponding source root.

Core owns `Runtime`, `Editor`, `Examples`, `Tests`, `Compatibility`, and the
Core changelog beneath its package root. Uninstall preserves
`Fusion/SubModules` and all installed add-ons. The package root is removed
only after no `SubModules` root or other direct entry remains.

The package-resident source of truth is:

`Assets/Plugins/NinjutsuGames/Packages/Fusion/Compatibility/fusion-core-contract.json`

Its network descriptor and schema are in the same folder. Add-on build tooling
should validate these files rather than inferring compatibility from a README
or embedded SDK copy.

## Network-input extension

Core owns the only root input type:

`NinjutsuGames.FusionNetwork.Runtime.NetworkInputData`

It preserves `MoveDirection`, `FaceDirection`, and `JumpCount` and adds a fixed
`Extensions` field of type:

`NinjutsuGames.FusionNetwork.Runtime.NetworkInputExtensionPayload`

The extension is 768 bits, fixed-layout, allocation-free during collection,
little-endian, and LSB-first. Contributor capture order is ascending numeric
contributor ID.

| Owner | Contributor ID | Payload version | Root bits | Size |
| --- | ---: | ---: | ---: | ---: |
| Core header | — | contract 1 | 0–63 | 8 bytes |
| Fusion Melee | `0x0101` | 1 | 64–103 | 5 bytes |
| Fusion Shooter | `0x0102` | 1 | 104–359 | 32 bytes |
| Fusion Abilities | `0x0103` | 1 | 360–615 | 32 bytes |
| Future contributors | — | — | 616–767 | 19 bytes |

Add-ons must not:

* declare or replace `NetworkInputData`;
* write outside their assigned range;
* use a payload size or version different from the Core allocation;
* encode buttons or commands in movement vector magnitudes;
* use RPC-only transport for prediction or resimulation.

## Contributor API

Implement:

`NinjutsuGames.FusionNetwork.Runtime.INetworkInputContributor`

The contributor exposes its numeric ID, payload version, exact byte size, and:

```csharp
void Capture(NetworkRunner runner, Tick inputTick, Span<byte> destination);
```

Cache device or visual-scripting intent during Unity `Update`. `Capture` writes
only deterministic value data into the assigned span when Fusion collects the
tick.

Register once for the runner:

```csharp
NetworkInputContributorRegistry.Register(runner, contributor);
```

Unregister with the same runner and contributor, or call
`UnregisterAll(runner)` during runner shutdown. Core also clears the runner
scope from its input collector shutdown callback.

The registry is scoped by `NetworkRunner`. A duplicate contributor ID is
rejected within one runner, while the same stable module ID is allowed across
simultaneous runners and reconnect overlap.

## Reading and resimulation

State Authority reads the root input in `FixedUpdateNetwork`, then calls:

```csharp
Span<byte> payload = stackalloc byte[expectedSize];
if (input.Extensions.TryRead(contributorId, payloadVersion, payload))
{
    // Decode deterministic values.
}
```

Use `NetworkInputDeterminism.IsNewer` or `ShouldApply` for wrap-safe UInt16
command dedupe. Store the last accepted sequence and previous level flags in
Networked properties. Fusion rewinds those properties during resimulation, so
pressed/released and dedupe decisions replay with the simulation.

Use `ShouldInvokeForwardOnly` only for irreversible presentation side effects.
Authoritative state changes must remain deterministic when the same tick is
resimulated.

## Melee v1 layout

Melee owns root bits 64–103:

* payload byte 0 bits 0–2: MeleeKey A–H;
* bit 3: ChargeHeld;
* bit 4: ExecutePressed;
* bit 5: CancelPressed;
* bit 6: BlockHeld;
* bit 7: EquipmentCommandPresent;
* bytes 1–2: UInt16 argument; bit 15 is Unequip and low 15 bits are the
  registry key when an equipment command is present;
* bytes 3–4: monotonic UInt16 intent sequence.

Charge duration derives from Fusion tick span. Combo, charge, and parry
outcomes remain State Authority results.

## Module descriptors

Each assigned module ships a descriptor at the path named in Core's contract.
The descriptor must exactly match contract version, root payload and extension
types, total bits, registry scope and duplicate policy, safety flags, reserved
ranges, contributor ID, payload version, range, transport, and dedupe strategy.

Replacing the root input, overlapping ranges, or declaring RPC-only prediction
is a contract validation failure.
