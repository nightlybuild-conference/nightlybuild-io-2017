'use strict';

var express = require('express'),
    config = require('./config'),
    router = express.Router();

// Start Routes
router.get('/', function (req, res) {
    var data = {
        title: 'NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'index'
    };

    res.render('lib/views/pages/index.html', data);
});
/*
// Tickets Routes
router.get('/ticket', function (req, res) {
    var data = {
        title: 'Ticket | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'ticket'
    };

    res.render('lib/views/pages/ticket.html', data);
});*/

// Speaker Routes
router.get('/speaker', function (req, res) {
    res.redirect(301, '/speakers');
});

router.get('/speakers', function (req, res) {
    var data = {
        title: 'Speakers | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'speakers'
    };

    res.render('lib/views/pages/speakers.html', data);
});


// Partner Routes
router.get('/partner', function (req, res) {
    res.redirect(301, '/partners');
});

router.get('/partners', function (req, res) {
    var data = {
        title: 'Partners | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'partners'
    };

    res.render('lib/views/pages/partners.html', data);
});

// Call for papers Routes
router.get('/call-for-papers', function (req, res) {
    var data = {
        title: 'Call for Papers | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'cfp'
    };

    res.render('lib/views/pages/call-for-papers.html', data);
});

// At the event Routes
router.get('/atevent', function (req, res) {
    var data = {
        title: 'At The Event | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'atevent'
    };

    res.render('lib/views/pages/at-the-event.html', data);
});


// Schedule Routes
router.get('/schedule', function (req, res) {
    var data = {
        title: 'Schedule | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'schedule'
    };

    res.render('lib/views/pages/schedule.html', data);
});

/*
// About Routes
router.get('/about', function (req, res) {
    var data = {
        title: 'Who we are | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'about'
    };

    res.render('lib/views/pages/about.html', data);
});
*/

// Location Routes
router.get('/location', function (req, res) {
    var data = {
        title: 'Location | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'location'
    };

    res.render('lib/views/pages/location.html', data);
});

// Legal Routes
router.get('/legal', function (req, res) {
    var data = {
        title: 'Legal Information | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'legal'
    };

    res.render('lib/views/pages/legal.html', data);
});

// Code of Conduct Routes
router.get('/coc', function (req, res) {
    var data = {
        title: 'Code Of Conduct | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'coc'
    };

    res.render('lib/views/pages/codeofconduct.html', data);
});

/*
// Event Coverage Routes
router.get('/event', function (req, res) {
    var data = {
        title: 'Event Coverage | NightlyBuild 2017 – Front End Conference in Cologne',
        page: 'coc'
    };

    res.render('lib/views/pages/event.html', data);
});
*/
// Feedback Route (external Google Form)
router.get('/feedback', function (req, res) {
    res.redirect(301, 'https://docs.google.com/forms/d/e/1FAIpQLSe_WED_9_39kBTzV1mgyE6mpXZBPSlLfdjf6aJS86xYVgEz0Q/viewform');
});

router.all('/*', function (req, res, next) {
    var errorMessage = 'Page or Resource: <i>' + req.originalUrl + '</i> not found!';
    var data = {
        title: 'Nightlybuild - Fehler',
        errorMessage: errorMessage
    };

    var err = new Error(errorMessage);

    console.log(err);

    res.status(404)
       .render('lib/views/pages/error.html', data);
});

module.exports = router;
