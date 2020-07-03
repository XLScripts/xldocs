---
id: reference
title: Functions available inside Templates
sidebar_label: Available Functions
---

List of all the Functions that can be used inside the Templates.

## `$theme_view($name, $data = null)`

This function is **Only Availble inside Templates**. It is used to load a Template from the **Current Theme Directory**. You can use this function to load Relative Templates. **The $ is Required**.

**Usage:** 
```php
$theme_view('includes/header')` // Includes the 'header' template.
```

**Arguments:**

| Argument  | Description | Required | Default |
| ------------- | ------------- | ---------- | ----- |
| `$name`  | Relative Path to Template.  | TRUE | `undefined` |
| `$data`  | Array of Variables.  | FALSE | `null` - Will use the Data from the `Greater Context` by Default |

:::info
`Greater Context` refers to the Data that has been passed to **Core Templates**. The data that is available inside **Core Templates** will always be available to the **templates included inside the Core Templates**.
:::

## `$assets($path)`

This function is **Only Availble inside Templates**. It is used to load Assets from the `assets` directory in the **Current Theme Directory**. You can use this function to load Relative Assets inside your Templates. **The $ is Required**.

**Usage:** 
```php
<link rel="stylesheet" href="<?php $assets('css/style.css'); ?>">
<script type="text/javascript" src="<?php $assets('js/app.js'); ?>"></script>
```

**Arguments:**

| Argument  | Description | Required | Default |
| ------------- | ------------- | ---------- | ----- |
| `$path`  | Relative Path to Asset.  | TRUE | `undefined` |

:::info
The `$assets()` function will only return assets placed inside the `assets` folder.

You must follow the Proper structure to develop your themes.
:::

## Global Functions

These functions are not limited only to templates, You can use these functions anywhere. They do not require the **$** sign as these are normal PHP functions.

### public_assets($path)

This function is used to Assets from the `public` directory in your **Website Root Directory**. You can use this function to load Public Assets that are available to All Themes &amp; All Templates.

**Usage:** 
```php
<link rel="stylesheet" href="<?php public_assets('css/bootstrap.min.css'); ?>">
<script type="text/javascript" src="<?php public_assets('js/jquery.min.js'); ?>"></script>
```

**Arguments:**

| Argument  | Description | Required | Default |
| ------------- | ------------- | ---------- | ----- |
| `$path`  | Path to Asset inside `public` Directory.  | TRUE | `undefined` |

:::info
This function is similar to `$assets()`, but It loads assets from the `public` directory from your **Website's Root** whereas `$assets()` loads the assets from the `assets` folder of the **Current Theme Directory**.
:::

### anchor_to($path)

This function is used to print a URL to a **Page of your Website**. 

**Usage:**
```php
<a href="<?php anchor_to('page/terms-conditions') ?>">Terms & Conditions</a>

<form method="POST" action="<?php anchor_to('auth/login') ?>">
    <label>Username</label>
    <input type="text" name="username" placeholder="Username">
    <label>Password</label>
    <input type="password" name="password" placeholder="Password">
</form>
```

| Argument  | Description | Required | Default |
| ------------- | ------------- | ---------- | ----- |
| `$path`  | The **URI** of the Page. (Permalink / Slug)  | TRUE | `undefined` |

### esc($str, $html)

This function is used to escape HTML before printing. Set the 2nd Arugment to true for Decoding HTML entities (Useful for Printing JS, and Other HTML Tags)

**Usage:**
```php
<span class="title">Name: <?php echo esc($name); ?>
```

| Argument  | Description | Required | Default |
| ------------- | ------------- | ---------- | ----- |
| `$str`  | The value to escape  | TRUE | `undefined` |
| `$html` | Set this to true for printing HTML tags | FALSE | `false` |


:::info
This list only includes the most commonly used functions for Theme Development.

There are a lot of other functions. Refer to `root/application/helpers/main_helper.php` to view a List &amp; Definitions of all available Global Functions.
:::