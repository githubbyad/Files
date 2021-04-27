function checkLoginStatus(isRestricted) {
    url = location.href;
    var qs = url.substring(url.indexOf('?'));

    var myParameters = new Array();
    myParameters = ReadSParameters();
    var sname = myParameters['sname'];
    var a = myParameters['a'];
    var urlhttps = url.startsWith("https");
    var urlarr = new URL(url);
    var surl = urlarr.searchParams.get("as"); // get server domain
    if (sname.length > 0) {
        if (urlhttps == true) {
            if (surl == null) {
                surl = "https://" + location.href.match(/:\/\/(.[^/]+)/)[1];
            }
            var sframe = "<iframe id=\"frame1\" style=\"border:none;\" width=\"100%\" src=\"" + surl + "/" + sname + qs + "\" onload=\"iFrameResize({log:true}, '#frame1');\"></iframe>"
        } else {
            if (surl == null) {
                surl = "http://" + location.href.match(/:\/\/(.[^/]+)/)[1];
            }
            var sframe = "<iframe id=\"frame1\" style=\"border:none;\"  width=\"100%\" src=\"" + surl + "/" + sname + qs + "\" onload=\"iFrameResize({log:true}, '#frame1');\"></iframe>"
        }
        document.getElementById("MainContent").innerHTML = sframe;
    } else {
        if (a == 1) {
            var s = readCookie('loginStatus');
            if (s != 'Yes') {
                var divAccess1 = document.getElementById('divAccess');
                if (divAccess1 != null) {
                    document.getElementById('divAccess').style.display = 'none';
                    OpenLoginPopup();
                    document.getElementById('divMain').style.display = 'none';
                }
                return false;
            } else {
                var divMain1 = document.getElementById('divMain');
                if (divMain1 != null) {
                    document.getElementById('divMain').style.display = 'block';
                }
                return true;
            }
        } else {
            var divMain = document.getElementById('divMain');
            if (divMain != null) {
                document.getElementById('divMain').style.display = 'block';
            }
            return true;
        }
    }
}
