var through = require('through2')
var gutil = require('gulp-util')
var PluginError = gutil.PluginError


function transform (opts) {
  return function(file, enc, cb) {
  }
}

module.exports = function (options) {
  return through.obj(transform(options))
}
