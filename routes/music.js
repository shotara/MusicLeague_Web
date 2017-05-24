module.exports = function() {
  var route = require('express').Router();

  route.get('/make', function(req,res) {
    res.render('musician/maker.ejs');
  });

  route.get('/mysongs', function(req,res) {
    res.render('musician/mysongs.ejs');
  });

  return route;
}
