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

    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

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

  },
};
