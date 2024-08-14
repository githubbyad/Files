function FileValidator(myKey, myControl, fileType) {
    var myValue = trim(myControl.value);
    var reFile;
    if (fileType == 'All') {
        reFile = /^.+\.(([jJ][pP][eE]?[gG])|([jJ][fF][iI][fF])|([gG][iI][fF])|([iI][cC][oO])|([jJ][sS])|([pP][nN][gG])|([cC][sS][sS])|([wW][mM][vV])|([wW][mM][aA])|([pP][dD][fF])|([sS][wW][fF])|([wW][eE][bB][pP])|([mM][pP][3])|([mM][pP][4])|([rR][sS][sS])|([tT][xX][tT])|([mM][pP][gG])|([mM][pP][eE][gG])|([aA][vV][iI])|([wW][aA][vV])|([aA][iI][fF])|([aA][iI][fF][fF])|([mM][oO][vV])|([hH][tT][mM])|([hH][tT][mM][lL])|([fF][lL][aA])|([xX][mM][lL])|([jJ][sS][oO][nN]))$/;
    }
    if (fileType == 'Image') {
        reFile = /^.+\.(([jJ][pP][eE]?[gG])|([jJ][fF][iI][fF])|([gG][iI][fF])|([iI][cC][oO])|([pP][dD][fF])|([pP][nN][gG])|([fF][lL][aA])|([sS][wW][fF])|([wW][eE][bB][pP]))$/;

    }

    if (myValue != "") {
        if (myValue.search(reFile) == -1) {
            var msg;
            if (fileType == "All")
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid file type.";
            if (fileType == "Image")
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid file type. Valid files: gif, ico, wmv, wma, jpg, jpeg, flv, pdf, png, css, swf, mp3, mp4, rss, txt, mpg, mpeg, avi, wav, aif, aiff, mov, htm, html, fla, xml";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}
