var express = require('express');
var router = express.Router();
/* GET home page. */
//some database calls here and hand the data over to render

var mongoose = require( 'mongoose' );
//Collection is 
var people = mongoose.model( 'people' );

dat = { title: 'Database content Wow' }
dat2 = {info: 'Some info from DB', moreinf: 'Ha Ha it works'}

router.get('/', function(req, res, next) {
  res.render('home', dat);
});

router.get('/about', function(req, res){
	res.render('about', dat2);
});

router.get('/userform', function(req, res){
	res.render('fm1');
});

router.post('/save',function(req, res){
	//console.log(req.body.username);
	//console.log(req.body);
	var newPerson = new people(req.body); 
	newPerson.save()
	res.redirect(303, '/thankyou');
});

router.get('/thankyou', function(req, res){
	res.render('thankyou');
});


module.exports = router;


	