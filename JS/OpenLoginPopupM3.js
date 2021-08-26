function OpenLoginPopupM(qrStr) {
    var s = readCookie('loginStatus');
    var pg = 'a';
    var myParameters = new Array();
    myParameters = ReadSParameters(qrStr);
    var sg = 'sp';
    var a = myParameters['a'];
    var as = readCookie('AppServer');
    var st = window.location.hostname;
    var lg = '.' + pg + sg;
    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        window.location = as + 'target_form2' + lg + '?pform={{Login}}&sname=target_form2' + lg + '&site=' + st;
        return false;
    } else {
        return true;
    }
}
