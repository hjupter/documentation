# Upgrade from 1.0.0

## Before importing

1. Commit or back up the project.
2. Record any changes made inside the installed 1.0.0 sample.
3. Upgrade Photon Fusion through the latest 2.0.x release before moving to
   Photon Fusion 2.1.1.
4. Install the exact dependency versions on the
   [compatibility table](README.md#compatibility).

Keep the project's Photon App Settings and Network Project Config when replacing
the Photon Fusion SDK.

Fusion for Game Creator 2 1.4.0 preserves installed add-ons under
`Fusion/SubModules` when Core is uninstalled. If upgrading from an older Core,
back up the Fusion Stats module before uninstalling Core.

## Import Fusion Stats 1.1.0

Import 1.1.0 over the existing Fusion Stats module. The package overwrites the
old runtime initializer with a player-safe, source-compatible shim and installs
editor initialization in the Editor assembly.

Existing **Traits Network** components default to **State Authority Only**. This
preserves a secure behavior for serialized 1.0.0 prefabs.

## Update gameplay graphs

Search for standard Stats instructions that mutate a networked Traits target:

* Change Stat
* Change Attribute
* Add or Remove Modifier
* Add, Remove, or Clear Status Effect

Replace them with the corresponding action under **Fusion → Stats**. Keep normal
Stats conditions, events, properties, formulas, and UI.

## Reinstall the sample

Do not merge installed sample folders by hand. Back up custom changes, remove the
1.0.0 sample, and install the 1.1.0 sample with **Tools → Ninjutsu Games →
Fusion → Safe Install → Stats Examples**. Do not use the Game Creator 2.18.60
Install window for Fusion packages; it bypasses the guarded dependency preflight.

## Validate the upgrade

1. Open every network prefab and confirm there are no missing scripts.
2. Confirm the same Stats Class is assigned on all peer prefabs.
3. Build the target platform.
4. Run a real Host and Client through Photon Cloud.
5. Verify initial state, negative and percentage Modifiers, stacked Status
   Effects, late join, disconnect, and reconnect.
