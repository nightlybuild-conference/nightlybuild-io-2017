'use strict';

var express = require('express'),
    config = require('./config'),
    router = express.Router();

// Start Routes
router.get('/', function (req, res) {
    var data = {
        title: 'NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'index'
    };

    res.render('lib/views/pages/index.html', data);
});

// Tickets Routes
router.get('/ticket', function (req, res) {
    var data = {
        title: 'Ticket | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'ticket'
    };

    res.render('lib/views/pages/ticket.html', data);
});

// Speaker Routes
router.get('/speaker', function (req, res) {
    var data = {
        title: 'Speaker | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'speaker'
    };

    res.render('lib/views/pages/speaker.html', data);
});

// Partner Routes
router.get('/partner', function (req, res) {
    var data = {
        title: 'Partner | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'partner'
    };

    res.render('lib/views/pages/partner.html', data);
});

// Speaker Routes
router.get('/call-for-papers', function (req, res) {
    var data = {
        title: 'Call for Papers | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'cfp'
    };

    res.render('lib/views/pages/call-for-papers.html', data);
});

// On-Site Routes
router.get('/on-site', function (req, res) {
    var data = {
        title: 'On Site | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'on-site'
    };

    res.render('lib/views/pages/on-site.html', data);
});

// About Routes
router.get('/about', function (req, res) {
    var data = {
        title: 'Who we are | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'about'
    };

    res.render('lib/views/pages/about.html', data);
});

// Legal Routes
router.get('/legal', function (req, res) {
    var data = {
        title: 'Legal Information | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'legal'
    };

    res.render('lib/views/pages/legal.html', data);
});

// Code of Conduct Routes
router.get('/coc', function (req, res) {
    var data = {
        title: 'Code Of Conduct | NightlyBuild 2016 – Front End Conference in Cologne',
        page: 'coc'
    };

    res.render('lib/views/pages/codeofconduct.html', data);
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
