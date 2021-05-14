function DisplayHighlight(divHighlight) {
    var qrStr = location.href;
    if (qrStr.indexOf("/index.html") != -1) { // Front Page New
        document.getElementById(divHighlight).style.display = 'block';
    }
    var isFrontPage = qrStr.indexOf('.htm', 0);
    if (isFrontPage == -1) { // Front Page
        document.getElementById(divHighlight).style.display = 'block';
    } else {
        var sPos, ePos, smenu;
        sPos = qrStr.indexOf('/index', 0);
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            if (smenu == SParameters()) {
                document.getElementById(divHighlight).style.display = 'block';
            }
        } else {
            sPos = qrStr.lastIndexOf('-', qrStr.length);
            if (sPos != -1) {
                ePos = qrStr.lastIndexOf('.', qrStr.length);
                smenu = qrStr.substring(sPos + 1, ePos);
                if (smenu == SParameters()) {
                    sPos = qrStr.lastIndexOf('-p', qrStr.length);
                    if (sPos == -1) {
                        document.getElementById(divHighlight).style.display = 'block';
                    }
                }
            }
        }
    }
}
