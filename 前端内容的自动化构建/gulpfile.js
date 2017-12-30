"use strict";
var gulp = require('gulp');
// var shelljs = require('shelljs');//shell脚本
var browserify = require('browserify');
var fs = require('fs');
var sequence = require('run-sequence');//监听
var concat = require('gulp-concat');//打包css
var clean = require('gulp-clean-css');//压缩css
var sass = require('gulp-sass');//编译sass
//以下四行将打包好的js压缩
var uglify = require('gulp-uglify');
var watchify = require("watchify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
// gulp.task('default',function(){
//   shelljs.exec('browserify js/index.js -o js/bundle.js')
// })
gulp.task('default',function(){
  sequence(
  	'sass',
  	'sass_watch',
  	'pack_js',
  	'pack_watch_js',
  	'pack_css',
  	'pack_watch_css'
  );
})
//打包js
gulp.task('pack_js',function(){
  var b = browserify({
  	entries:['js/index.js','js/text.js'],
  	cache:{},
  	packageCache:{},
  	plugin:[watchify]
  })
  function bundle(){
  	b
	.bundle()
	.pipe(source('bundle.js'))//打包压缩后要生成的文件名
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('js/'))
  }
  bundle();
  b.on('update',bundle);
})
gulp.task('pack_watch_js',function(){
	gulp.watch('js/*.js',['pack_js']);
})
//编译sass
gulp.task('sass',function(){
	gulp
	.src('css/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'))
})
gulp.task('sass_watch',function(){
	gulp.watch('css/*.scss',['sass']);
})
//打包压缩css
gulp.task('pack_css',function(){
	gulp
	.src(['css/index.css','css/test.css'])
	.pipe(concat('main.css'))
	.pipe(clean())
	.pipe(gulp.dest('css/'))
})
gulp.task('pack_watch_css',function(){
	gulp.watch('css/*.css',['pack_css']);
})