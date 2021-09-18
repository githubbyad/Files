// BEGIN: Sticky Ad

$(document).ready(function() {
  if (!$('#stickyrightContent span').length) {
    $('#stickyright').css('display', 'none');
    createCookie('AdStickyR1', 'Yes');
  }
  if (!$('#stickybottomContent span').length) {
    $('#stickybottom').css('display', 'none');
    createCookie('AdStickyB1', 'Yes');
  }
  if (!$('#stickyleftContent span').length) {
    $('#stickyleft').css('display', 'none');
    createCookie('AdStickyL1', 'Yes');
  }
  if (!$('#stickytopContent span').length) {
    $('#stickytop').css('display', 'none');
    createCookie('AdStickyT1', 'Yes');
  }
});

// END: Sticky Ad
