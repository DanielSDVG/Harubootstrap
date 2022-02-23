const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const config = require("./config.json");

function buildAllThemes() {
  return gulp.src(`.${config.folders.themesSrc}/**/[!_]*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(`.${config.folders.themesPublic}`))
    .pipe(gulp.dest(`.${config.folders.themesSrc}`));
}

function buildOneTheme(name) {
  return gulp.src(`.${config.folders.themesSrc}/${name}/[!_]*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(`.${config.folders.themesPublic}/${name}`))
    .pipe(gulp.dest(`.${config.folders.themesSrc}/${name}`));
}

exports.harukiLight = () => buildOneTheme("haruki-light");
exports.harukiDark = () => buildOneTheme("haruki-dark");