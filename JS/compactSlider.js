(function () {

    var compactSliderElement = document.querySelector('.compact-slider');
    if (!compactSliderElement) return;

    // Desktop only
    if (window.innerWidth <= 767) return;

    // Find existing slider script
    var compactSliderScript = Array.from(document.scripts).find(function (s) {
        return s.textContent.includes('articlePicture793_step');
    });

    if (!compactSliderScript) return;

    // Extract existing image array
    var compactSliderMatch = compactSliderScript.textContent.match(/var imgs\s*=\s*(\[[\s\S]*?\]);/);
    if (!compactSliderMatch) return;

    var compactSliderImages = JSON.parse(compactSliderMatch[1]);

    // Preload images and find maximum natural width
    Promise.all(compactSliderImages.map(function (item) {

        return new Promise(function (resolve) {

            var compactPreloadImage = new Image();

            compactPreloadImage.onload = function () {
                resolve(compactPreloadImage.naturalWidth);
            };

            compactPreloadImage.onerror = function () {
                resolve(0);
            };

            compactPreloadImage.src = item.src;

        });

    })).then(function (compactImageWidths) {

        var compactMaxWidth = Math.max.apply(null, compactImageWidths);
        if (!compactMaxWidth) return;

        // Calculate fixed 3:2 dimensions
        var compactAvailableWidth = compactSliderElement.parentElement.clientWidth;
        var compactFinalWidth = Math.min(compactMaxWidth, compactAvailableWidth);
        var compactFinalHeight = compactFinalWidth * 2 / 3;

        // Set fixed slider dimensions
        compactSliderElement.style.width = compactFinalWidth + 'px';
        compactSliderElement.style.height = compactFinalHeight + 'px';
        compactSliderElement.style.display = 'flex';
        compactSliderElement.style.alignItems = 'center';
        compactSliderElement.style.justifyContent = 'center';

        // Center and contain images
        var compactSliderImage = compactSliderElement.querySelector('.compact-slider-img');

        if (compactSliderImage) {
            compactSliderImage.style.width = '100%';
            compactSliderImage.style.height = '100%';
            compactSliderImage.style.objectFit = 'contain';
        }

    });

})();
