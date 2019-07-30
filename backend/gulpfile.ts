import * as gulp from 'gulp'
import * as ts from 'gulp-typescript'
import * as mocha from 'gulp-mocha'
import * as clean from 'gulp-clean'

gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    return gulp.src('test/**/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: 'ts-node/register'
        }));
});

gulp.task('clean', function () {
   return gulp.src('dist')
       .pipe(clean());
});