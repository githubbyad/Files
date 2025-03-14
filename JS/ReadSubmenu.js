function ReadSubmenu() {
    let qrStr = location.href;
    if (qrStr.indexOf('&site') != -1) {
        qrStr = qrStr.split('&site').shift();
    }
    if (qrStr.indexOf("/index.html") != -1) {
        return SParameters();
    }
    const isFrontPage = qrStr.indexOf('.htm', 0);
    if (isFrontPage == -1) {
        return SParameters();
    } else {
        let sPos, ePos, smenu;
        sPos = qrStr.indexOf('/index', 0);
        if (qrStr.indexOf('?lb=') != -1) {
            sPos = qrStr.indexOf('=index', 0);
        }
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            if (smenu == SParameters()) {
                return SParameters();
            }
            if (qrStr.indexOf('smenu') != -1) {
                const url = new URL(qrStr);
                const smenup = url.searchParams.get("smenu");
                return smenup;
            } else {
                return smenu;
            }
        } else {
            sPos = qrStr.lastIndexOf('-', qrStr.length);
            if (sPos != -1) {
                ePos = qrStr.lastIndexOf('.', qrStr.length);
                smenu = qrStr.substring(sPos + 1, ePos);
                if (smenu == SParameters()) {
                    sPos = qrStr.lastIndexOf('-p', qrStr.length);
                    if (sPos == -1) {
                        return 'home';
                    }
                } else {
                    return smenu;
                }
            }
        }
    }
}
