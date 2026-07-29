# Multiplayer validation

Quantum Factions will not be considered a release candidate from local debug,
single-editor, or Core-only evidence.

The required proof uses two separate player processes in a real Photon Quantum
Cloud session:

1. Both clients enter the same session and agree on the catalog checksum.
2. Players receive different faction/team memberships and see the same verified
   state.
3. Directional hostility and ally queries match on both clients.
4. The same damage attempt succeeds as enemies and is denied after a verified
   runtime alliance/friendly-fire change.
5. Rollback and resimulation finish with identical checksums and no duplicate
   view effects.
6. A late-joining process receives the complete current snapshot.
7. A disconnected client reconnects, restores the same snapshot and dedupe
   cursors, and cannot replay an old mutation.

macOS and WebGL evidence is required only for platforms included in the final
supported matrix.
