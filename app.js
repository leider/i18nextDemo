'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);

app.use(require('./initI18N'));

app.get('/', function (req, res, next) {
  res.render('index');
});

var port = 8123;

this.server = http.createServer(app);
this.server.listen(port, function () {
  console.log('Server running at port ' + port);
});
