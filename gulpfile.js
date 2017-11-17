'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const nunjucks = require('gulp-nunjucks');
const htmlbeautify = require('gulp-html-beautify');
const path = require('path');
const merge = require('merge-stream');
const browserSync = require('browser-sync').create();
const del = require('del');

const folders = ['.', 'mobile']; // structure of web and bmoile. separate folder.
const baseurl = 'http://innovationlab.co.kr/innovation/chungdahm2'; // project url

// run template engines
gulp.task('html', function () {
  var options = {
    'indent_size': 2,
    'max_preserve_newlines': 0
  };
  var date = new Date();

  // separte folder web and mobile
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/html/**/!(_)*.html')
      .pipe(nunjucks.compile({
        baseurl: baseurl,
        version: date.getTime(), // CSS, JS cache version
        viewport_width: '1024', // viewport of PC. mobile viewport set up device-width
        brand: '청담러닝', // header logo title
        title: '우리 아이가 만날 미래',
        description: '4차산업혁명 시대다. 인공지능은 우리 아이들의 동반자이자 경쟁자이다. 새로운 시대를 살게 될 우리 아이들은 새로운 질서를 만들어야 한다. 부모 세대와는 다른 것을 배워야 한다.',
        keyword: '청담러닝,에이프릴어학원,에이프릴 어학원,에이프릴,아이가르텐,i-GARTEN,April 어학원,영어학원,초등 영어 교육,영유아 영어,영유아 영어학원,초등 영어학원,영어 유치원,영어유치원,April,청담,청담어학원,청담 어학원,창의,수능,절대평가,창의력,창의성,협업,소통,학생부 종합전형,아이플레이,아이 플레이,i-play,크리에이티브,Creative thinking project,구글,인재선발,신입생 선발 기준,논술,개정 교육과정,영어,영어를 배우는 이유,프로젝트 러닝,영어 문법,영어 내신,미래형 인재,21세기 인재,인공지능,AI,일자리,특목고,입시,상대평가,창의성 예술,공감 능력,예술 과학 창의성,청담러닝 커리큘럼,커리큘럼,청담러닝 원어민 강사,원어민 강사,누리과정,융합,노벨상,창의 융합,미셸 루트번스타인,영어 사용,영어,스토리텔링',
        og_image: baseurl + '/img/og-image.jpg', // 1200x628px
        og_article_author: '', // An array of Facebook profile URLs or IDs
        og_article_publisher: 'https://www.facebook.com/joongang', // A Facebook page URL or ID
        dablena_init: 'www.innovationlab.co.kr', // client website
      }))
      .pipe(htmlbeautify(options)) // beautify HTML files
      .pipe(gulp.dest('public/' + element + '/'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// js/lib/ - external library js
gulp.task('js:lib', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/lib/*.js')
      .pipe(gulp.dest('public/' + element + '/js/lib'));
  });

  return merge(tasks);
});
// js/common/ - concat & uglify js
gulp.task('js:common', function () {
  var tasks = folders.map(function(element){
    return gulp.src([
      'src/' + element + '/js/common/transparency.js',
      'src/' + element + '/js/common/jquery.utils.js',
      'src/' + element + '/js/common/utils.js',
      'src/' + element + '/js/common/layout.js',
      'src/' + element + '/js/common/video.js',
      'src/' + element + '/js/common/sns.js'
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('common.js')) // concat
      .pipe(uglify()) // uglify 
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'));
  });

  return merge(tasks);
});
// eslint & concat & uglify js
gulp.task('js', ['js:common', 'js:lib'], function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/*.js') // if you want to load sequence, define array at here!!  
      .pipe(eslint()) // lint 적용
      .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(concat('script.js')) // concat
      .pipe(uglify()) // uglify 적용
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// compile sass to css
gulp.task('sass', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer([
        // cross-browsing prefix 
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 9',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/css'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// images
gulp.task('img', function () {
  var tasks = folders.map(function(element){
    var dest = 'public/' + element + '/img';
    return gulp.src('src/' + element + '/img/**/*.{jpg,jpeg,gif,png,svg,ico}')
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: ['public']
  });

  gulp.watch('src/**/html/*.{html,svg}', ['html']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/img/**/*.{jpg,jpeg,gif,png,svg,ico}', ['img']);
});

gulp.task('clean', function() {
  del.sync(['public/**']);
});

gulp.task('build', ['clean', 'html', 'js', 'sass', 'img'], function() {

});