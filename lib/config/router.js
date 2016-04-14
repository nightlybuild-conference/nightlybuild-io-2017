'use strict';

var express = require('express'),
    config = require('./config'),
    router = express.Router();

// Page Routes
router.get('/', function (req, res) {
    var data = {
        title: 'NightlyBuild 2016 – Front End Conference in Cologne'
    };

    res.render('lib/views/pages/index.html', data);
});

router.all('/*', function (req, res, next) {
    var errorMessage = 'Page or Resource: <i>' + req.originalUrl + '</i> not found!';
    var data = {
        title: 'Wartungswelt.de - Fehler',
        errorMessage: errorMessage
    };

    var err = new Error(errorMessage);

    console.log(err);

    res.status(404)
       .render('lib/views/pages/error.html', data);
});

module.exports = router;
