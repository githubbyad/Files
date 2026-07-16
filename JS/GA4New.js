/*
|--------------------------------------------------------------------------
| Google Analytics 4 Tracking
|--------------------------------------------------------------------------
|
| Tracks:
|   - article_view   (Article page loaded)
|   - article_click  (Article link clicked)
|   - menu_click     (Main menu clicked)
|   - submenu_click  (Submenu clicked)
|   - ad_click       (Advertisement clicked)
|   - link_click     (All other links)
|
| Requirements:
|   - gtag.js must already be loaded.
|
*/

document.addEventListener("DOMContentLoaded", function () {

    // Exit if Google Analytics is unavailable
    if (typeof gtag !== "function") {
        return;
    }

    /*
    |--------------------------------------------------------------------------
    | Track Article Page View
    |--------------------------------------------------------------------------
    |
    | Detect article page by:
    |   1. <meta property="og:type" content="article">
    |   2. URL ending with -p12345-67.htm
    |
    */

    const isArticle =
        document.querySelector('meta[property="og:type"][content="article"]') ||
        /-p\d+-\d+\.htm$/i.test(window.location.pathname);

    if (isArticle) {

        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');

        const articleTitle = ogTitle ? ogTitle.content : document.title;
        const articleUrl = ogUrl ? ogUrl.content : window.location.href;

        console.log({
            event: "article_view",
            article_title: articleTitle,
            article_url: articleUrl
        });

        gtag("event", "article_view", {
            article_title: articleTitle,
            article_url: articleUrl,
            page_title: document.title,
            page_location: window.location.href
        });

    }


    /*
    |--------------------------------------------------------------------------
    | Track All Link Clicks
    |--------------------------------------------------------------------------
    */

    document.addEventListener("click", function (e) {

        const link = e.target.closest("a");

        if (!link) return;

        let eventName = "link_click";
        let linkText = "";

        //----------------------------------------------------------
        // Get visible text
        //----------------------------------------------------------

        linkText = link.textContent.trim();

        //----------------------------------------------------------
        // If there is no text, use image attributes
        //----------------------------------------------------------

        if (!linkText) {

            const img = link.querySelector("img");

            if (img) {
                linkText =
                    img.alt?.trim() ||
                    img.title?.trim() ||
                    img.dataset.title?.trim() ||
                    "";
            }

        }

        //----------------------------------------------------------
        // Detect Advertisement
        //----------------------------------------------------------

        const img = link.querySelector("img");

        if (
            img &&
            (
                img.className.includes("custom_adgroup_") ||
                (img.title && img.title.startsWith("AD:"))
            )
        ) {

            eventName = "ad_click";

        }

        //----------------------------------------------------------
        // Detect Article Link
        //----------------------------------------------------------

        else if (/-p\d+-\d+\.htm$/i.test(link.pathname)) {

            eventName = "article_click";

        }

        //----------------------------------------------------------
        // Detect Submenu
        //----------------------------------------------------------

        else if (
            link.classList.contains("dropdown-item") ||
            link.classList.contains("Sub-link") ||
            link.closest(".hpe-in-submenu") ||
            link.closest(".submenubodyhorizontal") ||
            link.closest(".submenubodyvertical")
        ) {

            eventName = "submenu_click";

        }

        //----------------------------------------------------------
        // Detect Main Menu
        //----------------------------------------------------------

        else if (
            link.classList.contains("nav-link") ||
            (
                link.closest("[data-menu]") &&
                !link.closest(".hpe-in-submenu") &&
                !link.closest(".submenubodyhorizontal") &&
                !link.closest(".submenubodyvertical")
            )
        ) {

            eventName = "menu_click";

        }

        //----------------------------------------------------------
        // Debug
        //----------------------------------------------------------

        console.log({
            event: eventName,
            link_text: linkText,
            link_url: link.href,
            page_title: document.title,
            page_location: window.location.href
        });

        //----------------------------------------------------------
        // Send Event
        //----------------------------------------------------------

        gtag("event", eventName, {
            link_text: linkText,
            link_url: link.href,
            page_title: document.title,
            page_location: window.location.href
        });

    });

});
