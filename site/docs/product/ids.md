---
id: ids
title: Instant Domain Search
sidebar_label: Instant Domain Search
---

## Introduction

![Instant Domain Search](https://i.imgur.com/ZHxF1W5.jpg)

**Instant Domain Search** is a script that packs all the power necessary to create a Domain Searching Website. You can earn money through **Affiliates** or **Ads** on your website.
It features Clean Code, Easily Customized Templates, &amp; SEO Optimization features.

This document will go over the Installation, Basic Usage &amp; Customization of the product along with some useful FAQs.

## Installation
We've tried our best to make installation as user-friendly as possible. Follow the steps down below to install your product:

1. Download the latest package from the [Envato Market](https://codecanyon.net/item/instant-domain-search-script/27345338).
2. Upload the **contents** of `upload.zip` to your **Website Root** (Typically your `public_html` directory)
3. Go to `your-site.com/install` to begin the Installation Procedure.
4. Upon clicking `Next`, you will be prompted to verify your license.
    * You will need the Purchase Code provided to you by [Envato](https://codecanyon.net/item/instant-domain-search-script/27345338).
    * Steps will be provided in order to generate an access token.
    * After generating the token, Enter the purchase code and token into the respective fields.
    * Click Next and your license will be verified!
5. After license verification, a compatibility test will be started.
    * If your server does not meet the minimum requirements, You will have to switch the server or host.
6. Create a New Database and enter the Database Credentials in the next step.
7. Choose the Website's Title, as-well as the Admin Account credentials and Installation will be finished.
8. From here, you can either go visit your website at `your-site.com` or the Admin Panel at `your-site.com/admin`.
9. We do not recommend deleting any files related to the installer, because they are used for Updating your script.

## Creating New Pages

You can use the **Page Manager** inside **Instant Domain Search** to create your own Static Web Pages without any Programming knowledge.

Follow the steps below to create a basic web page:

* Login to your Administrator Panel.
* Go to `Pages Settings`
* Click on **Add New Page**.
* Specify the Title of the new Page.
* You can specify any Permalink (Slug) for this page, However it will be generated automatically if you leave it empty.
* Write the content for this page using the editor.
* Specify the position of the web page (Where to show the link to this page)
* Click on **Add** to create your page.


* Congratulations, Your page should now be live at `your-site.com/page/page-permalink`

## Adding Additional Styles, JavaScripts, Meta Tags & Other Settings

Often times, you will need to add additional **Stylesheets** or **JavaScripts** to your website.

The **Instant Domain Search** Admin Panel provides the ability the add these without having to change anything inside the code!

To update these, follow the following steps:

* Login to your Administrator Panel.
* Go to **Header / Footer Scripts**.
* You can add any **Meta Tags**, **Stylesheets** or **JavaScripts** inside these fields.
    * **Header Scripts** content will only be included inside the head tag.
    * **Footer Scripts** content will be included before the `</body>` tag.


* You can edit your **Ads Settings**, **Analytics Settings**, **Mail Settings** and Other settings in the same way.

## Updating Page Content

You don't require any advanced knowledge of HTML / PHP to change the content of the pages.

If you just wanna add some **Additional Stylesheets or JavaScript**, you can do that from the Admin Panel. You can also edit **Ad settings**, **Page Title** &amp; other **basic information** from the Admin Panel. However, for advanced customization, you will need to edit the Templates.

The **Templates** are placed inside the `YOUR_SITE/application/views/` directory. From here, you can edit the content of different files to achieve your goals.

* If you wanna edit the content of the **Main** page, you will need to edit `/views/main.php`
* Similarly, for editing the **Header** or **Footer**, you will edit `/views/includes/header.php` or `/views/includes/footer.php`
* We don't recommend editing any Admin Templates, however you can also edit those from the same location.

## Updating Affiliate Links

**Instant Domain Search** allows you to earn money through affiliates in addition to ads. By default, The product uses [GoDaddy](https://godaddy.com) as the Affiliate Provider. However, you can easily edit these to use **Whichever Affiliate Program** you want. You can also use different affiliates for different TLDs to maximize profits.

Follow the steps below to change your Affiliate Links:

* Login to your Administrator Panel.
* Go to `TLDs Settings`
* Find the TLD you wanna edit, and Click on the **Pencil** icon under the `Actions` column.
* Scroll down to `TLD Affiliate Link`
* You can add your Affiliate Link in this field.
* You must replace the actual domain name with **{{domain_name}}** inside the textbox.
    * For example
    
    `https://www.godaddy.com/domains/search.aspx?domainToCheck=google.com&checkAvail=1` 
    
    Becomes:
    
    `https://www.godaddy.com/domains/search.aspx?domainToCheck={{domain_name}}&checkAvail=1`
* Congratulations, Your Affiliate Link should now be changed.

## FAQs

Answers to some Frequently Asked Questions about the product.

### 1. Why are my scripts, analytics &amp; ads not getting updated?
:::info
If you're not able to update these settings, then your **Hosting Provider** might be blocking this using a Firewall to avoid **XSS** attacks.

Please contact your Hosting Provider and ask them to unblock the following pages:
* https://www.your-domain.com/ads/ads-settings
* https://www.your-domain.com/analytics/analytics-settings
* https://www.your-domain.com/scripts/header-footer
:::

### 2. How to remove Footer Vendor Links ?
:::info
To remove the Vendor (XL Scripts) links from the footer, you will need to edit the following files:

* `root/application/views/includes/footer-bar.php`
:::

## Your issue is still not resolved ?

If the content inside this document does not resolve your issue, head over to [XL Scripts Support](https://xlscripts.com/support) &amp; Create a Support Ticket using your **Purchase Code**.

We will make sure to assist you asap.