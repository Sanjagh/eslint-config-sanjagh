module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
    },
  },
  rules: {
    'no-const-assign': 'error',

    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    'no-var': 'error',

    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
        enforceForRenamedProperties: false,
      }],

    'prefer-template': 'error',

    'template-curly-spacing': 'error',

    'prefer-rest-params': 'error',
  },
};
