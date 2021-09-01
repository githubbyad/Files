// BEGIN: Open Mobile URL in full site for Popup Templates
if (window.location.href.indexOf("mdetail.php") != -1 && $(window).width() > 1024) {
  mburl = location.href;
  var mbar= new URL(mburl );
  var murl= mbar.searchParams.get("l");
  window.location.replace(murl);
}
// END: Open Mobile URL in full site for Popup Templates
