/**
 * Model file for a time sheet. A user can have multiple sheets for multiple
 * projects
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema, Entry = mongoose
		.model('Entry');
;

var SheetSchema = new Schema({
	projectcode : String,
	email : String,
	entries : [ Entry ]
});

SheetSchema.statics = {
	findByEmail : function(emailStr, cb) {
		this.find({
			email : emailStr
		}, cb);
	},

	findByEmailAndProjectCode : function(useremail, prjcode, cb) {
		this.find({
			email : useremail,
			projectcode : prjcode
		}, cb);
	},

	findByMonthAndYear : function(year, month, cb) {
		this.find({
			'entries.date' : {
				"$gte" : new Date(year, month, 1),
				"$lte" : new Date(year, month, 31)
			}
		});
	}

// find for each month and year
};

SheetSchema.methods = {

	addEntry : function(entry, cb) {
		this.entries.push(entry);
		this.save(cb);
	}
// methods for edit and delete should be there

// export
};

mongoose.model('Sheet', SheetSchema);