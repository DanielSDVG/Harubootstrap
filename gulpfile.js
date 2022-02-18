const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const config = require('./config.json');

function buildThemes() {
  return gulp.src(`.${config.folders.themesSrc}/**/[!_]*.scss`)
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(`.${config.folders.themesPublic}`))
    .pipe(gulp.dest(`.${config.folders.themesSrc}`));
}

exports.themes = buildThemes

exports.default = buildThemes;