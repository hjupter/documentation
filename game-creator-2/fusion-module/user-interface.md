# User Interface

Install **Fusion UI 1.2.0** from **Tools → Ninjutsu Games → Fusion → Safe
Install → UI** for ready-to-use
prefabs. The runtime components also work with custom Unity UI.

## Session List UI

**Session List UI** creates one Session Item UI prefab for every visible
session returned by the lobby.

* **Content** is the RectTransform that receives rows and should use a layout
  group.
* **Prefab** must contain **Session Item UI**.
* **Empty Message** is shown when the list has no visible sessions.
* **Sort Index** selects the displayed field used for sorting.
* **Sort Direction** controls ascending or descending order.

**SessionList UI Tab** can bind a tab/view to the session browser lifecycle.

## Session Item UI

**Session Item UI** displays a session and joins that exact session when its
Join Button is selected. Disable the button when the latest session snapshot
is closed or full, and still handle a join rejection because the room can
change after discovery.

Fields accept String or Number properties. Standard .NET formatting works,
including `{0:P}`, `{0:C}`, and `{0:N}`.

## Region Dropdown UI

**Region Dropdown UI** lists regions enabled in Fusion Module settings. The
selected region is stored locally and exposed through **Selected Region**.
Use **On Selected Region Changed** to refresh dependent UI.

## Room Chat

**Room Chat** requires:

* a message prefab with Text or TextMeshProUGUI;
* an input field;
* a ScrollRect/container for entries;
* optional background and focus-fade presentation.

Settings control activation input, stored and visible line limits, fade
timing, player input suppression while typing, profanity filtering, and unseen
message count.

Room chat is session communication, not authoritative gameplay transport.
Rate-limit and validate user-generated content for the target platform.

## Floating Text

The **Floating Text** instruction shows text above a target using an optional
prefab. Configure offset, duration, fade-out time, and color. With no prefab,
Core creates a basic compatible presentation.

Do not spawn permanent floating UI for objects that may despawn without also
cleaning it up.

## Component menu paths

* `Game Creator/UI/Fusion/Session List UI`
* `Game Creator/UI/Fusion/Session Item UI`
* `Game Creator/UI/Fusion/SessionList UI Tab`
* `Game Creator/UI/Fusion/Region Dropdown UI`
* `Game Creator/Fusion/Room Chat`
