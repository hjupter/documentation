# User Interface

The **Factions** module comes with a collection of components designed to streamline the creation of UI windows and elements.

All examples that come with the module have been created with them and are flexible to accommodate any type of window.



## Factions List UI

This is one of the most important components and allows to display a list of **Factions** in a list fashion.

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

The **Member** field determines which component the factions are taken from.

The following fields act as filters to display those factions.

* The **Show** dropdown allows to display only factions that are in a particular state. For example, display only those that the Member is in or not.
* The **Show Hidden** toggle determines whether hidden factions should be displayed or not.
* The **Filter** dropdown allows to define whether to only display those factions that are present in a Global or Local List Variable.&#x20;

The **Content** field defines the `Rect Transform` where each prefab instance will be instantiated, for every visible faction.

{% hint style="info" %}
The **Content** value should contain an auto-layout component, such as `Vertical Layout Group`, `Horizontal Layout Group` or `Grid Layout Group`.
{% endhint %}

The **Prefab** is the prefab instantiated inside the _Content_. It must contain a **Faction UI** component, which is automatically configured by its parent.



## Faction List UI Tab

The Faction List UI Tab component is typically used to filter and present factions dynamically within the Faction List UI.

<figure><img src="../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>



## Faction UI

This component is used in tandem with the **Factions List UI** to display a list of quests based on a set of rules and filters.

<figure><img src="../../.gitbook/assets/Screenshot 2024-06-16 at 9.58.12 PM.png" alt=""><figcaption></figcaption></figure>

The **Title**, **Description**, **Member Count**, **Color** and **Sprite** fields are all optional and reference the indexed faction's homonymous values.

The **Reputation Elements**  dynamically display the faction’s reputation status, points, and progress. This is essential for showing the player’s standing with different factions and how close they are to changing their reputation status.

The **Active Elements** section defines a set of optional game objects that are activated/deactivated according to different conditions.

The **Interactive** elements allow to define different types of interactions performed by the player.

For example, the `Button Leave` field instructs a button to leave a faction when clicked.

The `Select Faction` field allows to define a selection element as a button to select this particular faction.



## Selection UI

Upon selecting a faction, any Faction UI component with the _Selection_ keyword will be automatically updated.

<div align="left">

<figure><img src="../../.gitbook/assets/image (82).png" alt="" width="375"><figcaption></figcaption></figure>

</div>

## Scoreboard UI

The Scoreboard UI component is used to display the members of a faction, sorted and presented in a specified format. This component can dynamically update to show the current standings or scores of faction members, based on various criteria.

{% hint style="success" %}
The Scoreboard UI component provides a structured interface to display a list of faction members, sorted and formatted according to the specified settings. This is useful for creating leaderboards, rankings, or any other type of member listing within a faction.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>

The **Faction** field determines which faction’s members to display. If set to “Any”, it will display members from all factions. If set to “Specific”, you can choose a particular faction.

The **Content** field is UI container that will hold the instantiated member items.

The **prefab** to be used for each member item in the scoreboard. This prefab should include all the necessary UI elements to display member information.

The **Sort Direction** field determines the order in which members are displayed based on the sort field index.

The **Sort Index** specify the index of the member attribute to sort by. This allows for flexibility in sorting by different criteria, such as points, rank, or other custom fields.

{% hint style="success" %}
By utilizing the Scoreboard UI component, you can create a dynamic and interactive leaderboard or member listing for your factions, enhancing the competitive and social aspects of your game.
{% endhint %}



## Scoreboard Item UI

The Scoreboard Item UI component is designed to represent individual entries within the scoreboard, displaying various attributes of faction members.&#x20;

The **alternate background** option allows you to set an alternate background image for the scoreboard item, which can help distinguish between different rows for better readability.



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

<figure><img src="../../.gitbook/assets/image (84).png" alt=""><figcaption><p>This component can be customized to show different fields such as player names, scores, and other relevant data.</p></figcaption></figure>



## Scoreboard UI Tab

The Scoreboard UI Tab component handles the sorting functionality for the scoreboard. It includes options for sorting direction and the index of the field to sort by.

<figure><img src="../../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>

**Scoreboard UI:** The UI component that displays the scoreboard.

**Sort Direction:** Defines whether the sorting is ascending or descending.

**Sort Index:** Specifies the field used for sorting.

**Active Index and Direction Arrow:** Indicates the current sorting field and direction, providing a visual cue for users.
