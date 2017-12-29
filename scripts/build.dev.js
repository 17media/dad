const { promisify } = require('util');

const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');

const pumpify = promisify(require('pump'));
const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const { default: uglify } = require('gulp-uglify-es');
const size = require('gulp-size');

const pkg = require('../package.json');

(async () => {
  const bundle = await rollup({
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [babel()],
  });

  await bundle.write({
    format: 'umd',
    name: 'Dad',
    file: `out/${pkg.main}`,
    exports: 'named',
    globals: {
      ienv: 'ienv',
    },
  });

  await pumpify(
    src(['README.md', 'package.json']),
    dest('out'),

    src('out/dist/*.js'),
    uglify(),
    rename({
      suffix: '.min',
    }),
    dest('out/dist'),
  );

  await pumpify(
    src('out/**'),
    size({
      showFiles: true,
      pretty: true,
      gzip: true,
    }),
  );
})();

