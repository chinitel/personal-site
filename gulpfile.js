var gulp = require('gulp'),
	minCSS = require('gulp-clean-css'),
	sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// Static Server + watching sass/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "private/"
    });

    gulp.watch("private/sass/*.sass", ['sass']);
    gulp.watch("private/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("private/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("private/css"))
        .pipe(browserSync.stream());
});

// Minimize css
gulp.task('minCSS', function() {
    return gulp.src("private/css/*.css")
	    .pipe(minCSS())
        .pipe(gulp.dest("private/minCSS/css"))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);