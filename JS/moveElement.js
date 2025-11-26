// Moves an element in the DOM to a new location with optional class modifications
function moveElement(
    oldSelector,
    newSelector,
    position = null,
    mobileScreenSize = null,
    removeClasses = [],
    addClasses = []
) {
    /* oldSelector must have added 'd-none d-lg-flex/d-lg-block' class for smooth transition */
    /* call using this function ---- moveElement('#AdGroup14', '#menuH','afterend','768', 'd-none','d-flex'); */
    // Default position
    if (!position) position = 'afterbegin';

    // Resolve old element
    const oldElement = typeof oldSelector === 'string'
        ? document.querySelector(oldSelector)
        : oldSelector;

    // Resolve new element
    const newLocation = typeof newSelector === 'string'
        ? document.querySelector(newSelector)
        : newSelector;

    if (!oldElement || !newLocation) {
        console.warn('Old element or new location not found.');
        return;
    }

    // Move only on mobile if specified 'mobile' or screen size
    if (mobileScreenSize != null) {
        mobileScreenSize = mobileScreenSize == 'mobile' ? 768 : Number(mobileScreenSize);
        if (window.innerWidth <= Number(mobileScreenSize)) {
            newLocation.insertAdjacentElement(position, oldElement);
        }
    } else {
        newLocation.insertAdjacentElement(position, oldElement);
    }

    // Convert single string → array
    if (typeof removeClasses === "string") {
        removeClasses = [removeClasses];
    }
    if (typeof addClasses === "string") {
        addClasses = [addClasses];
    }

    // Remove classes
    if (Array.isArray(removeClasses)) {
        removeClasses.forEach(c => oldElement.classList.remove(c));
    }

    // Add classes
    if (Array.isArray(addClasses)) {
        addClasses.forEach(c => oldElement.classList.add(c));
    }
}
