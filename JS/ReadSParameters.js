function ReadSParameters(str) {
    var qrStr, spQrStr, isFrontPage, sPos, ePos;
    var twindow, smenu, mad, a, sname, isIndex0;
    var myParameters = new Array();
    if (str == null) {
        qrStr = location.href;
        qrStr = qrStr.replace(/([?&])fbclid=[^&]*/, ''); // For Facebook issue

        isPopUp = qrStr.indexOf('/AdGroupPopup.htm', 0);
        if (isPopUp != -1) {
            qrStr = parent.location.href;
            qrStr = qrStr.replace(/([?&])fbclid=[^&]*/, ''); // For Facebook issue
        }
    } else {
        qrStr = str
    }

    spQrStr = qrStr.substring(1);
    isFrontPage = qrStr.indexOf('.htm', 0);
    isIndex0 = qrStr.indexOf('/index0', 0);
    smenu = getQueryVariable(spQrStr, 'smenu');



    // Front Page
    if (isFrontPage == -1) {
        smenu = SParameters();
        var myArray = new Array();
        myArray = GetMenuParameters(smenu);
        twindow = myArray['twindow'];
        smenu = smenu;
        mad = myArray['mad'];
        a = myArray['a'];
        sname = myArray['sname'];
        //alert('*' + smenu + '*');

    }

    // Parameters stored in hostname.js
    else if ((smenu == '' || smenu == null) && (isIndex0 == -1)) {
        sPos = qrStr.indexOf('/index', 0);
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            //alert(qrStr + '*' + smenu);

        } else {
            sPos1 = qrStr.lastIndexOf('-', qrStr.length);
            sPos2 = qrStr.lastIndexOf('.htm', qrStr.length);
            if (sPos1 != -1 || sPos2 != -1) {
                smenu = qrStr.substring(sPos1 + 1, sPos2);
                //alert('*' + smenu + '*');
            }
        }
        var myArray = new Array();
        myArray = GetMenuParameters(smenu);
        twindow = myArray['twindow'];
        smenu = smenu;
        mad = myArray['mad'];
        a = myArray['a'];
        sname = myArray['sname'];

    }

    // Parameters passed using Querystring
    else {
        twindow = getQueryVariable(spQrStr, 'twindow');
        smenu = getQueryVariable(spQrStr, 'smenu');
        mad = getQueryVariable(spQrStr, 'mad');
        a = getQueryVariable(spQrStr, 'a');
        sname = getQueryVariable(spQrStr, 'sname');
    }

    if (twindow == null) {
        twindow = '';
    }
    if (smenu == null) {
        smenu = '';
    }
    if (mad == null) {
        mad = '';
    }
    if (a == null) {
        a = '';
    }
    if (sname == null) {
        sname = '';
    }

    myParameters['twindow'] = twindow;
    myParameters['smenu'] = smenu;
    myParameters['mad'] = mad;
    myParameters['a'] = a;
    myParameters['sname'] = sname;

    return myParameters;
}
