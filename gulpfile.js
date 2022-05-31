const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const connect = require('gulp-connect');

const paths = {
    html: {
        all: './src/templates/*.html',
    },
    styles: {
        all: './src/styles/**/**.scss',
        main: './src/styles/main.scss',
    },
    scripts: {
        all: './src/scripts/**.js',
        main: './src/scripts/script.js',
    },

    output: './dist'
}

function liveConnection() {
    connect.server({
        root: "dist",
        livereload: true,
        port: 8888,
    })
    connect.serverClose();
}

function sentinel() {
    watch(paths.html.all, { ignoreInitial: false }, convertTemplates);
    watch(paths.styles.all, { ignoreInitial: false }, convertStyles);
    watch(paths.scripts.all, { ignoreInitial: false }, convertScripts);
}

function convertTemplates() {
    return src(paths.html.all)
        .pipe(dest(paths.output));
}

function convertStyles() {
    return src(paths.styles.main)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest(paths.output))
        .pipe(connect.reload());
}

function convertScripts() {
    return browserify(paths.scripts.main)
        .transform(babelify.configure({
            presets: ["@babel/preset-env"]
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest(paths.output))
        .pipe(connect.reload());
}

exports.default = parallel(liveConnection, sentinel);
