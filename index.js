var express = require('express'),
    app = express(),
    config = require('./lib/config/config'),
    router = require('./lib/config/router');

// Express settings
require('./lib/config/express')(app, config);

// Basic Routing
app.use('/', router);

app.listen(config.port, function () {
    console.log('App started on port %s', config.port);
});
