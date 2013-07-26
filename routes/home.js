/**
 * New node file
 */
var url = require("url"),mongoose = require('mongoose'), querystring = require("querystring"), Sheet = mongoose
		.model('Sheet');

exports.home = function(req, res) {
	var url_request = url.parse(req.url).query;
	var qry_str = querystring.parse(url_request);
	var useremail = qry_str.user;

	if (!useremail) {
		res.render('signin', {
			appname : 'Hour Glass'
		});
	}
	console.log('In home page for user ' + useremail);

	Sheet.findByEmail(useremail, function(sheets, err) {
		if (err)
			console.log(err);
		var sheet;
		if(!sheets) {
			sheet = new Sheet({
				email : useremail
			});
			sheet.save(function(err) {
				if (err)
					console.log(err);
			});
		}
		else {
			sheet = sheets[0]
		}
		
		res.render('home', {
			appname : 'Hour Glass',
			username : useremail,
			sheet : sheet
		});
	});
};