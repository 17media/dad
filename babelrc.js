const { NODE_ENV, BABEL_ENV } = process.env;
console.log({
  NODE_ENV,
  BABEL_ENV,
});
module.exports = {
  presets: [
    ['env', {
      modules: BABEL_ENV === 'build' ? false : 'commonjs',
      targets: {
        node: 'current',
        browsers: 'ie 11',
      },
    }],
  ],
};
