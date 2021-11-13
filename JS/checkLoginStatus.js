function checkLoginStatus(isRestricted) {
    if (readCookie('Style_s13251')) { // header background - old template
        document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + readCookie('Style_s13251') + ")";
    }
    var url = location.href;
    var qs = url.substring(url.indexOf('?'));

    var myParameters = new Array();
    myParameters = ReadSParameters();
    var sname = myParameters['sname'];
    var a = myParameters['a'];
    var urlhttps = url.startsWith("https");
    var urlarr = new URL(url);
    var surl;
    if (sname.length > 0) {
        var uint = setInterval(function() {
            if (readCookie('AppServer')) {
                clearInterval(uint);
                surl = readCookie('AppServer');
                var sframe = "<center class='cus-frame1-loader mt-5 position-absolute w-100'><i aria-hidden='true' style='font-size: 5rem;' class='fa fa-spinner fa-6 fa-spin text-secondary'></i></center><iframe id=\"frame1\" style=\"border:none;visibility:hidden\" width=\"100%\" src=\"" + surl + sname + qs + "\" onload=\"document.getElementsByClassName('cus-frame1-loader')[0].style.display = 'none';document.getElementById('frame1').style.visibility = 'visible';window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, '#frame1');\"></iframe>"
                document.getElementById("MainContent").innerHTML = sframe;
            }
        }, 10);

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
