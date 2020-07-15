const { watch, series } = require('gulp');
var postcss 	= require('gulp-postcss');
var uglify    = require('gulp-uglify');
var imagemin 	= require('gulp-imagemin');

// css plugins
var cssnext = require('postcss-cssnext');
var cssImport = require('postcss-easy-import');
var cssnano = require('cssnano');


//css
// gulp.task('css', function() {
// 	var processors = [
// 		cssImport,		
// 		cssnext({ browsers: ['last 3 versions'] }),
// 		cssnano
// 	];

// 	return gulp.src('./static-source/css/style.css')
// 		.pipe( postcss(processors) )
// 		.pipe(gulp.dest('./static/css'));
// });

//javascript
// gulp.task('scripts', function() {
// 	return gulp.src('./static-source/javascript/**/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./static/javascript'))
// });

//images
// gulp.task('image', function() {
// 	return gulp.src('./static-source/images/**/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./static/images'))
// });

function image() {
	return src('./static-source/images/**/*')
		.pipe(imagemin())
		.pipe(dest('./static/images'))
}

function scripts() {
	return src('./static-source/javascript/**/*.js')
		.pipe(uglify())
		.pipe(dest('./static/javascript'))
}

function css() {
	var processors = [
		cssImport,		
		cssnext({ browsers: ['last 3 versions'] }),
		cssnano
	];
	return src('./static-source/css/style.css')
		.pipe( postcss(processors) )
		.pipe(dest('./static/css'));
}

//Fonts
function fonts() {
	return src('./static-source/fonts/**/*')
		.pipe(dest('./static/fonts/'))
}

// watch
exports.default = function() {
	watch('./static-source/javascript/**/*.js', scripts);
	watch('./static-source/css/**/*.css', css);
	watch('./static-source/images/**/*', image);
};

