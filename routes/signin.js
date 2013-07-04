/**
 * New node file
 */

exports.signin = function(req, res){
	//validate credentials against Db
	  console.log('Sign in ');
	  res.redirect("/user/list");
};