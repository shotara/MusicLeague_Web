var express = require('express');
var engine = require('ejs');

var app = express();

// app 연동
app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');

// static  페이지 연동
app.use('/Release', express.static(__dirname + "/views/Release"));
app.use('/TemplateData', express.static(__dirname + "/views/TemplateData"));
app.use('/assets', express.static(__dirname + "/assets"));
app.use('/header', express.static(__dirname + "/views"));

app.get('/', function(req, res) {
  res.render('home/index.ejs');
});


app.get('/musician', function(req, res) {
  res.render('musician/index.ejs');
});

// port listening
app.listen(3000, function() {
  console.log('connected, 3000 port!');
});
