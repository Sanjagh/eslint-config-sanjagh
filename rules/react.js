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

  },
};
