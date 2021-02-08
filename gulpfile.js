const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const reduceImage = () => ( gulp
    .src('./static/blog-img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./static/blog_img'))
);

gulp.task('reduceImage', reduceImage);

gulp.task('watch', () => {
    gulp.watch('./static/blog-img/*', reduceImage)
})

gulp.task('default', gulp.series('reduceImage', 'watch'))