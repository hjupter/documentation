# Releases

## 1.1.0 (upcoming)

* Updated compatibility to Photon Fusion 2.1.1 build 2177 with Realtime 5,
  Fusion for Game Creator 2 1.4.0, Game Creator 2 2.18.60, and Stats 2 2.6.23.
* Targets Unity 6000.0.60f1 and 6000.3.14f1; release proof is pending.
* Added authoritative Fusion Stats actions for Stats, Attributes, Modifiers, and
  Status Effects.
* Added secure State Authority mutations and optional Input Authority requests.
* Fixed initial state, late join, reconnect, negative and net-zero Modifiers,
  Status Effect stacking, elapsed duration, and removals.
* Fixed a Stats 2 settings import that could leak an editor-only namespace into
  player compilation.
* Increased replicated capacities to 64 Stats, 64 Attributes, and 64 active
  Status Effect stacks per Network Object.
* Added class-layout checks, upgrade-safe initialization, sample updates, tests,
  package validation, and separate-process Cloud proof coverage.

## 1.0.0 (15th December 2024)

* First release.
