(function () {
    'use strict';

    document.addEventListener('scroll', function () {
        var $nav = document.querySelector('.navigation');
        var $navLogo = $nav.querySelector('.logo');

        if (window.scrollY > 200) {
            $navLogo.classList.remove('is-large');
            $navLogo.classList.add('is-small');
        } else {
            $navLogo.classList.remove('is-small');
            $navLogo.classList.add('is-large');
        }
    });
}());
