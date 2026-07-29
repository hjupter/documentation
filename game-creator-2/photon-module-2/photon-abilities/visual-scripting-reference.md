---
description: Photon Abilities visual scripting and inspector titles
---

# Visual Scripting Reference

Photon Abilities 1.1.0 adds one selectable Abilities input module:

| Surface | Exact title | Category | Purpose |
| --- | --- | --- | --- |
| Ability input module | **Photon Abilities Input** | `Photon/Abilities Input` | Reads targeting input on the `PhotonView` owner |
| Ability targeting strategy | **Photon Synchronized Target** | `Photon/Synchronized Target` | Runs the nested owner strategy locally and consumes the owner's resolved target on remotes |

The network component is available from:

**Game Creator → Photon → Abilities → Pawn Network**

`Pawn Network` has no serialized configuration fields. Its inspector explains the
owner-authoritative synchronization contract.

## Instructions, Conditions, Events, and Properties

Photon Abilities does not add module-specific Game Creator Instructions,
Conditions, Events, or Properties in 1.1.0. Continue to use the visual-scripting
surfaces supplied by Photon Core and Abilities. Adding `Pawn Network` and choosing
**Photon Abilities Input** makes the supported Ability operations use the Photon
owner and target synchronization path.

This page intentionally lists every Photon Abilities title exposed to the Game
Creator picker; there are no hidden module-specific visual-scripting entries.
