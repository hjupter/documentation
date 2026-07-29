# Events

* **On Member Join Faction**
* **On Member Leave Faction**
* **On Member Factions Change**
* **On Reputation Points Change**
* **On Reputation Status Change**
* **On Faction Status**
* **On Member Count**
* **On Faction Name Variable Change**

Reputation point and status events are scoped to the configured Faction. A
change in another Faction does not trigger them. Batch memory/network restores
can apply a complete snapshot without transient join/leave events and emit one
normal restore/change notification afterward.
