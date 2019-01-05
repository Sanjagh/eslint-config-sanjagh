module.exports = {
  extends: [
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
};
