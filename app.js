/**
 * Module dependencies.
 */

var express = require('express'), fs = require('fs'), mongoose = require('mongoose'), db = mongoose
		.connect("mongodb://localhost/hour-glass"), http = require('http'), path = require('path'), passport = require('passport');

// Bootstrap models
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function(file) {
	if (~file.indexOf('.js'))
		require(models_path + '/' + file);
});

var app = express();

var routes = require('./routes'), signin = require('./routes/signin'), 
	signup = require('./routes/signup'), home = require('./routes/home'), 
	user = require('./routes/user'), admin= require('./routes/admin');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser(function(user, done) {
	done(null, user.email);
});

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', signin.signin);
app.post('/signin/do', signin.signindo);

app.get('/signup', signup.signup);
app.post('/signup/new', signup.signupnew);

app.get('/home', home.home);

app.get('/users', user.list);
app.get('/admin/projects', admin.projects);
app.post('/admin/create', admin.create);
app.get('/admin/projects/:code', admin.project);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
