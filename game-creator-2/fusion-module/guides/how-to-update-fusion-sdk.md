# How to update Fusion SDK

Fusion Core 1.4.0 is validated against Fusion `2.1.1` Stable build `2177`.
Download SDK updates only from the official
[Photon Fusion SDK page](https://doc.photonengine.com/fusion/v2/getting-started/sdk-download).

## Before updating

1. Commit or back up the project.
2. Record the current Unity, Fusion, Game Creator, and Core versions.
3. Preserve `PhotonAppSettings.asset` and `NetworkProjectConfig.fusion`.
4. If upgrading from an older Fusion 2 release, first update to the latest
   Fusion 2.0.x before moving to 2.1.x.

## Update

Remove the old SDK overlay according to Photon's upgrade instructions, while
preserving the project-owned settings files above. Import Fusion 2.1.1 and let
Unity complete a full recompile and Weaver pass.

Fusion 2.1 uses Photon Realtime 5. Remove stale PUN, legacy Realtime, Chat, or
duplicate Photon DLL overlays unless another installed product explicitly
requires them and proves assembly compatibility.

## Validate

* Confirm Fusion reports `2.1.1` build `2177`.
* Compile in Unity `6000.0.60f1` and `6000.3.14f1`.
* Run the Core EditMode tests.
* Build WebGL and macOS from Unity `6000.3.14f1`.
* Test separate-process Photon Cloud Shared and Host/Client sessions.
* Inspect the exported Core package to confirm it does not embed the Photon
  SDK.

Do not update a shipped project's Fusion version independently of the Core and
add-on compatibility contract.
