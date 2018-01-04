const { NODE_ENV, BABEL_ENV } = process.env;
console.log({
  NODE_ENV,
  BABEL_ENV,
});

const isProd = NODE_ENV === 'production';
module.exports = {
  presets: [
    ['env', {
      modules: !isProd && 'commonjs',
      targets: {
        browsers: ['ie 11'],
      },
    }],
  ],
};
