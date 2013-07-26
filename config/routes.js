/**
 * Controllers
 */

module.exports = function(app, config) {
	var signin = require('../routes/signin'), signup = require('../routes/signup'), home = require('../routes/home'), user = require('../routes/user'), admin = require('../routes/admin');

	app.get('/', signin.signin);
	app.post('/signin/do', signin.signindo);

	app.get('/signup', signup.signup);
	app.post('/signup/new', signup.signupnew);

	app.get('/home', home.home);

	app.get('/users', user.list);
	app.get('/admin/projects', admin.projects);
	app.post('/admin/create', admin.create);
	app.get('/admin/projects/:code', admin.project);
};
