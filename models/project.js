/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema

var ProjectSchema = new Schema({
	name : String,
	description : String,
	start_date : Date,
	end_date : Date
});


ProjectSchema.statics.findByName = function(project_name, cb) {
	this.find({
		name : project_name
	}, cb);
}

mongoose.model('Project', Project);