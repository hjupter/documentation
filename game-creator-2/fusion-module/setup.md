---
description: Install and configure Fusion Module for Game Creator 2.
---

# Setup

## Requirements

Install these dependencies before importing Fusion Module:

* Unity `6000.0.60f1` or `6000.3.14f1`
* Game Creator Core `2.18.60`
* Photon Fusion `2.1.1` Stable build `2177`
* A Photon Fusion application and App Id

Use the official
[Fusion SDK download](https://doc.photonengine.com/fusion/v2/getting-started/sdk-download).
Do not combine Fusion 2.1 with an older Photon Realtime overlay.

## Install Fusion Module

1. In Unity, open **Window → Package Manager**.
2. Select **My Assets** and find Fusion Module.
3. Download and import the latest supported package.
4. Wait for Unity to finish importing and compiling before opening scenes.

The exported module owns only
`Assets/Plugins/NinjutsuGames/Packages/Fusion`. Photon Fusion and Game Creator
are external dependencies and must not be copied into an add-on package.

## Configure Photon

1. Create or select a Fusion application in the Photon Dashboard.
2. Open **Tools → Fusion → Realtime Settings**.
3. Enter the Fusion App Id in `PhotonAppSettings`.
4. Open **Tools → Fusion → Network Project Config** and confirm that Fusion
   reports version `2.1.1`.
5. Keep `PhotonAppSettings.asset` and `NetworkProjectConfig.fusion` when
   updating the SDK.

Never commit a private App Id to a public repository.

## Install examples

Open **Game Creator → Install** and install:

* **Fusion Examples 1.4.0** — Shared Mode scenes for lobby, character state,
  tick timers, attachments, selection, random join, point-and-click, NavMesh,
  variables, and NPCs.
* **Fusion UI 1.2.0** — session browser, room chat, region selection, and
  reusable UI prefabs.

The installer resolves declared Game Creator dependencies. Installed content
appears under `Assets/Plugins/GameCreator/Installs/` with its version suffix.

## Upgrade from 1.3.9

1. Commit or back up the project.
2. Update Fusion to the latest 2.0.x first if the project is older than that,
   then update to Fusion 2.1.1.
3. Update Game Creator Core to 2.18.60.
4. Import Fusion Core 1.4.0 over 1.3.9.
5. Reinstall Fusion Examples and Fusion UI so their versioned install folders
   match the new package.
6. Open and save upgraded prefabs/scenes only after the Console is clean.
7. Rebuild Fusion's object table if Network Project Config reports stale
   prefab entries.

Existing movement, facing, and jump input fields remain serialized. Add-ons
must migrate to Core's input extension instead of declaring another
`NetworkInputData`.
