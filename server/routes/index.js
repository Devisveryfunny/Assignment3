var express = require('express');
var router = express.Router();

/*GET index page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/*GET home page.*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET assignment page.*/
router.get('/assignments', function(req, res, next) {
  res.render('index', { title: 'Assignments' });
});

module.exports = router;
