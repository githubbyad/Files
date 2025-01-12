function OpenLoginPopup(ctl) {
    var s = readCookie('loginStatus');
    var url = window.location.href;
    url = url.replace(/([?&])fbclid=[^&]*/, '');
    console.log(url);
    var siteUh = location.href.match(/:\/\/(.[^/]+)/)[1];
    var siteU = url.match(/:\/\/(.[^/]+)/)[1];
    if (readCookie('hpe_client_domain')) {
        if (siteU != readCookie('hpe_client_domain').split('//').pop().split('/').shift()) {
            siteU = readCookie('hpe_client_domain').split('//').pop().split('/').shift();
        }
    }
    var lb_page = 'hpeditor.asp'; // LB page
    var myParameters = new Array();
    var qrStr;
    if (ctl == null) {
        qrStr = url;
    } else {
        qrStr = ctl.href;
    }
    myParameters = ReadSParameters(qrStr);
    var a = myParameters['a'];

    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        if (readCookie('hpe_client_domain')) {
            if (siteUh != readCookie('hpe_client_domain').split('//').pop().split('/').shift()) {
                window.open('/' + lb_page + '?lb=index0.htm?twindow=Form&pform={{Login}}&smenu=0&sname=target_form2.asp&site=' + siteU, target = '_parent');
                return false;
            }
        }
        if (url.split("/").length == 5) { // Folder Sites
            var folder = "/" + url.split("/")[3];
            window.open(folder + "/index0.htm?pform={{Login}}&sname=target_form2.asp&site=" + siteU + folder, target = "_parent");
            return false;
        }
        window.open('/index0.htm?pform={{Login}}&sname=target_form2.asp&site=' + siteU, target = '_parent');
        return false;
    } else {
        return true;
    }
}
