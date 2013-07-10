/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema

var ProjectSchema = new Schema({
	name : String,
	code : String,
	description : String,
	start_date : Date,
	end_date : Date
});

ProjectSchema.statics = {

	findByName : function(project_name, cb) {
		this.find({
			name : project_name
		}, cb);
	},

	findByCode : function(project_code, cb) {
		this.find({
			code : project_code
		}, cb);
	},

	list : function(cb) {
		this.find({}, cb);
	}
};

mongoose.model('Project', ProjectSchema);