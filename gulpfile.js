const gulp = require('gulp');
const concat = require('gulp-concat');
const bower = require('gulp-bower');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('bower', bower);

gulp.task('js', function () {
    // TODO add uglify and rename
    const output = 'app.min.js';
    const jsFiles = [
        'app/**/*.module.js',
        'app/**/*.js',
        '!app/**/*.spec.js',
    ];
    const jsDest = 'build/public';

    return gulp.src(jsFiles)
               .pipe(sourcemaps.init())
               .pipe(babel())
               .pipe(concat(output))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(jsDest));
});

gulp.task('copyfiles', function () {
    const otherFiles = [
        'app/**/*',
        '!app/**/*.js'
    ];

    return gulp.src(otherFiles).pipe(gulp.dest('build/public'));
});

gulp.task('build', ['js', 'copyfiles', 'bower']);

gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/**/*.html', ['copyfiles']);
});

gulp.task('default', ['build', 'watch']);
