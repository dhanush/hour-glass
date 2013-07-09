/**
 * New node file
 */

var mongoose = require('mongoose'), Employee = mongoose.model('Employee');

exports.signin = function(req, res) {
	res.render('signin', {
		appname : 'Hour Glass'
	});
};

exports.signindo = function(req, res) {
	var request_body = req.body;
	console.log(request_body);
	//as of now I am harcoding admin user
	if(request_body.email =='admin@hour-glass.com') {
		res.redirect('/admin/projects');
	}
	else {
		Employee.findByEmail(request_body.email, function(err, employee) {
			if (err) {
				console.log(err);
				return next(err);
			}
			console.log(employee);
			var logging_in_user = employee[0];
			var loggedin = logging_in_user.authenticate(request_body.password);
			if (loggedin) {
				res.redirect('/home?user=' + logging_in_user.email);
			} else {
				res.render('signin', {
					appname : 'Hour Glass'
				});
			}
		});
	}
};