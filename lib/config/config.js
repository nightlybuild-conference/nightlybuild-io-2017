'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    env: process.env.NODE_ENV || 'development',
    root: rootPath,
    port: process.env.PORT || 9000
};
