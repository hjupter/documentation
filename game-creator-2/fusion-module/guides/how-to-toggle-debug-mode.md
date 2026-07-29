# How to toggle Fusion debug DLLs

Use **Tools → Fusion → Toggle Debug DLLs** when the installed Fusion SDK
provides that command. Debug DLLs provide additional diagnostics but increase
build size and are not intended for the final customer build.

After toggling:

1. Let Unity reimport and compile.
2. Run **Tools → Fusion → Run Weaver** if Fusion reports stale woven
   assemblies.
3. Open **Tools → Fusion → Network Project Config** and confirm the displayed
   Fusion version and Debug/Release mode.
4. Rebuild every player; do not mix clients built against different Fusion
   DLL modes.

Return to Release DLLs and rerun compile, tests, and multiplayer proof before
shipping.
