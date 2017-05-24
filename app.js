var express = require('express');
var engine = require('ejs');
var path = require('path');

var app = express();

// app 연동
app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');

// static  페이지 연동
app.use(express.static(path.join(__dirname, '/')));
app.use('/music', express.static(path.join(__dirname, '/')));
app.use('/musician', express.static(path.join(__dirname, '/')));
app.use('/channel', express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
  res.render('home/index.ejs');
});

// music Page
var music = require('./routes/music.js')();
app.use('/music', music);

// musician Page
var musician = require('./routes/musician.js')();
app.use('/musician', musician);

// channel Page
var channel = require('./routes/channel.js')();
app.use('/channel', channel);

// port listening
app.listen(3000, function() {
  console.log('connected, 3000 port!');
});
