---
description: Install, upgrade, and remove Photon Bundle integrations safely
---

# Install, Upgrade, and Uninstall

Photon Bundle delivers entitlements; each included integration is installed
from its own Asset Store download.

## New installation

Back up or commit the project first. Then:

1. Install Game Creator 2 Core 2.18.60 and the matching gameplay modules used
   by the project.
2. Install Photon Unity Networking 2 version 2.55.
3. Download Photon Module 2 from **My Assets** and install Photon Core 1.5.0
   through **Game Creator → Install**.
4. Download each remaining included Photon integration individually.
5. Install one integration's main package, let Unity compile, then install its
   Examples package if needed. Repeat for the other integrations.
6. Configure the same Photon App ID, App Version, and region behavior for both
   test clients, then join the same Photon Cloud room.

{% hint style="warning" %}
The Game Creator Install window can resolve versioned install packages, but it
cannot install or version-check a base Asset Store gameplay module. Import those
gameplay dependencies before their Photon add-ons.
{% endhint %}

{% hint style="danger" %}
Do not manually extract an installer's `Package.unitypackage` into `Plugins`.
Use the **Game Creator Install** window.
{% endhint %}

## Settings

Photon Bundle adds no Game Creator Settings page. Photon Core owns
project-wide Photon settings, and each add-on owns only genuine options
documented by its product. Configure the Photon App ID in PUN's Photon Server
Settings.

## Upgrade

1. Back up or commit the project.
2. Update the matching Game Creator gameplay dependencies first.
3. Update Photon PUN to 2.55, then Photon Core.
4. Update the remaining Photon integrations one at a time, installing each
   Examples package last.
5. Let Unity compile after each integration and repeat the two-client Photon
   Cloud test before shipping.

Keep one installed root for each Photon integration. A higher Bundle version
does not imply that every integration has the same version; check each
product's own install root and `Version.txt` where supplied. Do not import an
older all-in-one Bundle payload over a project that already has newer products.

## Uninstall

1. Remove an integration's Examples package.
2. Remove its main package and repeat for the other integrations.
3. Remove Photon Core last.

Keep Photon PUN and shared Game Creator dependencies while another installed
integration still uses them. After removal, reopen the project and representative
scenes before continuing work.
