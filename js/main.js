(function () {
    'use strict';

    document.addEventListener('scroll', function () {
        var $nav = document.querySelector('.navigation');
        var $navLogo = $nav.querySelector('.logo');

        if (window.scrollY > 120) {
            $navLogo.classList.add('is-small');
        } else {
            $navLogo.classList.remove('is-small');
        }
    });



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // | Google Universal Analytics                                            |
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // More information about the Google Universal Analytics:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/
    // http://mathiasbynens.be/notes/async-analytics-snippet#universal-analytics
    (function () {
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));

        // Create tracker object
        ga('create', 'UA-52857433-1');

        // Send a page view
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
        ga('send', 'pageview');

        // // Track events
        // // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
        // $('body').on('click', '[data-ga-category]', function (e) {
        //     var $target = $(e.currentTarget);
        //     var action = $target.attr('data-ga-action') || undefined;     // required
        //     var category = $target.attr('data-ga-category') || undefined; // required
        //     var label = $target.attr('data-ga-label') || undefined;
        //     var value = parseInt($target.attr('data-ga-value'), 10) || undefined;

        //     // Register the event
        //     if (ga && category && action) {
        //         ga('send', 'event', category, action, label, value, {});
        //     }
        // });
    }());

}());
