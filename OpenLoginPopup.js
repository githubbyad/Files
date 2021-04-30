function OpenLoginPopup(ctl) {
    var s = readCookie('loginStatus');
    var sUrlc = 'https://bulletlink.one'; // Server domain
    var siteD = '{{PutDomain}}';
    var siteU = siteD.split('//').pop().split('/').shift();
    var myParameters = new Array();
    var qrStr;
    if (ctl == null) {
        qrStr = location.href;
    } else {
        qrStr = ctl.href;
    }
    myParameters = ReadSParameters(qrStr);
    var a = myParameters['a'];

    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        window.open('/index0.htm?pform={{Login}}&sname=target_form2.asp&site=' + siteU + '&as=' + sUrlc, target = '_parent');
        return false;
    } else {
        return true;
    }
}
