# Setup

## Requirements

Factions 1.2.0 requires:

* Unity 6000.3 LTS, 6000.4 LTS, or Unity 6000.5
* Game Creator 2 Core 2.18.60

The optional examples are validated with Dialogue 2.5.19 and Quests 2.3.11.

## Install

1. Install Game Creator 2 Core.
2. Download Factions from **Window → Package Manager → My Assets**.
3. Import the Factions package and wait for Unity to finish compiling.
4. Open **Game Creator → Preferences → Factions** to configure statuses and
   relationships.

## Optional installers

Open **Game Creator → Install** to add only the content your project needs:

* **Factions** — reusable example faction assets.
* **Examples** — eight standalone scenes covering membership, reputation, UI,
  relationships, targeting, variables, save/load, and scoreboards.
* **UI** — faction menu, selected-faction, HUD, and scoreboard prefabs.
* **Dialogue Examples** — Dialogue conditions using faction state.
* **Quests Examples** — quest navigation using faction state.

The separately maintained Factions-Abilities bridge is installed from its own
package. It is not part of the standalone Factions payload.

## Upgrade from 1.1.x

Back up the project, import 1.2.0 over the existing module, and allow Unity to
recompile. Existing Faction assets and Member components keep their serialized
fields. New saves use stable faction IDs; 1.1.x relationship saves and Remember
tokens are still read through their legacy keys.

After upgrading, open representative scenes, enter Play Mode, and save/load
once before shipping.

## Remove

Use the Factions uninstall command, then remove optional `Factions.*` installer
folders that your project no longer uses. The uninstaller does not remove Game
Creator Core or unrelated modules.
