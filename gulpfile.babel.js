import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import babel from 'gulp-babel';

const sass = gulpSass( dartSass );
const plugins = [autoprefixer()];

gulp.task('cssTask', () =>
    gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .on("error", sass.logError)
        .pipe(gulp.dest('build'))
);

gulp.task('jsTask', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'))
);

gulp.task(
	'buildDev',
	gulp.parallel('cssTask', 'jsTask')
);

gulp.task('watchDev', () => {
	gulp.watch('src/**/*.scss', gulp.series('cssTask'));
	gulp.watch('src/**/*.js', gulp.series('jsTask'));
});

const watchTask = gulp.series('buildDev', 'watchDev');

gulp.task('default', gulp.series(watchTask));
