var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function(req, res, next) {
  res.render('about', { 
  	title: 'About',
  	name: 'Stephen Dawes',
  	age: '40',
  	page_name: 'About'
  });
});
module.exports = router;
