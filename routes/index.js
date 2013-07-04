
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('signin', { project_name: 'Hour Glass' });
//	 res.redirect("/signin");
};