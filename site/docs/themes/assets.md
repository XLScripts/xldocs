---
id: assets
title: Creating Assets Directory
sidebar_label: Creating Assets Directory
---

While creating a theme, You will also need to ship your Static Assets along with the Templates. These static assets include but are not limited to:

* CSS Files
* JavaScript Files
* Image Files
* Other static files that may be used in your templates.

These static assets **must be placed in the `assets`** directory. The `assets` directory is a **Top-Level** Folder in your theme directory. This `assets` directory will hold all the Static Assets that your theme requires.

:::info
You can include any libraries that you require inside the **assets** directory. However, it's not always necessary.

Many common libraries like **Bootstrap 4** &amp; **jQuery** are already present in the Product by default in the `public` folder of the **Root**. You should load these libraries from the pre-existing files to minimize Size &amp; Loading Times.

Any separate libraries that aren't included in the project by default, will have to be included in the **assets** directory.
:::

We'll create our `assets` and our directory structure should now look as follows:
```
.
├── assets
│   ├── css
│   │   └── style.css
│   ├── img
│   │   ├── cover.png
│   │   └── thumbnail.png
│   └── js
│       └── app.js
├── includes
│   ├── head.php
│   ├── navbar.php
│   └── foot.php
├── main.php
├── page.php
├── contact.php
└── manifest.json
```

#### So how are these assets loaded in the Templates ?

There is a useful function called `$assets($relative/path)` which allows you to reference any files from the local `assets` directory. In other words, The `$assets()` function will only reference files from the Current Theme's `assets` directory.

Loading our `style.css` &amp; `app.js` files in our `head.php` template works as follows:

```php
<!DOCTYPE html>
<html>
    <head>
        <title>This is my first theme.</title>
        <link rel="stylesheet" href="<?php $assets('css/style.css'); ?>">
        <script type="text/javascript" src="<?php $assets('css/style.css'); ?>"></script>
    <head>
```

`$assets()` is a Closure (Anonymous Function) assigned to a variable. Therefore the **$** is **REQUIRED**.

#### Loading assets from the Website's `public` directory.

To load any assets from the `public` directory of the Website, we use a similar function called `public_assets()`. This function is used in the same way as `$assets()` but it references assets from the `public` directory.

`public_assets()` is a normal PHP function, therefore the **$** is not required.