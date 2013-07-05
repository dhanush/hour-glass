/**
 * New node file
 */


var mongoose = require('mongoose'),
   Employee = mongoose.model('Employee');

exports.signin = function(req, res){
	 res.render('signin', { project_name: 'Hour Glass' });
};

exports.signindo = function(req, res){
	var request_body = req.body;
	console.log(request_body);
	
	var employeeDB = Employee.findByEmail(request_body.email);
	var loggedin = employeeDB.authenticate(request_body.password);
	if(loggedin) {
		res.redirect("home", employeeDB);
	}
	
	
};