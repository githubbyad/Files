function OpenLoginPopupM(qrStr) {
    var s = readCookie('loginStatus');
    var myParameters = new Array();
    myParameters = ReadSParameters(qrStr);
    var a = myParameters['a'];
    var as = readCookie('AppServer');
    var st = '?site=' + window.location.hostname;
    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        window.location = as + 'loginmobile.asp' + st;
        return false;
    } else {
        return true;
    }
}
