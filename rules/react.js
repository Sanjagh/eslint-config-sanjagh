module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    'react/prefer-es6-class': ['error', 'always'],

    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
    }],

    'react/jsx-closing-tag-location': 'error',

    'jsx-quotes': ['error', 'prefer-double'],

    'react/jsx-props-no-multi-spaces': 'error',

    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    'react/jsx-boolean-value': 'error',

    'react/no-array-index-key': 'error',

    'react/no-string-refs': 'error',

    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    'react/self-closing-comp': 'error',

    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
  },
};
