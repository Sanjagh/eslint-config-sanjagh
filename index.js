module.exports = {
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
};
