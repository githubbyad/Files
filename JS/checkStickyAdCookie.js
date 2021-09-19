function checkStickyAdCookie() {
    var myParameters = new Array();
    myParameters = ReadSParameters(location.href);
    var smenu = myParameters['smenu'];
    var isClosed;
    isClosed = readCookie("AdStickyR" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickyright");
    isClosed = readCookie("AdStickyB" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickybottom");
    isClosed = readCookie("AdStickyL" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickyleft");
    isClosed = readCookie("AdStickyT" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickytop");
    if (document.getElementById('stickytopContent').children.length < 2) {
        CloseStickyAd("stickytop");
    }
    if (document.getElementById('stickybottomContent').children.length < 2) {
        CloseStickyAd("stickybottom");
    }
    if (document.getElementById('stickyleftContent').children.length < 2) {
        CloseStickyAd("stickyleft");
    }
    if (document.getElementById('stickyrightContent').children.length < 2) {
        CloseStickyAd("stickyright");
    }
}
