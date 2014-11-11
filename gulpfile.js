var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('slim', function(){
    gulp.src("./app/**/*.slim")
        .pipe(plugins.slim({
            pretty: true,
            options: "encoding='utf-8'"
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    gulp.src('./app/styles/**/*.scss')
        .pipe(plugins.autoprefixer())
        .pipe(plugins.sass({
            errLogToConsole: true,
            sourceComments : 'normal'
        }))
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('js', function () {
    gulp.src('./app/scripts/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('browser-sync', function() {
    var files = [
        'dist/**/*.html',
        'dist/styles/*.css',
        'dist/scripts/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('./app/**/*.slim', ['slim']);
    gulp.watch('./app/styles/*.scss', ['sass']);
    gulp.watch('./app/scripts/*.js', ['js']);
});

gulp.task('default', ['watch', 'browser-sync']);