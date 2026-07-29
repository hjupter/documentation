# Upgrade from 1.0.1

Version 1.1.0 preserves the existing `MemberNetwork` and `FactionNetwork` script identities and
the serialized Faction field. Existing prefabs and scenes should retain their components.

## Upgrade order

1. Commit or back up the project.
2. Update Game Creator 2, Photon Fusion, Fusion, and Factions to the versions in
   [Requirements](README.md#requirements).
3. Remove old dependency folders only when their own upgrade guide requires it; do not combine
   files from two Fusion SDK versions.
4. Import Fusion Factions 1.1.0.
5. Open **Tools → Fusion → Rebuild Prefab Table**.
6. Open and save every scene and prefab containing `MemberNetwork` or `FactionNetwork`.
7. Remove the old Fusion Factions example from the Game Creator Hub and install the 1.1.0 example.

## Review authority

The old version broadcast transient RPCs. Version 1.1.0 writes persistent snapshots only from
State Authority.

Review every visual scripting instruction that changes:

* joined or left Factions
* reputation points
* Faction relationship stances
* Faction variables
* restored Factions memory

Make sure it executes on the State Authority described in the component guides.

## Verify the upgrade

Use two separate processes in one real Fusion Cloud room:

1. Change membership and reputation on State Authority.
2. Change a relationship and a supported Faction variable.
3. Join a second client after the changes and confirm it reconstructs all four values.
4. Disconnect and reconnect that client.
5. Transfer or recreate authority and confirm the snapshot remains unchanged.

Do not treat a single-process or offline test as multiplayer upgrade proof.
