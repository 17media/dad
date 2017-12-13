const { NODE_ENV } = process.env;

module.exports = {
  presets: [
    ['env', {
      module: NODE_ENV === 'test' ? undefined : false,
      targets: {
        node: 'current',
        browsers: 'ie 11',
      },
    }],
  ],
};
