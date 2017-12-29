const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

const pump = require('pump');
const gu = require('gulp');
const rename = require('gulp-rename');
const { default: uglify } = require('gulp-uglify-es');
const size = require('gulp-size');

const pkg = require('../package.json');

rollup
  .rollup({
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [babel()],
  })
  .then(bundle =>
    bundle.write({
      format: 'umd',
      name: 'Dad',
      file: `out/${pkg.main}`,
      exports: 'named',
      globals: {
        ienv: 'ienv',
      },
    }),
  )
  .then(() => {
    pump(
      [
        gu.src(['README.md', 'package.json']),
        gu.dest('out'),

        gu.src('out/dist/*.js'),
        uglify(),
        rename({
          suffix: '.min',
        }),
        gu.dest('out/dist'),
      ],
      () =>
        pump([
          gu.src('out/**'),
          size({
            showFiles: true,
            pretty: true,
            gzip: true,
          }),
        ]),
    );
  });
