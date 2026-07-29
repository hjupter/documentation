# Quantum Inventory

Quantum Inventory provides deterministic, rollback-safe inventory state for
Game Creator 2 Inventory.

It supports fixed containers and slots, bounded stacks, add/remove/move/split,
equip/unequip, use/drop, and atomic recipe transactions. Reliable commands are
validated in simulation and deduplicated with monotonic IDs. Game Creator's Bag
is rebuilt from verified Quantum state for UI and presentation.

## Requirements

- Photon Quantum SDK 3.0.12 Stable Build 2123
- The exact Quantum Core version named by the package compatibility descriptor
- Game Creator 2 Core 2.18.60
- Game Creator 2 Inventory 2.8.23

Photon Quantum and Game Creator are separately licensed dependencies and are not
included.

{% hint style="warning" %}
Version 1.0.0 remains unreleased until its exact Quantum Core contract and
online two-client validation are complete. Do not combine provisional builds by
matching version numbers alone.
{% endhint %}
