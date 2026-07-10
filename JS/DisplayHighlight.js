function DisplayHighlight(divHighlight) {

    var qrStr = location.href.toLowerCase();
    var path = location.pathname.toLowerCase();

    // return early if element doesn't exist
    var element = document.getElementById(divHighlight);
    if (!element) return;

    // default hide
    element.style.display = 'none';

    // homepage only
    if (
        path == "/" ||
        path == "/index.html"
    ) {
        element.style.display = 'block';
        return;
    }

    var sPos, ePos, smenu;

    // indexsports.html
    sPos = qrStr.indexOf('/index', 0);

    if (sPos != -1) {

        ePos = qrStr.lastIndexOf('.', qrStr.length);

        smenu = qrStr.substring(sPos + 6, ePos);

        if (smenu == SParameters()) {
            document.getElementById(divHighlight).style.display = 'block';
        }

    } else {

        // article-title-sports.htm
        sPos = qrStr.lastIndexOf('-', qrStr.length);

        if (sPos != -1) {

            ePos = qrStr.lastIndexOf('.', qrStr.length);

            smenu = qrStr.substring(sPos + 1, ePos);

            if (smenu == SParameters()) {

                // avoid pagination pages
                sPos = qrStr.lastIndexOf('-p', qrStr.length);

                if (sPos == -1) {   
                    element.style.display = 'block';
                }
            }
        }
    }
}
