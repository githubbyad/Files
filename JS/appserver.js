// Get AppServer
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            document.cookie = "AppServer=" + xmlhttp.responseText;
        } else if (xmlhttp.status == 400) {
            console.log('AppServer: There was an error 400');
        } else {
            console.log('AppServer: something else other than 200 was returned');
        }
    }
};
xmlhttp.open("GET", "/lib/app_status.php", true);
xmlhttp.send();