module.exports = {
  extends: [
    './rules/errors',
    './rules/imports',
    './rules/best-practices',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
};
