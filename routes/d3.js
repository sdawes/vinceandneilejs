var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('d3', { 
  	title: 'd3',
  });
});

module.exports = router;