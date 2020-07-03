---
id: structure
title: Theme Directory Structure
sidebar_label: Structure
---

XL Scripts Framework requires you to follow a **Pre-defined Structure** for your themes. We want to make sure that the Code Quality is clean &amp; Easy for anyone to understand. This will make your themes:
* Organized.
* Encapsulated.
* Easily Customizable.
* Easily Distributable.

To achieve this, We recommend using the following Structure for your Theme directory:

```
.
├── assets
│   ├── css
│   ├── img
│   └── js
├── includes
│   ├── file_to_include_1.php
│   ├── header.php
│   └── example.php
├── top_level_view.php
├── main.php
├── example.php
└── manifest.json
```

:::info
If you look at the **Default** theme inside any XL Scripts Product, you will see this structure being followed.

We recommend using the **Default** theme as a guideline for theme development.
:::