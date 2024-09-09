# User Interface

The **Fusion** module comes with a collection of components designed to streamline the creation of UI windows and elements.

All examples that come with the module have been created with them and are flexible to accommodate any type of window.

***

## Session List UI

This is one of the most important components and allows to display a list of avalable sessions to join.

<figure><img src="../../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

The **Content** field defines the `Rect Transform` where each prefab instance will be instantiated, for every visible session.

{% hint style="info" %}
The **Content** value should contain an auto-layout component, such as `Vertical Layout Group`, `Horizontal Layout Group` or `Grid Layout Group`.
{% endhint %}

The **Prefab** is the prefab instantiated inside the _Content_. It must contain a **Session Item UI** component, which is automatically configured by its parent.

The **Empty Message** is an option message to display when session list is empty.

The **Sort Direction** field determines the order in which members are displayed based on the sort field index.

The **Sort Index** specify the index of the session property to sort by. This allows for flexibility in sorting by different criteria, such as sessio name, player count, sessio properties and more.

<figure><img src="../../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
The Fusion UI package provides a ready-to-use prefab for the session list.
{% endhint %}

{% hint style="info" %}
Sessions marked as not visible are not displayed here.
{% endhint %}

## Session Item UI

The Session Item UI component is designed to represent individual entries within the session list, displaying various properties of a session.&#x20;

<figure><img src="../../.gitbook/assets/image (93).png" alt=""><figcaption></figcaption></figure>

The **alternate background** option allows you to set an alternate background image for the scoreboard item, which can help distinguish between different rows for better readability.

The **Join Button** is required to allow playes to join the specifc session, this button can be disabled if the session is not open.

### The fields

Fields can be customized to display specific data of types **string** or **number**.

The **Text** field is the component that displays the data

**Use Format** enables the formatting feature for the associated text or number field.

{% hint style="info" %}
**Percentage Formatting**\
Use `{0:P}` to convert 0.99 to 99%.

**Currency Formatting**\
Use `{0:C}` to convert 1000 to $1,000.00.

**Number Formatting**\
Use `{0:N}` to convert 1000 to 1,000.
{% endhint %}

**Use Color** enables the option to apply color to the field using properties

{% hint style="success" %}
You can use fields to display **session properties** as well.
{% endhint %}



***

## Region Selection

It is possibe to display availabe regions by attaching a **RegionDropdownUI** component in a DropDown menu. This will display enabled regions in [**Fusion Module Settings**](settings.md).

<figure><img src="../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
The **selected** region by this drop menu will be stored in player prefs. The selected region is accessibe through a Game Creator 2 string property.
{% endhint %}

## Room Chat

The Room Chat component is designed to facilitate real-time communication between players within a game session. It offers various customizable options to enhance the chat experience, ensuring smooth interaction and a polished user interface.

<figure><img src="../../.gitbook/assets/image (3) (1) (1).png" alt=""><figcaption></figcaption></figure>

**Prefab:** a game object that requirs to have a Text or TextMeshPro UI component

**Input:** the input field to type messages

**Background:** an image component that can fade in fade out depending if room chat is focused or not.

**Container:**  a scroll rect view that contains chat entries

### Settings

<figure><img src="../../.gitbook/assets/Screenshot 2024-08-18 at 6.46.06 PM.png" alt=""><figcaption></figcaption></figure>

**Activate On Input:** if enabled chat input field can be activated with an specifed input trigger.

**Input Trigger:** the input key to activate the chat.

**Max Lines:** how many lines of messages can the room chat keep

**Max Visible Lines:**  how many chat entries stay visible when chat is unfocused/unselected

**Fade Out Start:** how long until starts fading out since the last message received

**Fade Out Duration:** the duratin of the messages fade out

**Background Fade Out Duration:** how long it takes to fade out the backgroud image

**Disable Player When Typing:** if enabled the player movemet will be disabled when typing

**Unseen Messages:** sets a property with the number of unseen messags when chat is unfocused



***

## Floating Text

Floating text serves as an instruction to generate user interface text above a specific target. This feature is commonly utilized for displaying character nameplates, chat bubbles, and other similar elements.

<figure><img src="../../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

**Target**: the target where the floating text is going to be displayed

**Text:** the text that is going to be displayed in the floating UI

**Prefab:** an optional prefab which you can customize to your needs the only thing needed is a Text or  TextMeshPro UI component.

**Offset:** an offset value to display the UI

**Duration:** how long is this UI going to be displayed, mostly useful for bubble chat. If set to 0 it will stay forever.

**Fade Out Time:** the time takes to fade out if duratin is greater than 0

**Color:** a color to tint the text component.

{% hint style="info" %}
The **prefab** is optional but if you don't define it a preconfigured UI will be generated autmatically.
{% endhint %}
