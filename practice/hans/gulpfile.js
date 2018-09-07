var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

var url = './public/dist/';
var path = {
  sass:{
    src: url+'../src/scss/**/*.scss',
    dist: url+ 'css/'
  },
  html: url + '**/*.html'
};

// html ---------------------------

gulp.task('html',function(){
  return gulp.src(path.html)
             .pipe(sync.stream());
});

gulp.task('js',function(){
  return gulp.src('./public/js/src/*.js')
             .pipe(sync.stream());
});

gulp.task('sass', function () {
  return gulp.src(path.sass.src)
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest(path.sass.dist))
             .pipe(sync.stream());
}); //sass 실행

// 서버 생성(browser-sync) ---------------------

gulp.task('sync', ['html', 'sass'] ,function(){
  return sync.init({
    port : 8234, //8000대 이후
    server: { baseDir : url }
  });
});

// $gulp sync

//실시간 감지 -----------------------------
gulp.task('watch', function () {
  gulp.watch(path.sass.src, ['sass']);
  gulp.watch(path.html, ['html']);
  gulp.watch('./public/js/src/*.js',['js']);

  return;
});

// gulp명령어를 입력하면 바로 수행하는 기능 
gulp.task('default',['watch', 'sync']);