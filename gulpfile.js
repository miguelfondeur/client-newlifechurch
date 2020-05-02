var gulp 			= require('gulp');
var postcss 	= require('gulp-postcss');
var uglify    = require('gulp-uglify');
var imagemin 	= require('gulp-imagemin');

// css plugins
var cssnext = require('postcss-cssnext');
var cssImport = require('postcss-easy-import');
var cssnano = require('cssnano');


//css
gulp.task('css', function() {
	var processors = [
		cssImport,		
		cssnext({ browsers: ['last 3 versions'] }),
		cssnano
	];

	return gulp.src('./static-source/css/style.css')
		.pipe( postcss(processors) )
		.pipe(gulp.dest('./static/css'));
});

//javascript
gulp.task('scripts', function() {
	return gulp.src('./static-source/javascript/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./static/javascript'))
});

//images
gulp.task('image', function() {
	return gulp.src('./static-source/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./static/images'))
});

// watch
gulp.task('default', function() {
		gulp.watch('./static-source/javascript/**/*.js', ['scripts']);
		gulp.watch('./static-source/css/**/*.css', ['css']);
		gulp.watch('./static-source/images/**/*', ['image']);
});

//Fonts
gulp.task('fonts', function() {
	return gulp.src('./static-source/fonts/**/*')
		.pipe(gulp.dest('./static/fonts/'))
})
