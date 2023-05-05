function Vailidate(New) {
    if (New.uname.value == "") {
        alert("User Name is required");
        New.uname.focus();
        return (false);
    }
    if (New.upassword.value == "") {
        alert("Password is required");
        New.upassword.focus();
        return (false);
    }
    New.SUBMIT.disabled = true;
}
