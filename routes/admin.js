/**
 * Routing class for admin functions
 */

var mongoose = require('mongoose'), Project = mongoose.model('Project'), moment = require('moment'), url = require('url');

exports.projects = function(req, res) {
	console.log(req.user);
	if (req.user != 'admin@hour-glass.com') {
		res.redirect('/');
	};

	Project.list(function(err, projects) {
		if (err) {
			console.log(err);
		}
		res.render('admin', {
			appname : 'Hour Glass',
			all_projects : projects,
			selected_project : projects[0],
			username : 'admin@hour-glass.com'
		});
	});
};

exports.project = function(req, res) {
	Project.list(function(err, projects) {
		if (err) {
			console.log(err);
		}
		console.log(req.params.code);
		Project.findByCode(req.params.code, function(err, project) {
			if (err) {
				console.log(err);
			}
			res.render('admin', {
				appname : 'Hour Glass',
				all_projects : projects,
				selected_project : project[0],
				username : 'admin@hour-glass.com'
			});
		});
	});
};

exports.create = function(req, res) {
	console.log(req.body)
	var startdate = moment(req.body.start_date).format();
	var enddate = moment(req.body.end_date).format();

	var projectJson = {
		name : req.body.name,
		code : req.body.code,
		description : req.body.description,
		start_date : startdate,
		end_date : enddate
	};

	console.log(projectJson);
	var project = new Project(projectJson);
	project.save(function(err) {
		if (err) {
			console.log(err);
		}

		Project.list(function(err, projects) {
			if (err) {
				console.log(err);
			}

			res.render('admin', {
				appname : 'Hour Glass',
				all_projects : projects,
				selected_project : project,
				username : 'admin@hour-glass.com'
			});
		});
	});
};