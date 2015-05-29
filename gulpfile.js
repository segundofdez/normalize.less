var gulp = require('gulp');
var less = require('gulp-less');

/**
* Gulp errors
*/
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

/**
* Task custom normalize
*/
gulp.task('normalize', function () {
    var less_src_import = 'normalize.less';
    var less_dest_folder = 'dist/';

    return gulp.src(less_src_import)
        .pipe(less())
        .on('error', swallowError)
        .pipe(gulp.dest(less_dest_folder))
});