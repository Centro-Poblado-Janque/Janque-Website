const gulp = require('gulp');
const tinypng = require('gulp-tinypng-extended');

require('dotenv').config()

const { TINY_API_KEY } = process.env

const compressStaticFiles = () => (
    gulp
        .src('./static/resources/img/*')
        .pipe(tinypng({
            key: TINY_API_KEY,
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./static/resources/img'))
);

const compressAssetsFiles = () => (
    gulp
        .src('./assets/img/*')
        .pipe(tinypng({
            key: TINY_API_KEY,
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./assets/img'))
)

gulp.task('compressStaticFiles', compressStaticFiles);
gulp.task('compressAssetsFiles', compressAssetsFiles);

gulp.task('watch', () => {
    gulp.watch('./static/img/blog-img/*', compressStaticFiles)
    gulp.watch('./assets/img/*', compressAssetsFiles);
})

gulp.task('default', gulp.series('compressStaticFiles', 'compressAssetsFiles',  'watch'))