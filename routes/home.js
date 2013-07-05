/**
 * New node file
 */

exports.list = function(req, res){
	console.log('In home page');
	res.render('signin', { project_name: 'Hour Glass' });
};