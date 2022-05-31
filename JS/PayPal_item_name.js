<script>
var a = document.getElementById("Amount");
var i = document.getElementById("item_name");
var s = document.getElementById("SystemEmailSubject");
var c = document.getElementById("currency_code");
if (a && i && s) {
    if (a.tagName == "SELECT") {
        a.addEventListener("change", function() {
            i.value = s.value + " - " + a.options[a.selectedIndex].text;
        });
    }
    if (a.tagName == "INPUT") {
        i.value = s.value + " - " + a.value + " " + c.value;
    }
}
</script>
