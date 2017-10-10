module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src($.path.jsFoundation)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/app/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src($.path.jsFoundation)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/app/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src($.path.app)
            .pipe($.gp.concat('app.js'))
            .pipe($.gulp.dest('./build/app/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
