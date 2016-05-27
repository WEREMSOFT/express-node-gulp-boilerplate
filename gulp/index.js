'use strict';

var fs = require('fs');
var gulp = require('gulp');
var onlyScripts = require('./util/scriptFilter');

console.log(fs.readdirSync('./gulp/tasks/').filter);

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
  if ( !global.isWatching ) {
    process.nextTick(function () {
      process.exit(0);
    });
  }
});

tasks.forEach((task) => {
  require('./tasks/' + task);
});

