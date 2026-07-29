# Visual Scripting

## Instructions

- Quantum Add Item
- Quantum Remove Item
- Quantum Move Item
- Quantum Split Stack
- Quantum Equip Item
- Quantum Unequip Item
- Quantum Use Item
- Quantum Drop Item
- Quantum Craft Recipe

Instructions submit reliable intent. Success means the command entered the
Quantum command stream, not that it was accepted. Use transaction-result Events
or verified Conditions to observe the outcome.

## Conditions

- Quantum Inventory Has Item
- Quantum Inventory Can Add Item
- Quantum Inventory Item Equipped
- Quantum Inventory State Ready
- Quantum Inventory Last Command Accepted
- Quantum Inventory Last Command Rejected

## Events

- On Quantum Inventory State Applied
- On Quantum Inventory Transaction Result
- On Quantum Inventory Item Used
- On Quantum Inventory Item Dropped
- On Quantum Inventory Equipment Changed
- On Quantum Inventory Craft Completed

## Properties

- Quantum Inventory Revision
- Quantum Inventory Item Count
- Quantum Inventory Remaining Capacity
- Quantum Inventory Last Command ID
- Quantum Inventory Last Rejection
- Quantum Inventory Checksum

All read surfaces report verified deterministic state. They do not read
unconfirmed Game Creator Bag mutations.
