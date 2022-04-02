const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const merge = require("merge2");

const tsProject = ts.createProject("tsconfig.json");
const stream = tsProject.src().pipe(tsProject());

gulp.task("clean-up", function () {
  return del("lib/**", { force: true });
});

gulp.task("build-typescript", function () {
  return merge([
    stream.js.pipe(gulp.dest("lib/")),
    stream.dts.pipe(gulp.dest("lib/"))
  ]);
});

gulp.task("default", gulp.series("clean-up", "build-typescript"));
