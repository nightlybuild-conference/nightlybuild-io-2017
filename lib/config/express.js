'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    ectRenderer = require('ect')({
        watch : true,
        root : './',
        ext : '.html'
    });

module.exports = function(app, config) {

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Static Files
    app.use(express.static('public'));

    // Templating
    app.set('views', './');
    app.set('view engine', 'html');
    app.engine('html', ectRenderer.render);
};
