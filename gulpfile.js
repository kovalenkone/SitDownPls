const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const sass = require('gulp-sass')(require('sass'))
const webp = require('gulp-webp')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const argv = require('yargs').argv
const browserSync = require('browser-sync').create()

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist/resources'))
}

const fonts = () => {
  return src('src/fonts/**')
    .pipe(dest('dist/fonts'))
}

// const styles = () => {
//   return src('src/styles/**/*.css')
//     .pipe(gulpif(argv.prod, sourcemaps.init()))
//     .pipe(concat('main.css'))
//     .pipe(autoprefixer({
//       cascade: false,
//     }))
//     .pipe(gulpif(argv.prod, cleanCSS({
//       level: 2,
//     })))
//     .pipe(gulpif(argv.prod, sourcemaps.write()))
//     .pipe(dest('dist'))
//     // .pipe(browserSync.stream())
// }

const styles = () => {
  return src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(gulpif(argv.prod, htmlMin({
      collapseWhitespace: true,
    })))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprites.svg'
        }
      }
    }))
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/**/*.js'
  ])
  .pipe(gulpif(argv.prod, sourcemaps.init()))
  .pipe(gulpif(argv.prod, babel({
    presets: ['@babel/env']
  })))
  // .pipe(concat('app.js'))
  .pipe(gulpif(argv.prod, uglify({
    toplevel: true
  })).on('error', notify.onError()))
  .pipe(gulpif(argv.prod, sourcemaps.write()))
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

const images = () => {
  return src([
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
  // .pipe (image())
  .pipe (dest('dist/images'))
}

const img = () => {
  return src('src/images/**/*.jpg')
    .pipe(webp())
    .pipe(dest('dist/images'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.scss', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
// watch('src/resources/**', resources)

exports.styles = styles
exports.htmlMinify = htmlMinify
exports.svgSprites = svgSprites
exports.images = images
exports.img = img
exports.clean = clean
exports.resources = resources
exports.scripts = scripts
exports.fonts = fonts
exports.default = series(clean, htmlMinify, styles, scripts, fonts, images, img, svgSprites, watchFiles)