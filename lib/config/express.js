'use strict';

/**
* Module dependencies.
*/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ectRenderer = require('ect')({
    watch : true,
    root : path.join(__dirname, '../../'),
    ext : '.html'
});

module.exports = function(app, config) {

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Static Files
    app.use(express.static(path.join(__dirname, '../../', 'public')));

    // Templating
    app.set('views', path.join(__dirname, '../../'));
    app.set('view engine', 'html');
    app.engine('html', ectRenderer.render);
};
