module.exports = {
  plugins: [
    'import',
  ],

  rules: {
    'import/no-duplicates': 'error',

    'import/no-mutable-exports': 'error',

    'import/prefer-default-export': 'error',

    'import/first': 'error',

    'import/exports-last': 'error',

    'import/no-named-export': 'error',
  },
};
