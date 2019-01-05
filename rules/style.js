module.exports = {
  rules: {
    semi: ['error', 'always'],

    'semi-spacing': ['error', { before: false, after: true }],

    'semi-style': ['error', 'last'],

    'no-multi-assign': 'error',

    'one-var': ['error', 'never'],

    'no-plusplus': 'error',

    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    'no-new-object': 'error',

    'no-array-constructor': 'error',

    quotes: ['error', 'single'],

    'func-style': ['warn', 'expression'],

    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    'space-before-blocks': 'error',

    'function-paren-newline': ['error', 'consistent'],

    'implicit-arrow-linebreak': ['error', 'beside'],
  },
};
