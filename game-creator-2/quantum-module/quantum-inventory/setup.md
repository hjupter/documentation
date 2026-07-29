# Setup

1. Install Photon Quantum 3.0.12 Stable Build 2123.
2. Install the exact Quantum Core build required by Quantum Inventory.
3. Install Game Creator Core 2.18.60 and Inventory 2.8.23.
4. Import Quantum Inventory and run its setup check.
5. Create a **Quantum Inventory Item Map**.
6. Give every Item, recipe, equipment slot, and use effect a stable positive
   numeric ID. Released IDs must never be reused.
7. Add **Verified Inventory View** beside the Game Creator **Bag** and
   **Quantum Entity View**, then assign the Item Map.
8. Generate Quantum code and fix every catalog or compatibility error before
   starting a session.

The deterministic catalog's stack capacities, equipment slots, and use-effect
IDs must exactly match the Item Map. The setup validator rejects zero IDs,
duplicates, missing Items, and mismatches.

Late join and reconnect rebuild the presentation from the verified Quantum
frame. Do not restore the authoritative inventory from a Game Creator save
token.
