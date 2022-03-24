/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (done) {
  gulp.src("./scss/*.scss") //Sass がある位置を指定
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css")); //CSS(カスタマイズされたBootstrapを含む) の出力先を指定
  done();
});
