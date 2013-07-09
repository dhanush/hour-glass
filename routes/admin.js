/**
 * Routing class for admin functions
 */

var mongoose = require('mongoose'), Project = mongoose.model('Project')

exports.projects = function(req, res) {
	Project.list(function(err, projects) {
		if(err) {
			console.log(err);
		}
		res.render('admin', {
			appname : 'Hour Glass',
			all_projects: projects,
			selected_project: projects[0],
			username: 'admin@hour-glass.com'
		});
	});
};

exports.project = function(req, res) {
	res.send("respond with a resource");
	res.end();
};


exports.create = function(req, res) {
	console.log(req.body);
	var project = new Project(req.body);
	project.save(function(err) {
		if (err) {
			console.log(err)
		}
		res.redirect('/admin/projects', {
			appname : 'Hour Glass'
		});
	});
};