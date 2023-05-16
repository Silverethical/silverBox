const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

// Define the task to minify CSS
gulp.task("minify:css", () => {
	return gulp
		.src("public/dist/css/*.css")
		.pipe(postcss([cssnano()]))
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("public/dist/css"));
});

// Define the task to minify JS
gulp.task("minify:js", () => {
	return gulp
		.src("public/dist/js/*.js")
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("public/dist/js"));
});
