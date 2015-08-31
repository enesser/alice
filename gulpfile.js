'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

/**
 * Path to assets folder where you'll author CSS, JavaScript assets
 * @type {String}
 */
var assetsFolderPath = 'assets';

/**
 * Styles folder path to styles processed by gulp; this folder will auto-generate
 * @type {String}
 */
var stylesFolderPath = 'styles';

/**
 * Source paths where you'll author CSS, JavaScript
 * @type {Object}
 */
var sourcePaths = {
    sass: [assetsFolderPath + '/**/*.scss'],
    sassAutoScale: ['./auto-scale/' + assetsFolderPath + '/**/*.scss']
};

/**
 * Destination paths where assets will go after they're built, do not edit files in this
 * directory directly
 * @type {Object}
 */
var destinationPaths = {
    styles: stylesFolderPath,
    stylesAutoScale: './auto-scale/' + stylesFolderPath
};

// gulp sass
gulp.task('sass', function() {
    gulp.src(sourcePaths.sass)
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(destinationPaths.styles));

        gulp.src(sourcePaths.sassAutoScale)
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(destinationPaths.stylesAutoScale));
});

// gulp watch
gulp.task('watch', function() {
    gulp.watch(sourcePaths.sass, ['sass']);
});

// default gulp task
gulp.task('default', ['sass']);