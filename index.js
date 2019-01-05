module.exports = {
  extends: [
    './rules/imports',
    './rules/best-practices',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
};
