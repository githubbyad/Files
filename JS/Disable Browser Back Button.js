(function() {
  // Get the current page URL path
  const path = window.location.pathname;

  // Only disable browser Back navigation on /edit and /new pages
  if (!path.includes('/edit') && !path.includes('/new')) {
    return;
  }

  // Add an extra history entry for the current page
  // This keeps the user on the same page when the browser Back button is pressed
  history.pushState({
    protectedPage: true
  }, '', window.location.href);

  // Detect when the browser Back button is pressed
  window.addEventListener('popstate', function() {

    // Add the current page back to browser history
    // so the user remains on the /edit or /new page
    history.pushState({
      protectedPage: true
    }, '', window.location.href);
  });
})();
