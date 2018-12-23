# Gulp testing
Testing why gulp-typescript, gulp-flatmap and gulp-cache dosn't work togheter.

## Install
* `git clone -b bug/gulp-typescript https://github.com/puggan/exemples.git`
* `npm install`

## Tests / Gulp Tasks
* `gulp cc` clear cache
* `gulp cache` exemple on a working use of gulp-cache
* `gulp cache-map` gulp-cache and gulp-flatmap working togheter
* `gulp map-cache` gulp-cache and gulp-flatmap **not** working togheter
* `gulp ts1` gulp-typescript working
* `gulp ts1-cache` gulp-typescript & gulp-cache not working togheter.
* `gulp ts1-cache-map` all 3 not working togheter
* `gulp ts1-map-cache` all 3 not working togheter, different order
* `gulp ts` gulp-typescript not working, as it can't isolate the files
* `gulp ts-map` gulp-typescript working with gulp-flatmap to isolate the files.
* `gulp ts1-map` same as ts-map, but just one file.
