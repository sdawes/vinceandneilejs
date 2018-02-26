var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Home',
  	name: 'Stephen Dawes',
  	age: '40',
  	page_name: 'Home'
  });
});

module.exports = router;
