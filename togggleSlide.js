var getHeight = function(el) {
        el.style.display = "block";
        var x = el.offsetHeight;
        el.style.display = "none";
        return x;
    },
    toggleSlide = function(el, tm) {
        var el_max_height = 0;

        if (el.getAttribute('data-max-height')) {
            if (el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
                el.style.maxHeight = el.getAttribute('data-max-height');
            } else {
                el.style.maxHeight = '0';
            }
        } else {
            el_max_height = getHeight(el) + 'px';
            el.style['transition'] = 'max-height ' + tm + 's ease-in-out';
            el.style.overflowY = 'hidden';
            el.style.maxHeight = '0';
            el.setAttribute('data-max-height', el_max_height);
            el.style.display = 'block';
            setTimeout(function() {
                el.style.maxHeight = el_max_height;
            }, 10);
        }
    };
