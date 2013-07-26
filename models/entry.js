/**
 * Model file for one entry in the timesheet
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var EntrySchema = new Schema({
	date : Date,
	day : String,
	workinfo : String,
	leavetype : String,
	hours: Number
});

mongoose.model('Entry', EntrySchema);
