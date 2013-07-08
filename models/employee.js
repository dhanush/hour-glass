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
		return this.password === plainText;
	}
};

EmployeeSchema.statics.findByEmail = function(emailStr, cb) {
	this.find({
		email : emailStr
	}, cb);
}

mongoose.model('Employee', EmployeeSchema);