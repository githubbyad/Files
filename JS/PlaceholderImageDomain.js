document.addEventListener("DOMContentLoaded", () => {

    /* Check if any image containers exist on the page */
    const noImageContainers = document.querySelectorAll(".img-content");
    if (!noImageContainers.length) return;

    /* Get current website domain */
    const noImageDomain = window.location.hostname;

    noImageContainers.forEach(noImageContainer => {

        /* Look for the default placeholder image */
        const noImageElement = noImageContainer.querySelector('img[src="/no-image.png"]');
        if (!noImageElement) return;

        /* Prevent duplicate domain text if this script runs multiple times */
        if (noImageContainer.querySelector(".domain-placeholder")) return;

        /* Hide the placeholder image but preserve its layout */
        noImageElement.style.visibility = "hidden";

        /* Create the domain name element */
        const noImageText = document.createElement("span");
        noImageText.className = "domain-placeholder";
        noImageText.textContent = noImageDomain;

        /* Style the domain text */
        noImageText.style.position = "absolute";
        noImageText.style.left = "50%";
        noImageText.style.top = "50%";
        noImageText.style.transform = "translate(-50%, -50%)";
        noImageText.style.fontSize = "1.2rem";
        noImageText.style.fontWeight = "700";
        noImageText.style.color = "#777";
        noImageText.style.textAlign = "center";
        noImageText.style.width = "90%";
        noImageText.style.wordBreak = "break-word";

        /* Add the domain name inside the image container */
        noImageContainer.appendChild(noImageText);
    });
});
