module.exports = {
  rules: {
    'no-shadow': 'error',

    'no-shadow-restricted-names': 'error',

    'no-undef': 'error',

    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    'no-use-before-define': ['error', { variables: false }],
  },
};
