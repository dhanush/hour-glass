
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');
 

module.exports = {
  development: {
    db: 'mongodb://localhost/hour-glass',
    root: rootPath,
    app: {
      name: 'Hour Glass'
    },
  },
  production: {}
};
