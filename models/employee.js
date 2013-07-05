/**
 * New node file for Employee
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema

var EmployeeSchema = new Schema({
	firstname : String,
	lastname : String,
	email : String,
	password : String
});

EmployeeSchema.methods = {
	authenticate : function(plainText) {
		return this.plainText === this.password;
	}
};

EmployeeSchema.statics.findByEmail = function(email, cb) {
	this.find({
		email : new RegExp(email, 'i')
	}, cb);
}

mongoose.model('Employee', EmployeeSchema);