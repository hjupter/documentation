---
description: Install, upgrade, and remove Photon Bundle integrations safely
---

# Install, Upgrade, and Uninstall

Photon Bundle delivers entitlements, while each included integration is installed from its own Asset Store download.

## New installation

Back up or commit the project first. Then:

1. Install Game Creator 2 Core and the matching Game Creator gameplay modules you intend to use.
2. Install Photon Unity Networking 2 version 2.55.
3. Download Photon Module 2 from **My Assets**.
4. Open **Game Creator → Install**, then install **Photon → Core** version 1.5.0.
5. Download the remaining included Photon integrations individually.
6. Install one integration's main package, let Unity compile, then install its Examples package if needed.
7. Repeat for the other integrations.
8. Configure the same Photon App ID, App Version, and region behavior for both test clients.
9. Join the same Photon Cloud room from two clients and exercise every installed integration.

{% hint style="warning" %}
The Game Creator Install window can resolve versioned install packages, but it cannot install or version-check a base Asset Store gameplay module such as Stats 2 or Inventory 2. Import those dependencies before their Photon add-ons.
{% endhint %}

{% hint style="danger" %}
Do not manually extract an installer's `Package.unitypackage` into `Plugins`. Use the **Game Creator Install** window.
{% endhint %}

## Upgrade

1. Back up or commit the project.
2. Update the matching Game Creator gameplay dependencies first.
3. Update Photon PUN to 2.55.
4. Update and install Photon Core 1.5.0.
5. Update the remaining Photon integrations one at a time.
6. Install each integration's Examples package last.
7. Let Unity compile after each integration.
8. Reopen representative prefabs and scenes.
9. Repeat the two-client Photon Cloud test before shipping.

Do not import the old all-in-one Bundle 1.0.2 payload over a current project. It embedded old dependencies and integration copies that can replace newer files.

If the Package Manager shows an older cached download, remove that integration's Asset Store cache entry and download the individual product again.

## Avoid duplicate versions

Keep only one installed root for each integration. For example, do not keep both `Photon.Core@1.4.0` and `Photon.Core@1.5.0`.

{% hint style="warning" %}
A higher Bundle version does not imply that every integration has the same version. Verify the `@version` suffix on each Game Creator install root and its `Version.txt` where supplied.
{% endhint %}

## Uninstall

1. Remove an integration's Examples package.
2. Remove that integration's main package.
3. Repeat for the other module integrations.
4. Remove Photon Core examples.
5. Remove Photon Core last.

Do not remove Photon PUN or shared Game Creator dependencies while another installed integration still uses them.

After removal, search `Assets/Plugins/GameCreator/Installs` for stale `Photon.*@*` roots, let Unity recompile, and reopen the project before deciding the uninstall is clean.

## Validation checklist

For each intended release target, confirm:

* no duplicate Photon integration roots exist
* every integration root and supplied `Version.txt` report the expected version
* representative prefabs and scenes open without missing scripts
* local input controls only the locally owned character
* both clients observe shared state for every installed integration
* leave, reconnect, and late-join paths preserve the expected state
* a WebGL or macOS build compiles if that platform is part of the release

Offline Mode or one Play-mode window is not a Photon Cloud integration test.
