const gulp = require('gulp');

const tinypng = require('gulp-tinypng-extended');

const TINY_APPI_KEY = '2knqHkyChxT8L6NGywWfd37mcSC3hBCf'

const reduceImage = () => ( 
    gulp
    .src('./static/blog-img/*')
    .pipe(tinypng({
            key: TINY_APPI_KEY,
            sigFile: 'images/.tinypng-sigs',
            log: true
    }))
    .pipe(gulp.dest('./static/blog_img'))
);

gulp.task('reduceImage', reduceImage);

gulp.task('watch', () => {
    gulp.watch('./static/blog-img/*', reduceImage)
})

gulp.task('default', gulp.series('reduceImage', 'watch'))