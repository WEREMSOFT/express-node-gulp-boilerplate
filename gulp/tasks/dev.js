var exec = require('child_process').exec;
var gulp = require('gulp');

console.log('running server');

gulp.task('dev', function() {
  exec('node app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

console.log('finish running server');