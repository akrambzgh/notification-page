// Initialize modules
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// Use dart-sass for @use
//sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
  return src("app/src/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("app/public/dist", { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("app/src/js/script.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("app/public/dist", { sourcemaps: "." }));
}

// Watch Task
function watchTask() {
  watch(
    ["app/src/scss/**/main.scss", "app/src/js/**/script.js"],
    series(scssTask, jsTask)
  );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);
