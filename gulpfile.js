var gulp = require('gulp'),
	svgmin = require('gulp-svgmin'),
    svgSymbols = require('gulp-svg-symbols');

gulp.task('sprites', function () {
	return gulp.src('assets/svg/*.svg')
	.pipe(svgmin())
	.pipe(svgSymbols())
	.pipe(gulp.dest('assets'));
})