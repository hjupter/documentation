# Settings Editor

Open **Game Creator → Settings** and select **Factions**. This project-level
panel is the central place for reviewing faction assets, defining ordered
reputation stances, and editing directional relationships.

The panel contains two titled sections:

* **Reputation Stances** defines the ordered status ladder.
* **Factions** lists discovered Faction assets and shows their relationship
  matrix. Use **Refresh** after creating, moving, or deleting assets if the
  list has not updated yet.

<figure><img src="../../../.gitbook/assets/Screenshot 2024-06-15 at 9.53.32 PM.png" alt="Factions project settings with reputation stances and relationship matrix"><figcaption>The Factions panel in Game Creator Settings.</figcaption></figure>

## Defaults and persistence

A clean project starts with these stances:

| Stance | Points required |
| --- | ---: |
| Hostile | 0 |
| Neutral | 20 |
| Friendly | 40 |
| Honored | 80 |

You can rename, recolor, reorder, add, or remove stances for the needs of your
game. The settings are project data: they survive editor restarts and domain
reloads, and an upgrade preserves an existing Factions settings asset instead
of replacing customized values.

{% hint style="info" %}
**Faction relationships are directional.** Each faction stores its own stance
toward every other faction, so the two directions may differ.
{% endhint %}

{% hint style="success" %}
**For example**, while the “Humans” faction might view the “Orcs” as hostile, the “Orcs” might view the “Humans” as neutral. \
\
This dynamic allows for complex and realistic interactions where each faction independently determines its stance towards every other faction. \
\
The relationships matrix visually represents these two-way dynamics, making it easy to understand and manage the intricate web of inter-faction relationships in your game.


{% endhint %}

## Reputation stances

* **Key** is the unique status name, such as Hostile or Friendly.
* **Color** identifies the status in the matrix and UI.
* **Points Required** is the minimum member reputation for that status.

Keep the list ordered from its lowest to highest reputation threshold.

## Faction relationships matrix

The relationships matrix is a visual representation of how each faction perceives the other factions. It uses the defined statuses to show these relationships.

{% hint style="success" %}
Select each circle to modify the relationship status between factions. These adjustments will also be applied to each Faction asset accordingly.
{% endhint %}

## Ownership and removal

Standalone Factions is the sole owner of this panel and its
`factions.general` project data. The separate Factions-Abilities bridge has no
project-level settings, does not read or write this data, and does not remove
it. The Factions uninstall command removes the panel's generated project data
without removing dependency settings or credentials; the panel contains no
service secrets.
