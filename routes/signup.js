/**
 * New node file
 */

var mongoose = require('mongoose'),
   Employee = mongoose.model('Employee')
	
  
/**
 * show signup form
 */  
exports.signup = function(req, res){
	res.render('signup', { project_name: 'Hour Glass' });
};


exports.signupnew = function(req, res){
	//validate
	console.log(req.body);
	  var employee = new Employee(req.body);
	  console.log("Employee "+ employee); 
	  employee.save(function (err) {
	    if (err) {
	    	console.log(err)
	      return res.render('signup', {
	        employee: employee,
	        title: 'Sign up'
	      });
	    }

//	    // manually login the user once successfully signed up
//	    req.logIn(employee, function(err) {
//	      if (err) return next(err);
//	      return res.redirect('/home');
//	    });
	    
	    res.redirect("/signin/do", employee);
	  });
};




