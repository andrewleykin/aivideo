module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/app/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.pxtorem())
            .pipe($.gcmq())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/app/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('css:foundation', function() {
        return $.gulp.src($.path.cssFoundation)
          .pipe($.gp.concatCss('foundation.css'))
          .pipe($.gp.csso())
          .pipe($.gulp.dest('./build/app/css/'))
      })
};
