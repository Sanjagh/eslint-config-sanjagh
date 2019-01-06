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

  },
};
