module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/app/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(P_6pt-cH6u3kfe0DZ_LYjtl04KsqPpzw))
            .pipe($.gulp.dest('./build/app/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/app/img/general/'));
    });
};
