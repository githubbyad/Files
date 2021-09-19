// BEGIN: Sticky Ad
if (document.getElementById('stickytopContent').children.length < 2) {
    document.getElementById("stickytop").style.display = "none";
    createCookie('AdStickyT1', 'Yes');
}
if (document.getElementById('stickybottomContent').children.length < 2) {
    document.getElementById("stickybottom").style.display = "none";
    createCookie('AdStickyB1', 'Yes');
}
if (document.getElementById('stickyleftContent').children.length < 2) {
    document.getElementById("stickyleft").style.display = "none";
    createCookie('AdStickyL1', 'Yes');
}
if (document.getElementById('stickyrightContent').children.length < 2) {
    document.getElementById("stickyright").style.display = "none";
    createCookie('AdStickyR1', 'Yes');
}
// END: Sticky Ad
