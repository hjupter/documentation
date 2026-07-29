# Settings

Open **Game Creator → Settings → Fusion**. Fusion Core owns this one settings
entry and its `fusion.general` repository. The page renders these titled
sections in order:

1. Core
2. Session Code
3. Regions
4. Errors
5. Profanity Filter
6. Fail Safe
7. valid add-on project settings, if any
8. Submodules

An installed add-on appears only when it has genuine project-wide defaults and
ships a valid module-owned settings asset. An add-on with only per-component,
per-prefab, per-catalog, or vendor-repository controls creates no empty status
section.

## Core

**Default Player Name** is used when no username is supplied. For production
identity and rejoin, use authenticated user data rather than relying on a
display name.

Use a **Custom Runner Prefab** when the project needs additional Fusion
`SimulationBehaviour` components or physics integration. Keep exactly one Core
input collector for each runner.

Network object pooling reduces repeated allocations. Pool only prefabs whose
reset path clears authority-owned and presentation state. Nested and scene
objects follow Fusion 2.1's provider rules and are not treated as ordinary
prefab instances.

## Session Code

The generator creates human-readable session codes. Configure its length and
character choices for the expected room count. A code is a discovery key, not
authentication.

## Regions

Enable only regions that the session browser should offer. **Select Best
Region** can probe enabled regions and return the lowest available ping.
**Selected Region** exposes the current selection to Game Creator properties.

Photon Dashboard region availability and application settings remain the
source of truth. A locally enabled region can still be unavailable to the
application.

## Errors, profanity, and fail-safe

**Errors** provides customer-facing connection, lobby, session, and shutdown
messages. Log the underlying Fusion reason separately for diagnostics.

**Profanity Filter** owns the optional local word-list behavior. Treat it as UI
filtering, not an authorization or moderation boundary.

**Fail Safe** prevents duplicate or invalid lifecycle operations. Its editor
test controls require a live manager and are not release proof.

## Add-on settings ownership

Fusion Core discovers add-on settings from:

`Resources/Fusion/Settings`

A participating add-on owns exactly one `FusionModuleSettings` asset at:

`Assets/Plugins/NinjutsuGames/Packages/Fusion/SubModules/<Module>/Runtime/Resources/Fusion/Settings/<moduleId>.asset`

The add-on owns the asset, its stable `.meta` GUID, defaults, migration, and
uninstall behavior. Core orders valid sections deterministically and rejects
duplicate module IDs, settings types, or display orders. Invalid assets are
not rendered.

Core never creates, moves, or deletes an add-on settings asset. Removing an
add-on removes its Resources entry on refresh without rewriting
`fusion.general.asset`. Core uninstall preserves the complete
`Fusion/SubModules` tree.

Fusion Inventory is the first approved project-level candidate. Its planned
project asset provides the seven authority and safety defaults while an
explicit per-Bag settings asset remains a complete override. The project asset
is not partially merged with the Bag override. Its subsection remains absent
until the add-on consumes the exact Core contract and owns a stable GUID.

Fusion Stats, Melee, Shooter, Abilities, and Factions currently have no
project-level Fusion settings. Their controls remain on the relevant
components, prefabs, catalogs, visual-scripting nodes, or external Game
Creator repositories; they therefore create no Fusion subsection.

## Runtime access

Add-on runtime code derives its settings type from
`NinjutsuGames.FusionNetwork.Runtime.FusionModuleSettings`, then reads the
validated project asset with:

```csharp
if (FusionModuleSettingsRegistry.TryGet<MyModuleSettings>(out var settings))
{
    // Use the complete project defaults.
}
```

The registry is rebuilt after a runtime subsystem registration and refreshed
when project assets change in the editor. Schema upgrades run one version at a
time and retain the module-owned asset GUID.

## App IDs and secrets

Photon App IDs remain in Photon-owned Realtime settings. Fusion module settings
must not serialize an App ID, API key, password, token, credential, or
`PhotonAppSettings` reference. The settings registry never displays serialized
values in validation diagnostics.
