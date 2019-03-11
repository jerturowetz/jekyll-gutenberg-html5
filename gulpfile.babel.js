import gulp from "gulp";
import { spawn } from "child_process";
import browserSync from "browser-sync";
import autoprefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import sass from "gulp-sass";

const siteRoot = "dist";
const mainStylesheet = "src/_sass/style.scss"; /* Main stylesheet (pre-build) */

const jekyll =
  process.platform === "win32"
    ? "jekyll.bat" //
    : "jekyll"; /* Fix Windows compatibility issue */

/**
 * Build Jekyll Site
 */
const buildJekyll = () => {
  browserSync.notify("Running: $ jekyll build");
  return spawn(jekyll, ["build", "--config", "_config.yml,_config-local.yml"], {stdio: 'inherit'});
};

/**
 * Compile styles
 */
const compileStyles = () => {
  return gulp
    .src(mainStylesheet)
    .pipe(
      sass({
        includePaths: ["scss"],
        onError: browserSync.notify
      })
    )
    .pipe(
      autoprefix({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("src/assets/css/"));
};

/**
 * Build Jekyll and compile styles
 */
const buildSite = done => {
  gulp.series(compileStyles, buildJekyll)(done);
};

/**
 * Start BrowserSync server
 */
const startServer = () => {
  browserSync.init({
    files: [siteRoot + "/**"],
    port: 4000,
    open: "local",
    server: {
      baseDir: siteRoot
    }
  });
};

/**
 * Build site and start BrowserSync server
 */
const serve = gulp.series(buildSite, startServer);

const watch = () => {
  gulp.watch(
    [
      "**/*.scss",
      "**/*.html",
      "**/*.md",
      "**/*.yml",
      "!dist/**/*"
    ],
    buildSite
  );
};

const localDev = done => {
  gulp.parallel(serve, watch)(done);
};

exports.build = compileStyles;
exports.default = localDev;
