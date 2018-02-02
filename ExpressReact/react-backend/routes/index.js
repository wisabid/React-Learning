var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json([
  		{
  			id : 1,
  			name : 'Alfie',
  			age : 0.5,
  			email : 'alfie@alfie.com'
  		},
  		{
  			id : 2,
  			name : 'Abid',
  			age : 34,
  			email : 'abid@alfie.com'
  		},
  		{
  			id : 3,
  			name : 'Shab',
  			age : 26,
  			email : 'shab@alfie.com'
  		},
  		{
  			id : 4,
  			name : 'Alf Alvin',
  			age : 1.5,
  			email : 'alfalvin@alfie.com'
  		}
  	])
});

module.exports = router;
