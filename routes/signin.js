/**
 * New node file
 */

var mongoose = require('mongoose'), Employee = mongoose.model('Employee'), passport = require('passport');

exports.signin = function(req, res) {
	res.render('signin', {
		appname : 'Hour Glass'
	});
};

exports.signindo = function(req, res) {
	var request_body = req.body;
	console.log(request_body);
	// as of now I am harcoding admin user
	if (request_body.email == 'admin@hour-glass.com') {
		res.redirect('/admin/projects');
	} else {
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				console.log(err)
				return;
			}
			if (!user) {
				req.flash('error', info.message);
				return res.redirect('/')
			}
			req.logIn(user, function(err) {
				if (err) {
					console.log(err)
				}
				return res.redirect('/home?user=' + req.user.email);
			});
		})(req, res);

	}
};