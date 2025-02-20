function GetGoogleAnalytics(event, eventLabel = '', eventUrl = '') {
  let eventCategory;

  // Extract category if ":" exists
  const indexOfColon = event.indexOf(':');
  if (indexOfColon !== -1) {
      eventCategory = event.substring(0, indexOfColon).trim().toUpperCase();
      eventLabel = eventLabel || event.substring(indexOfColon + 1).trim(); // Default: Part after ':'
  } else {
      eventCategory = 'GENERAL'; // Default category (uppercase)
      eventLabel = eventLabel || event; // Default label
  }

  eventUrl = eventUrl || window.location.href; // Default: Current URL

  // Send event to GA4
  gtag('event', eventCategory, { // Uppercase event category
      'event_category': eventCategory,
      'event_label': eventLabel,
      'page_title': document.title,
      'page_location': eventUrl,
      'page_path': new URL(eventUrl).pathname,
      'referrer': document.referrer,
      'event_callback': function () {
          console.log(`${eventCategory}: ${eventLabel} tracked successfully.`);
      }
  });
}

// Auto-track different link types when page loads
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
      document.querySelectorAll("a").forEach(link => {
          let url = link.href;
          let linkText = link.textContent.trim();

          // Find an image inside <a> with class starting with "custom_adgroup_"
          let img = link.querySelector("img[class^='custom_adgroup_']");
          if (img) {
              // Add onclick to <a>, using <img> title if available
              link.setAttribute(`onclick`, `GetGoogleAnalytics('AD: ${img.title || 'Ad Image'}', '${url}');`);
          }
          else if (/.*-p[1-9]\d*-[1-9]\d*\.htm$/.test(url)) {
              // Track article clicks
              link.setAttribute(`onclick`, `GetGoogleAnalytics('ARTICLE: ${linkText}', '${url}');`);
          }
          else if (link.classList.contains("dropdown-item")) {
              // Track submenu clicks
              link.setAttribute(`onclick`, `GetGoogleAnalytics('SUBMENU: ${linkText}', '${url}');`);
          }
          else if (link.classList.contains("nav-link")) {
              // Track menu clicks
              link.setAttribute(`onclick`, `GetGoogleAnalytics('MENU: ${linkText}', '${url}');`);
          }
      });
  }
});
