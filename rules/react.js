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
  },
};
