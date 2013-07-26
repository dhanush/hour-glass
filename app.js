/**
 * Module dependencies.
 */

var express = require('express')
    , fs = require('fs')
    , passport = require('passport')
		
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]
    , mongoose = require('mongoose')

// Bootstrap db connection
    console.log('Database');
console.log(config.db)
mongoose.connect(config.db)
//bootstrap passport config
var app = express();
// express settings
var express = require('./config/express')  ;
express(app,config);

require('./config/passport')(passport, config)
// Start the app by listening on <port>
var port = process.env.PORT || 3000
app.listen(port)

console.log('Express app started on port '+port)

