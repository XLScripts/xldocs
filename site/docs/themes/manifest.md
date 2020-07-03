---
id: manifest
title: The Manifest File
sidebar_label: The Manifest
---

Each theme includes a `manifest.json` file. The only purpose this file serves, is to provide information about this theme. It includes basic information like:
* The name of this theme.
* The version of this theme.
* The author of this theme, and their website.
* The Cover Image of this theme (Relative Path)
* The Thumbnail Image of this theme (Relative Path)

This file uses **JSON**. A Typical `manifest.json` file looks like this:
```json
{
    "name": "My Theme",
    "version": 1.0,
    "author": {
        "name": "XL Scripts",
        "url": "https://xlscripts.com"
    },
    "thumbnail" : "assets/promotion/thumbnail.png",
    "cover": "assets/promotion/cover.png"
}
```

Just by creating this manifest file, You will see results inside your Admin Panel. If you create this file in `/views/themes` &amp; go to `your-site.com/general/themes`, you will see your Theme Appear inside the **Theme Gallery**. The Cover (Assigned inside the Manifest) will also be shown as the Theme cover. The Name and the Author information will also be shown in the card.

:::danger
If you activate the theme at this point, You will see errors on your Main Website. This is because **No Templates have been created yet**.
:::

:::info
The **default** theme serves as an Example &amp; Guideline for theme development.
:::