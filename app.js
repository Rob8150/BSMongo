var express = require('express');
var db = require('./model/db')
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();
app.disable('x-powered-by');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
// Defines the port to run on
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));




app.use('/', routes);

//app.get('/', function(req, res){
//	res.render('home');
//});

//app.get('/about', function(req, res){
//	res.render('about');
//});

// reder 404 not found
app.use(function(req, res){
	res.type('text/html');
	res.status(404);
	res.render('404');
});

//render 500 server error
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

//start NODE listener on port 
app.listen(app.get('port'), function(){
	console.log("Express started on http://localhost:" + app.get('port') + ' Ctrl-C to terminate');
});

