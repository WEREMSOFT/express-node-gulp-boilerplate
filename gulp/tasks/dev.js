var exec = require('child_process').exec;
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev', function () {
	console.log('starting cadorna');
  console.log(nodemon({
    script: 'app.js'
  , ext: 'js html'
  , env: { 'PORT': '8080' }
  }));
})
