# Setup

1. Install Photon Quantum 3.0.12 Stable Build 2123.
2. Install the exact Quantum Core build required by Quantum Inventory.
3. Install Game Creator Core 2.18.60 and Inventory 2.8.23.
4. Import Quantum Inventory and run its setup check.
5. Create a **Quantum Inventory Item Map** and a deterministic Quantum catalog,
   then pair them in a **Quantum Inventory Authoring Profile**.
6. Give every Item, recipe, equipment slot, and use effect a stable positive
   numeric ID. Released IDs must never be reused.
7. Add **Verified Inventory View** beside the Game Creator **Bag** and
   **Quantum Entity View**, then assign the Authoring Profile.
8. Generate Quantum code and fix every catalog or compatibility error before
   starting a session.

The deterministic catalog's stack capacities, equipment slots, and use-effect
IDs must exactly match the Item Map. The setup validator rejects zero IDs,
duplicates, missing Items, and mismatches.

Late join and reconnect rebuild the presentation from the verified Quantum
frame. Do not restore the authoritative inventory from a Game Creator save
token.

## Project settings

Quantum Inventory currently contributes no project-wide settings and does not
show an empty Inventory subsection in the Quantum settings panel. Quantum Core
owns the single `quantum.general` repository; Inventory does not access it,
implement a settings contributor, or provide a section, order, asset, option,
or UI.

- Items, recipes, stack limits, and stable IDs belong to the deterministic
  Quantum catalog.
- Container, slot, transaction, and dedupe bounds are fixed by the simulation
  contract.
- The Item Map and Authoring Profile are explicit authoring assets assigned to
  each Inventory view.
- Mirroring verified state into a Game Creator Bag is configured per view.
- Player routing and request-ID continuity belong to Quantum Core.

No Photon App ID, credential, token, or secret is stored by Quantum Inventory.
User-created catalogs, maps, profiles, scenes, and prefabs remain project-owned
when the module is uninstalled.

The current Core source contract records this N/A disposition, but it is not a
runtime compatibility or release claim. Use only the exact Core build named by
the final Inventory compatibility descriptor after its Unity validation gates
have passed.
