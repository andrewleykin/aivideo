module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./dev/app/fonts/**/*.*')
            .pipe($.gulp.dest('./build/app/fonts/'));
    });
};
