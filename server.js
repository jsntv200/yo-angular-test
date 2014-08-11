var express = require('express'),
    http    = require('http'),
    gzippo  = require('gzippo');

var app = express();
app.use(gzippo.staticGzip('' + __dirname));

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
