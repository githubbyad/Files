// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current URL contains '&pkey=&'
    if (window.location.href.includes('&pkey=&')) {
        // Select all anchor elements with an href that includes 'editor2.'
        document.querySelectorAll("a[href*='editor2.']").forEach(a => {
            // Check if the anchor's inner text includes 'PageDesigner'
            if (a.innerText.includes('PageDesigner')) {
                // Add a click event listener to the anchor element
                a.addEventListener('click', (event) => {
                    // Prevent the default link action (navigation)
                    event.preventDefault();
                    // Display an alert with instructions for the user
                    alert("First, click 'submit' to save this new record. <br> Then click 'edit' and use PageDesigner.");
                });
            }
        });
    }
});
