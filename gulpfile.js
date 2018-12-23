"use strict";

const gulp = require('gulp');
const cache = require('gulp-cache');
const flatmap = require('gulp-flatmap');
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', ['cc', 'ts1-map-cache'], () => {});
gulp.task('cc', () => cache.clearAll());

// Cache only (with uglify, as exemple), works
gulp.task(
	'cache',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(rename('ts.js'))
		.pipe(cache(uglify()))
		.pipe(gulp.dest('build/'))
);

// Cache & flatmap (with uglify, as exemple), works
gulp.task(
	'cache-map',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(rename('ts.js'))
		.pipe(flatmap(stream => stream.pipe(cache(uglify()))))
		.pipe(gulp.dest('build/'))
);

// flatmap & Cache (with uglify, as exemple), dosn't works, dies without an error
gulp.task(
	'map-cache',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(rename('ts.js'))
		.pipe(cache(flatmap(stream => stream.pipe(uglify()))))
		.pipe(gulp.dest('build/'))
);

// TS Only, Single ts-file works
gulp.task(
	'ts1',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(typescript({"target": "ES5"}))
		.pipe(gulp.dest('build/'))
);

// TS Only, fails with error, as it's execute one tsc with all files, see build.sh
gulp.task(
	'ts',
	() => gulp
		.src(['ts/*.ts', '!ts/*.d.ts'])
		.pipe(typescript({"target": "ES5"}))
		.pipe(gulp.dest('build/'))
);

// TS & cache, single file, Fails without an error
gulp.task(
	'ts1-cache',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(cache(typescript({"target": "ES5"})))
		.pipe(gulp.dest('build/'))
);

// TS & Flatmap, single-file, works
gulp.task(
	'ts1-map',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(flatmap(stream => stream.pipe(typescript({"target": "ES5"}))))
		.pipe(gulp.dest('build/'))
);

// TS & Flatmap, all-files, works
gulp.task(
	'ts-map',
	() => gulp
		.src(['ts/*.ts', '!ts/*.d.ts'])
		.pipe(flatmap(stream => stream.pipe(typescript({"target": "ES5"}))))
		.pipe(gulp.dest('build/'))
);

// Dies without an error
gulp.task(
	'ts1-cache-map',
	() => gulp
		.src(['ts/a.ts'])
		.pipe(flatmap(stream => stream.pipe(cache(typescript({"target": "ES5"})))))
		.pipe(gulp.dest('build/'))
);

// Dies without an error
gulp.task(
	'ts1-map-cache',
	() => gulp
		.src(['ts/a.d.ts'])
		.pipe(cache(flatmap(stream => stream.pipe(typescript({"target": "ES5"})))))
		.pipe(gulp.dest('build/'))
);
