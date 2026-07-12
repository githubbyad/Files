document.addEventListener("DOMContentLoaded", () => {

    /* Check if any image containers exist on the page */
    const containers = document.querySelectorAll(".img-content");
    if (!containers.length) return;

    /* Get current website domain */
    const domain = window.location.hostname;

    containers.forEach(container => {

        /* Look for the default placeholder image */
        const img = container.querySelector('img[src="/no-image.png"]');
        if (!img) return;

        /* Prevent duplicate domain text if this script runs multiple times */
        if (container.querySelector(".domain-placeholder")) return;

        /* Hide the placeholder image but preserve its layout */
        img.style.visibility = "hidden";

        /* Create the domain name element */
        const text = document.createElement("span");
        text.className = "domain-placeholder";
        text.textContent = domain;

        /* Style the domain text */
        text.style.position = "absolute";
        text.style.left = "50%";
        text.style.top = "50%";
        text.style.transform = "translate(-50%, -50%)";
        text.style.fontSize = "1.2rem";
        text.style.fontWeight = "700";
        text.style.color = "#777";
        text.style.textAlign = "center";
        text.style.width = "90%";
        text.style.wordBreak = "break-word";

        /* Add the domain name inside the image container */
        container.appendChild(text);
    });
});
