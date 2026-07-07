/* Event Date Validation */
function validateEventDates(changedField) {
    const issueDateField = document.getElementById("issue_date");
    const startingDateField = document.getElementById("starting_date");

    if (!issueDateField || !startingDateField) return;
    if (!issueDateField.value || !startingDateField.value) return;

    const eventDate = new Date(issueDateField.value);
    const startingDate = new Date(startingDateField.value);

    if (startingDate <= eventDate) return;

    // Page load check
    if (!changedField) {
        alert(
            "The selected Starting Date is later than the Event Date.\n\n" +
            "This event will only become visible on or after the selected Starting Date."
        );
        return;
    }

    if (changedField === "issue_date") {
        alert(
            "The Event Date cannot be earlier than the Starting Date.\n\n" +
            "This event will not become visible until the Starting Date."
        );

        issueDateField.value = "";
        issueDateField.focus();
    } else {
        alert(
            "The Starting Date cannot be later than the Event Date.\n\n" +
            "This event will only become visible on or after the selected Starting Date."
        );

        startingDateField.value = "";
        startingDateField.focus();
    }
}

const issueDateField = document.getElementById("issue_date");
if (issueDateField) {
    issueDateField.addEventListener("change", function () {
        validateEventDates(this.id);
    });
}

const startingDateField = document.getElementById("starting_date");
if (startingDateField) {
    startingDateField.addEventListener("change", function () {
        validateEventDates(this.id);
    });
}

// Check existing dates once on page load
validateEventDates();
