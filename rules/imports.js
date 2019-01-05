module.exports = {
  plugins: [
    'import',
  ],

  rules: {
    'import/no-duplicates': 'error',

    'import/no-mutable-exports': 'error',

    'import/prefer-default-export': 'error',

    'import/first': 'error',
  },
};
