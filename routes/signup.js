/**
 * New node file
 */

var mongoose = require('mongoose'), Employee = mongoose.model('Employee')

/**
 * show signup form
 */
exports.signup = function(req, res) {
	res.render('signup', {
		project_name : 'Hour Glass'
	});
};

exports.signupnew = function(req, res) {
	// validate
	var employee = new Employee(req.body);
	employee.save(function(err) {
		if (err) {
			console.log(err)
			return res.render('signup', {
				employee : employee,
				title : 'Sign up'
			});
		}
		// else {
		// res.redirect("/signin/do");
		// }

		// // manually login the user once successfully signed up
		req.logIn(employee, function(err) {
			if (err) {
				console.log(err)
				return next(err);
			}
			return res.redirect('/home?user=' +req.user.email);
		});
	});
};
