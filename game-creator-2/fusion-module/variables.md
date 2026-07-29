# Variables

Fusion Module synchronizes Game Creator Local or Global Name Variables and List
Variables. Each synchronizer must be on a GameObject with a Fusion
`NetworkObject`.

{% hint style="info" %}
The peer with State Authority writes replicated variable state. Remote peers
reconstruct the corresponding Game Creator values, including late joiners.
{% endhint %}

## Name Variables

* **Local Name Variables Network** synchronizes a Local Name Variables
  component on the same object.
* **Global Name Variables Network** synchronizes a selected Global Name
  Variables asset.

The supported value conversion preserves Game Creator runtime types. In
particular, String values are reconstructed as `System.String`, not as
Fusion's `NetworkString`.

## List Variables

* **Local List Variables Network** synchronizes a Local List Variables
  component.
* **Global List Variables Network** synchronizes a selected Global List
  Variables asset.

Choose one Sync Mode:

| Mode | Purpose |
| --- | --- |
| **Sync Data** | Replicates the ordered list values. |
| **Players List** | Maintains the active player/avatar list as peers join and leave. |
| **Attachments** | Registers network prop prefabs used by Character attachments. |
| **Models** | Registers Character models/skins used by Change Model. |

## Network Prefab Ref

Use **Set Network Prefab Ref** to assign a prefab registered in Fusion's
Network Project Config. The value resolves through Fusion 2.1's prefab table;
it no longer depends on legacy Photon/PUN struct wrappers.

## Design rules

* Keep list schema and registry order identical on every peer.
* Validate writes on State Authority.
* Use Networked state for durable facts; do not depend on an RPC arriving
  before a late joiner.
* Avoid writing the same variable from multiple authorities.
* Test String, Boolean, Number, Vector, GameObject/prefab, model, and list
  migrations after upgrading an existing project.
