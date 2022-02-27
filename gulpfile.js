const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

const config = require("./config.json");

function getGulpSass(isMinified) {
  return sass({
    outputStyle: isMinified ? "compressed" : "expanded"
  }).on("error", sass.logError);
}

function buildFile(themeName, file, isMinified) {
  return gulp.src(`.${config.folders.themesSrc}/${themeName}/${file}.scss`)
    .pipe(getGulpSass(isMinified))
    .pipe(rename(isMinified ? `${file}.min.css` : `${file}.css`))
    .pipe(gulp.dest(`.${config.folders.themesPublic}/${themeName}`))
    .pipe(gulp.dest(`.${config.folders.themesSrc}/${themeName}`));
}

function buildThemeTask(name) {
  return gulp.parallel(
    function buildThemeMinified() {
      return buildFile(name, "bootstrap", true)
    },
    function buildTheme() {
      return buildFile(name, "bootstrap", false)
    },
    function buildColorPreview() {
      return buildFile(name, "colorpreview", true)
    }
  );
}

exports.default = buildThemeTask("default");
exports.harukiLight = buildThemeTask("haruki-light");
exports.harukiDark = buildThemeTask("haruki-dark");