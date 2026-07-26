document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".form-floating select").forEach(function (select) {
        const label = document.querySelector('label[for="' + select.id + '"]');

        if (!label) return;

        function toggleLabel() {
            label.style.display = select.value ? "" : "none";
        }

        toggleLabel();
        select.addEventListener("change", toggleLabel);
    });
});
