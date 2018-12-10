var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('font', function () {
    return gulp.src('app/font/**/*')
        .pipe(gulp.dest('dist/font'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("html", function () {
    return gulp.src("app/**/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img', 'font'], function () {
    browserSync.init({
        server: "./dist",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('app/sass/**/*.sass', ["sass"]);
    gulp.watch('app/**/*.html' , ['html']);
    gulp.watch('app/img/**/*', ["img"]);
    gulp.watch('app/font/**/*', ["font"]);
});
