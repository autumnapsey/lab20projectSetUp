var karma = require('karma').Server;
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

gulp.task('test', function(done){
	new karma({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});

gulp.task('jshint', function(){
	return gulp.src('*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
	gulp.watch('app.js', ['jshint']);
	gulp.watch(['test/*.js','js/*,js'],['test']);
});