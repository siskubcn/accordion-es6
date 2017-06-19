/* jshint esversion: 6  */

/**
 * Setting Up Gulp task for technical test Schibsted
 * - Sass
 */

const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      webpack = require('gulp-webpack'),
      browserSync = require('browser-sync').create(),

      paths = {
        styles: { src: 'src/scss', dest: 'build/css' },
        scripts: { src: 'src/js', dest: 'build/js'}
      };

gulp.task('styles', () => {
    const processors = [require('autoprefixer')];

    return gulp.src(`${paths.styles.src}/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
});

gulp.task('webpack', () => {
    return gulp.src(`${paths.scripts.src}/main.js`)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('build', ['styles', 'webpack']);

gulp.task('watch', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch(`${paths.styles.src}/**/*.scss`, ['styles']);
    gulp.watch(`${paths.scripts.src}/**/*.js`, ['webpack']);
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('dev', ['build', 'watch']);