var express = require('express');
var app = express();

app.use(express.static('public'));

var cities = require('./routes/cities.js');
app.use('/cities', cities);

module.exports = app;

