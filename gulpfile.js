var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/app/'));
});

gulp.task('node', function() {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
  gulp.watch('src/app/**/*.js', ['babel']);
  gulp.watch('src/*.js', ['node']);
});

gulp.task('default', ['watch']);