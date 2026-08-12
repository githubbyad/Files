// Restrict Specific Articles
(function () {

    var restrictedUrls = [
        '/the-saudi-shift-why-british-footballers-swapped-the-premier-league-for-the-gulf-p33522-404.htm'
        // Add more restricted URLs here
    ];

    var currentPath = window.location.pathname;
    var subscriberToken = readCookie('subscriber_token');
    var returnUrl = readCookie('curl');

    // Check if current page is restricted
    if (restrictedUrls.indexOf(currentPath) !== -1) {

        if (!subscriberToken) {

            // Save the restricted page URL
            createCookie('curl', window.location.href);

            // Redirect to subscriber login
            window.location.href = '/LoginSubscriber';

        }

    }

    // After login, return user to the saved restricted page
    if (subscriberToken && returnUrl) {

        eraseCookie('curl');

        window.location.href = returnUrl;

    }

})();
