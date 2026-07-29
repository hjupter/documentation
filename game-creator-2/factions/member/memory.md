# Memory

Add the Faction Memory/Remember integration to an object that already has a
**Member** component. It stores the complete list of joined factions and the
member's reputation points for each faction.

On restore, Factions applies the complete snapshot as one operation. It clears
stale memberships and reputation, updates each Faction member registry, clamps
points to the configured range, and emits one normal restore/change
notification after the snapshot is complete. It does not emit temporary
Leave/Join events or expose an intermediate empty state to Faction registry
listeners.

Factions 1.2.0 stores stable faction IDs. Tokens created by 1.1.x continue to
load through the legacy faction-name mapping.

{% hint style="warning" %}
Do not regenerate a Faction ID after shipping saved games unless you also
provide a project-specific migration from the previous ID.
{% endhint %}
