'use strict';
/*jshint -W117*/
/*jshint -W097*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');

// creating the .map file to avoid warnings
// gulp.task('map',function(cb){
//   var imgSrc = 'app/bower_components/ng-image-cropper/dist/angular-image-cropper.js',
//       imgDst = 'app/bower_components/ng-image-cropper/dist/angular-image-cropper.js.map'; //aca no se a donde vamos a
//
//   gulp.src(imgSrc)
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(imgDst));
// });

// compile all the *.scss of the modules
gulp.task('mystyles', function () {

  // return gulp.src('./sass/**/*.scss')
  return gulp.src('app/assets/css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('myApp.min.css'))
    .pipe(
      uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })
    )
    .pipe(gulp.dest('app/assets/css/build'));
    // .pipe(gulp.dest('./css'));
});

// compile all the *.scss of the modules
gulp.task('vendorstyles', function () {

  // return gulp.src('./sass/**/*.scss')
  return gulp.src('app/assets/css/src/vendor/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('vendorStyles.min.css'))
    .pipe(
      uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })
    )
    .pipe(gulp.dest('app/assets/css/build'));
    // .pipe(gulp.dest('./css'));
});

// check for JS errors in the code
gulp.task('checkJS', function () {
  gulp.src(['app/components/**/*.js','app/shared/**/*.js'])
    .pipe(jshint({esversion:6}))
    .pipe(jshint.reporter('jshint-stylish'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'PopSpace/popspace_web/static/popspace_web/img/**/*',
      imgDst = 'PopSpace/popspace_web/static/popspace_web/build/img'; //aca no se a donde vamos a arrojar las images

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


// JS concat, strip debugging and minify of my static JS libs
gulp.task('scriptsStatics', function(cb) {
    // gulp.src(['assets/js/*.js','assets/libs/*.js'])
    pump([
        gulp.src(['app/assets/js/src/*.js','app/assets/libs/**/*.js']),
        concat('scriptsStatics.min.js'),
        // stripDebug(),
        // uglify(),
        gulp.dest('app/assets/js/build')
    ],cb);
});

// JS of every module
gulp.task('scriptsModules', function(cb) {
    // gulp.src(['assets/js/*.js','assets/libs/*.js'])
    pump([
        gulp.src(['app/shared/**/*.js','app/components/**/*.js', 'app/routes/*.js', 'app/services/*.js']),
        concat('scriptsComponentsShared.min.js'),
        // stripDebug(),
        // uglify(),
        gulp.dest('app/assets/js/build')
    ],cb);
});

// command 'gulp styles' which compiles vendor scss and scss of the modules
gulp.task('styles',['mystyles', 'vendorstyles'],function(){});

// command 'gulp scripts' that checks and minifies the js scripts of the app
gulp.task('scripts',['checkJS','scriptsStatics','scriptsModules']);

// command 'gulp dev' wich compiles all the scss and checks the js
gulp.task('dev',['styles','scripts'],function(){});

// comando que va a generar todo para produccion
//aun no funciona bien el uglify puesto que me arroja errores con los let y con unos objetos mal puestos
