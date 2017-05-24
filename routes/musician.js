module.exports = function() {
  var route = require('express').Router();

  route.get('/', function(req,res) {
    res.render('musician/index.ejs');
  });

  route.get('/calendar', function(req,res) {
    res.render('musician/calendar.ejs');
  });

  route.get('/todo_list', function(req,res) {
    res.render('musician/todo_list.ejs');
  });


  return route;
}
