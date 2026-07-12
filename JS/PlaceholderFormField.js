// Run after the entire page (including images, CSS, etc.) has finished loading
window.addEventListener('load', function () {

    // Look for the form container
    const formBody = document.querySelector('.formbody');

    // Exit if no form container is found
    if (!formBody) {
        return;
    }

    // Loop through all form fields inside the form container
    formBody.querySelectorAll('input, textarea, select').forEach(field => {

        // If the field has an ID and its placeholder is missing or empty
        if (field.id && (!field.hasAttribute('placeholder') || !field.placeholder.trim())) {

            // Generate a placeholder from the ID
            // Example: first_name -> First Name
            let placeholderText = field.id
                .replace(/_/g, ' ')                    // Replace underscores with spaces
                .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word

            // Append * if the field is required
            if (field.hasAttribute('required')) {
                placeholderText += ' *';
            }

            // Set the placeholder
            field.placeholder = placeholderText;
        }
    });
});
