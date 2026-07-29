# Setup

## Requirements

Install these packages in this order:

1. [Game Creator 2](https://www.ninjutsugames.com/go/game-creator-2?src=docs_photon_factions_requirement_gc2)
2. [Factions](https://www.ninjutsugames.com/go/factions?src=docs_photon_factions_requirement_factions)
3. [Photon PUN 2](https://www.ninjutsugames.com/go/photon-pun-2?src=docs_photon_factions_requirement_pun)
4. [Photon Module 2](https://www.ninjutsugames.com/go/photon-module-2?src=docs_photon_factions_requirement_core)
5. Photon Factions
6. Photon Factions Examples

Open **Game Creator → Install**, select **Photon → Factions**, and install the
module. Install **Photon → Factions Examples** only after the module and the
Factions UI/Examples dependencies are present.

Use the exact supported dependency versions listed above. Verify each installed
package's `Version.txt` marker before adding the next package; Photon Core 1.5.0
is the frozen compatibility baseline for this release.

The installed module and examples each contain a `Version.txt` file. For this
release both markers must read `1.1.0`.

## Configure Photon

Enter a Photon Realtime App ID in **PhotonServerSettings** and use the same App
ID and App Version on every client. A successful local compile or PUN Offline
Mode session does not prove Photon Cloud behavior.

Do not commit an App ID to a public source repository or include it in validation
logs. The Photon Factions release workflow injects its Cloud proof credential
from a repository secret at runtime.

## Game Creator Settings

Photon Factions intentionally adds no **Photon Factions** panel under **Game
Creator → Settings** because it has no safe project-wide default:

* Select the Faction asset on each **Faction Network**.
* Keep the Faction catalogue and stances in the base Factions
  `factions.general` settings repository.
* Configure authority and transfer policy on that object's `PhotonView`.
* Configure the App ID and connection policy through Photon Core/PUN.
* Configure App Version, room TTL, and reconnect flow in the game's room
  bootstrap.

Membership, absolute reputation, full snapshot replacement, controller
validation, and schema rejection are fixed synchronization rules. Making them
client-specific settings would allow incompatible state. Photon Factions
therefore creates no `photon.factions.asset` during import or domain reload.

## Member Network

On every networked member:

1. Add a `PhotonView`.
2. Add the Factions `Member` component.
3. Add **Member Network**.
4. Spawn or transfer the object through the same Photon ownership path used by
   the rest of the player object.

The `PhotonView` controller owns membership and reputation state. Other clients
receive that state and cannot author authoritative changes on the replica.

<figure><img src="../../../.gitbook/assets/image (121).png" alt="Member Network inspector"><figcaption>Member Network follows the controller of the PhotonView on the same object.</figcaption></figure>

## Faction Network

For every faction whose shared state should be networked:

1. Create a network object with a `PhotonView`.
2. Add **Faction Network**.
3. Assign the Faction asset in the inspector.
4. Ensure that all clients have the same Faction asset and unique ID.
5. If authority must move explicitly at runtime, set the `PhotonView` ownership
   mode to **Request** or **Takeover**. The included examples use **Request**.

Use one Faction Network per synchronized Faction asset. Relationships are
directed, so changing A toward B is separate from changing B toward A unless
your visual-scripting action changes both directions.

<figure><img src="../../../.gitbook/assets/image (122).png" alt="Faction Network inspector"><figcaption>Faction Network synchronizes the selected Faction asset.</figcaption></figure>

## Before release

Test with two independent clients connected to Photon Cloud. Verify the owner
and remote client, then join a third time after state already exists to cover
the late-join snapshot.
