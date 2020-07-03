---
id: templates
title: Creating your Theme Templates
sidebar_label: Creating Templates
---

To make your Theme actually be usable, You will need to define all the **Core Templates** required by the Product. Templates are also called **Views**
:::info
Core Templates refer to the views that are Loaded by the Product. i.e. **main**, **page**, **contact** etc.

Core Templates load other templates inside of them. i.e. The `<head>` tag might be in another template, The `Navbar.php` template is used for the Navigation Bar etc.

Only the **Core Template** is loaded by the Site, It is up to you to load everything else that you may want inside the core template.

Using this workflow, There are absolutely no limitations to the types of themes you can create.
:::

These **Core Templates** are different for each product.

:::info
You should use the structure, and template names of the Default theme to create your Core Templates.
:::

Almost all XL Scripts products use the following templates:

* main.php - This view is generally loaded on the `Index` of your Website.
* page.php - This view is used for the **Dynamic Pages** created by **Page Manager**.
* contact.php - This view is used for the Contact Page.

:::warning
Please note that these views might **not** be used in All Products. And almost every product will have more **Core Templates** that you will need to define for proper working.

Looking at the Structure of the **default** theme gives you a solid idea about the Core Templates.
:::

You will need to create these files inside your **Theme Root Directory**. After creation, your Theme Directory should look like this:

```
.
├── includes
├   ├── head.php
├   ├── navbar.php
├   └── foot.php
├── page.php
├── main.php
├── contact.php
└── manifest.json
```

So far, we haven't really created any **Assets** directories. We'll do that later. The files inside **Includes** are your **Custom Templates**. For now you can just put some random HTML in them for demonstration.

:::info
Custom Templates are files that are included by the **Core Templates**. You can put them anywhere you want, but we recommend organizing them into their own grouped folders.
:::

Consider the following `main.php` file, a typical **template** file follows the following structure:
```php
<!-- Include the Head & Navbar Tempaltes inside this template. -->
<?php $theme_view('includes/head'); /* The <head> Tag section */ ?>
<?php $theme_view('includes/navbar'); /* The Navbar */ ?>

<!-- The Actual Content of this Page -->
<div class="main-content">
    <span class="title">This is the Main Page</span>
</div>

<?php $theme_view('includes/foot'); ?>
```

`$theme_view()` is a Special Function that is available inside Template files. The relative path to the template is provided as an argument. 

You may ignore the `.php` extension inside the Template name, However adding the extension still works as expected.

It is used to load a **Template relative to this Theme**. In the example above, We're loading `head`, `navbar`, `foot` templates from the `includes` directory.

:::info
The **$** symbol before the function name is ***REQUIRED***. As `theme_view()` is a Closure, It requires a **$**.
:::