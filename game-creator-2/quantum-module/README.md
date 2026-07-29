# Quantum Module

The Quantum Module connects Game Creator 2 authoring and visual scripting to a
Photon Quantum simulation. Quantum owns multiplayer state, deterministic
outcomes, rollback, and resimulation. Game Creator components remain the
authoring and presentation layer.

Photon Quantum, Game Creator, and their paid add-ons are customer-installed
dependencies. Ninjutsu Games packages do not redistribute them.

{% hint style="warning" %}
The Quantum product family is in private release validation. This documentation
does not announce public availability.
{% endhint %}

## Shared deterministic boundary

Quantum Core owns the single root input, command registry, event bridge, player
mapping, catalog allocations, and reconnect lifecycle. Add-ons receive
non-overlapping allocations and cannot replace those roots.

Unity physics, animation events, visual-scripting timing, frame rate, and VFX
never decide a simulation outcome.
