# Settings

Open Fusion Module settings from Game Creator's settings window.

## Player

**Default Player Name** is used when no username is supplied. For production
identity and rejoin, use authenticated user data rather than relying on a
display name.

## Session codes

**Session Code Generator** creates human-readable session codes. Configure
length and character choices to suit the expected number of concurrent rooms.
The code is a discovery key, not authentication.

## Regions

Enable only regions that your session browser should offer. **Select Best
Region** can probe enabled regions and return the lowest available ping.
**Selected Region** exposes the current selection to Game Creator properties.

Photon Dashboard region availability and application settings remain the
source of truth. A locally enabled region can still be unavailable to the
application.

## Runner and pooling

Use a custom runner prefab when the project needs additional Fusion
SimulationBehaviours or physics integration. Keep exactly one Core input
collector for each runner.

Network object pooling reduces repeated allocations. Pool only prefabs whose
reset path clears authority-owned and presentation state. Nested and scene
objects follow Fusion 2.1's provider rules and are not treated as ordinary
prefab instances.

## Fail-safe and errors

The fail-safe settings prevent duplicate or invalid lifecycle operations.
Error-message settings provide customer-facing text for connection, lobby,
session, and shutdown failures. Log the underlying Fusion reason separately
for diagnostics.
