module.exports = function() {
  var route = require('express').Router();

  route.get('/members', function(req,res) {
    res.render('musician/members.ejs');
  });

  return route;
}
