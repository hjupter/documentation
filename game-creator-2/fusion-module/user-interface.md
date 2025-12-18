---
description: Complete guide to Fusion module UI components for multiplayer interfaces
---

# User Interface

## Overview

The Fusion module includes a comprehensive collection of UI components designed to streamline the creation of multiplayer interfaces. These components integrate with Unity's UI system and Game Creator 2's visual scripting.

### Available Components

| Component | Purpose |
|-----------|---------|
| [Session List UI](#session-list-ui) | Browse and display available sessions |
| [Session Item UI](#session-item-ui) | Individual session entry in list |
| [Region Dropdown UI](#region-dropdown-ui) | Region selection dropdown |
| [Room Chat](#room-chat) | Real-time player communication |
| [Floating Text](#floating-text) | Dynamic UI above game objects |
| [Scoreboard UI](#scoreboard-ui) | Player scores and stats display |
| [Player List UI](#player-list-ui) | Connected players display |

{% hint style="success" %}
The **Fusion.UI** install package provides ready-to-use prefabs for all components. Install via **Game Creator → Install**.
{% endhint %}

---

## Session List UI

Display a list of available sessions for players to browse and join.

<figure><img src="../../.gitbook/assets/image (124).png" alt=""><figcaption><p>Session List UI component</p></figcaption></figure>

### Component Properties

| Property | Type | Description |
|----------|------|-------------|
| **Content** | RectTransform | Container for session items |
| **Prefab** | GameObject | Session item prefab to instantiate |
| **Empty Message** | GameObject | Shown when no sessions available |
| **Sort Direction** | Enum | Ascending or Descending |
| **Sort Index** | Integer | Property index to sort by |

### Setup Steps

1. Create a UI Panel with a **Scroll View**
2. Add **Session List UI** component to the panel
3. Assign the Scroll View's **Content** to the Content field
4. Assign a **Session Item UI** prefab to the Prefab field
5. Add a layout component to the Content (Vertical Layout Group recommended)

{% hint style="info" %}
The **Content** must have an auto-layout component: `Vertical Layout Group`, `Horizontal Layout Group`, or `Grid Layout Group`.
{% endhint %}

### Sort Options

| Sort Index | Sorts By |
|------------|----------|
| 0 | Session Name |
| 1 | Player Count |
| 2 | Max Players |
| 3+ | Custom Session Properties |

### Example Setup

```
SessionListPanel (Panel)
├── Session List UI (Component)
├── Scroll View
│   └── Viewport
│       └── Content (Vertical Layout Group)
│           ├── [Session Item 1] (instantiated)
│           ├── [Session Item 2] (instantiated)
│           └── ...
└── EmptyMessage (Text: "No sessions found")
```

### Integration Flow

```
┌─────────────────────────────────────────────────┐
│           Session List Flow                      │
├─────────────────────────────────────────────────┤
│                                                  │
│   Join Lobby                                     │
│        │                                         │
│        ▼                                         │
│   On Session List Updated (Event)                │
│        │                                         │
│        ▼                                         │
│   Session List UI auto-populates                 │
│        │                                         │
│        ▼                                         │
│   Player clicks Join Button                      │
│        │                                         │
│        ▼                                         │
│   Join Session instruction executes              │
│                                                  │
└─────────────────────────────────────────────────┘
```

{% hint style="info" %}
Sessions marked as **not visible** do not appear in the list.
{% endhint %}

---

## Session Item UI

Represents individual entries within the session list.

<figure><img src="../../.gitbook/assets/image (126).png" alt=""><figcaption><p>Session Item UI component</p></figcaption></figure>

### Component Properties

| Property | Type | Description |
|----------|------|-------------|
| **Alternate Background** | Image | Optional alternating row background |
| **Join Button** | Button | Button to join this session |
| **Fields** | Array | Data fields to display |

### Field Configuration

Each field displays specific session data:

| Field Property | Description |
|----------------|-------------|
| **Text** | UI Text component to display data |
| **Use Format** | Enable string formatting |
| **Use Color** | Enable dynamic coloring |
| **Property** | Which session property to display |

### Formatting Options

{% hint style="info" %}
**Percentage Formatting**
Use `{0:P}` to convert 0.99 to 99%.

**Currency Formatting**
Use `{0:C}` to convert 1000 to $1,000.00.

**Number Formatting**
Use `{0:N}` to convert 1000 to 1,000.
{% endhint %}

### Available Session Properties

| Property | Type | Description |
|----------|------|-------------|
| Session Name | String | Name of the session |
| Player Count | Number | Current players |
| Max Players | Number | Maximum allowed |
| Region | String | Session region |
| Is Open | Boolean | Accepting joins |
| Custom Properties | Various | Your custom properties |

### Example Prefab Structure

```
SessionItem (Session Item UI)
├── Background (Image)
├── SessionName (Text) [Field 0]
├── PlayerCount (Text) [Field 1: "{0}/{1}"]
├── Region (Text) [Field 2]
├── MapName (Text) [Field 3: Custom Property]
└── JoinButton (Button)
```

{% hint style="success" %}
You can display **session properties** set via the Set Session Property instruction.
{% endhint %}

---

## Region Dropdown UI

Display available Photon regions in a dropdown menu.

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption><p>Region Dropdown UI</p></figcaption></figure>

### Setup

1. Create a **Dropdown** UI element (standard Unity UI or TMP)
2. Add the **RegionDropdownUI** component
3. The dropdown auto-populates with enabled regions from [Settings](settings.md)

### Features

- Automatically populates from Fusion Settings
- Selected region saved to PlayerPrefs
- Persists across sessions
- Accessible via property getter

### Accessing Selected Region

```
Property Getter: {Selected Region}
```

Use in **Start Game** instruction:

```
Trigger: On Play Button Click
└── Instructions:
    └── Start Game
        ├── Region: {Selected Region}
        └── ...
```

{% hint style="success" %}
The selected region is automatically stored in PlayerPrefs and restored when the game restarts.
{% endhint %}

---

## Room Chat

Real-time text communication between players within a session.

<figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption><p>Room Chat component</p></figcaption></figure>

### Component Properties

| Property | Type | Description |
|----------|------|-------------|
| **Prefab** | GameObject | Chat message prefab (requires Text/TMP) |
| **Input** | InputField | Text input for typing messages |
| **Background** | Image | Fades based on focus state |
| **Container** | ScrollRect | Scroll view for chat entries |

### Settings

<figure><img src="../../.gitbook/assets/Screenshot 2024-08-18 at 6.46.06 PM.png" alt=""><figcaption><p>Room Chat settings</p></figcaption></figure>

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Activate On Input** | Boolean | `true` | Enable input key activation |
| **Input Trigger** | KeyCode | `Return` | Key to activate chat |
| **Max Lines** | Integer | `50` | Maximum stored messages |
| **Max Visible Lines** | Integer | `5` | Visible when unfocused |
| **Fade Out Start** | Float | `5` | Seconds before fade starts |
| **Fade Out Duration** | Float | `1` | Fade animation duration |
| **Background Fade Out Duration** | Float | `0.5` | Background fade duration |
| **Disable Player When Typing** | Boolean | `true` | Disable movement while typing |
| **Unseen Messages** | PropertySet | - | Track unread message count |

### Chat Message Prefab

Create a simple prefab with:
- Text or TextMeshProUGUI component
- Optional background image
- Optional sender name field

### Usage Example

```
Chat Prefab Structure:
├── ChatMessage (RectTransform)
│   ├── SenderName (Text)
│   └── MessageText (Text)
```

### Sending Messages via Visual Scripting

```
Trigger: On Custom Event "SendChat"
└── Instructions:
    └── Send Chat Message
        └── Message: {Local Variable: ChatInput}
```

### Chat Events

| Event | Description |
|-------|-------------|
| **On Chat Message Received** | New message from any player |
| **On Chat Focus Changed** | Chat gained/lost focus |

---

## Floating Text

Generate dynamic UI text above game objects (nameplates, damage numbers, chat bubbles).

<figure><img src="../../.gitbook/assets/image (127).png" alt=""><figcaption><p>Floating Text instruction</p></figcaption></figure>

### Instruction Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Target** | GameObject | - | Object to display above |
| **Text** | String | - | Text to display |
| **Prefab** | GameObject | Auto-generated | Custom UI prefab |
| **Offset** | Vector3 | (0, 2, 0) | Position offset from target |
| **Duration** | Float | `0` | Display time (0 = permanent) |
| **Fade Out Time** | Float | `0.5` | Fade duration |
| **Color** | Color | White | Text tint color |

{% hint style="info" %}
The **prefab** is optional. If not defined, a default UI is generated automatically.
{% endhint %}

### Use Cases

#### Player Nameplate

```
Trigger: On Player Spawned
└── Instructions:
    └── Floating Text
        ├── Target: {Spawned Player}
        ├── Text: {Player Username}
        ├── Duration: 0 (permanent)
        └── Offset: (0, 2.5, 0)
```

#### Damage Numbers

```
Trigger: On Damage Received
└── Instructions:
    └── Floating Text
        ├── Target: {Self}
        ├── Text: "-{Damage Amount}"
        ├── Duration: 1.5
        ├── Color: Red
        └── Offset: (0, 2, 0)
```

#### Chat Bubble

```
Trigger: On Chat Message Received
└── Instructions:
    └── Floating Text
        ├── Target: {Message Sender}
        ├── Text: {Chat Message}
        ├── Duration: 5
        └── Prefab: ChatBubblePrefab
```

### Custom Prefab Requirements

- Must have **Text** or **TextMeshProUGUI** component
- Optional: CanvasGroup for fade effects
- Optional: Custom layout and styling

---

## Scoreboard UI

Display player scores and statistics during gameplay.

### Component Properties

| Property | Type | Description |
|----------|------|-------------|
| **Content** | RectTransform | Container for player entries |
| **Prefab** | GameObject | Player score item prefab |
| **Sort By** | Enum | Property to sort by |
| **Sort Direction** | Enum | Ascending/Descending |

### Setup

1. Create a panel for the scoreboard
2. Add **Scoreboard UI** component
3. Create a player entry prefab with score fields
4. Configure sorting by score/kills/name

### Example Structure

```
Scoreboard Panel
├── Header Row
│   ├── "Player" (Text)
│   ├── "Score" (Text)
│   └── "Kills" (Text)
└── Content (Vertical Layout Group)
    ├── [Player Entry 1]
    ├── [Player Entry 2]
    └── ...
```

---

## Player List UI

Display all connected players in the current session.

### Features

- Auto-updates on player join/leave
- Displays player information
- Supports custom entry prefabs
- Integration with kick functionality

### Setup

1. Create a panel with **Player List UI** component
2. Assign a player entry prefab
3. Configure display fields (name, ping, ready status)

### Example Integration

```
Trigger: On Kick Button Click
└── Condition Branch:
    └── If Is Host:
        └── Kick Player
            └── Player: {Selected Player from List}
```

---

## UI Prefab Gallery

The Fusion.UI package includes these ready-to-use prefabs:

| Prefab | Description |
|--------|-------------|
| **SessionListPanel** | Complete session browser |
| **SessionItem** | Session list entry |
| **ChatPanel** | Full chat interface |
| **ChatMessage** | Chat message entry |
| **Scoreboard** | Player scores display |
| **Nameplate** | Floating player name |
| **RegionSelector** | Region dropdown |
| **LobbyUI** | Complete lobby interface |

---

## Best Practices

### Performance

- Use object pooling for frequently created items
- Limit max visible chat messages
- Disable updates when UI is hidden

### Accessibility

- Use readable font sizes
- Provide color contrast
- Support keyboard navigation

### Responsiveness

- Test on different screen sizes
- Use anchors and layouts properly
- Consider mobile/console UI differences

---

## Related Documentation

- [Sessions](sessions.md) - Session management
- [Settings](settings.md) - Region configuration
- [Visual Scripting Events](visual-scripting/events/) - UI-related events
- [Visual Scripting Instructions](visual-scripting/instructions/) - UI instructions
