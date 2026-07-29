# Setup

## Requirements

The Factions 1.2.0 release candidate requires:

* Game Creator 2 Core 2.18.60
* Candidate editors: Unity 6000.3.14f1, 6000.4.12f1, and 6000.5.5f1

The final supported editor matrix will list only editors that pass the
Factions-specific compile, runtime, persistence, sample, build, package, and
clean-install checks.

The optional examples are validated with Dialogue 2.5.19 and Quests 2.3.11.

## Install

1. Install Game Creator 2 Core.
2. Download Factions from **Window → Package Manager → My Assets**.
3. Import the Factions package and wait for Unity to finish compiling.
4. Open **Game Creator → Settings**, select **Factions**, and review the
   faction list, directional relationships, and reputation stances.

The Factions panel is created automatically with Hostile, Neutral, Friendly,
and Honored defaults in a clean project. Existing project settings are
preserved when upgrading or reloading the editor.

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

Use **Tools → Ninjutsu Games → Factions → Uninstall**. It removes the
standalone module, its generated Factions project settings, and its optional
`Factions.*` installer folders. It does not remove Game Creator Core, unrelated
modules, or the separately maintained Factions-Abilities bridge.
