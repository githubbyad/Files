function protectLink(anchor) {
  const href = anchor.getAttribute('href');

  if (!href || href === '#') {
    return;
  }

  anchor.setAttribute('data-href', href);
  anchor.setAttribute('href', 'javascript:void(0);');
  anchor.onclick = function (event) {
    event.preventDefault();

    if (!readCookie('subscriber_token')) {
      if (window.PaywallWidget) {
        PaywallWidget.showLoginModal();
      }
      return false;
    }

    window.open(href, '_blank');
    return false;
  };
}

function protectLinks(selector) {
  const links = document.querySelectorAll(selector);
  links.forEach(protectLink);
}

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    protectLinks('.AdGroup21 a');
    protectLinks('#Ad11 a');
    // or any selector string you want
  }
});
