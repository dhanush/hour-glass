/**
 * New node file
 */
var url = require("url"), querystring = require("querystring");

exports.home = function(req, res) {
	var url_request = url.parse(req.url).query;
	var qry_str = querystring.parse(url_request);
	var useremail = qry_str.user;
	
	if (useremail == null) {
		res.render('signin', {
			appname : 'Hour Glass'
		});
	}
	console.log('In home page for user ' + useremail);
	res.send("Hello " + useremail);
};