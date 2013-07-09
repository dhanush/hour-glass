
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('signin', { appname: 'Hour Glass' });
//	 res.redirect("/signin");
};