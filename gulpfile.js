let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
      
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch']);