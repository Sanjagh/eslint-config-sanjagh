module.exports = {
  rules: {
    semi: ['error', 'always'],

    'semi-spacing': ['error', { before: false, after: true }],

    'semi-style': ['error', 'last'],

    'no-multi-assign': 'error',

    'one-var': ['error', 'never'],

    'no-plusplus': 'error',

    'no-new-object': 'error',

    'no-array-constructor': 'error',

    quotes: ['error', 'single'],

    'func-style': ['warn', 'expression'],

    'func-names': 'error',

    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    'space-before-blocks': 'error',

    'function-paren-newline': ['error', 'consistent'],

    'implicit-arrow-linebreak': ['error', 'beside'],

    'no-nested-ternary': 'error',

    'no-unneeded-ternary': 'error',

    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],

    'nonblock-statement-body-position': ['error', 'beside'],

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    'spaced-comment': ['error', 'always'],

    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],

    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    'space-infix-ops': 'error',

    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

    'space-in-parens': ['error', 'never'],

    'array-bracket-spacing': ['error', 'never'],

    'object-curly-spacing': ['error', 'always'],

    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    'block-spacing': ['error', 'always'],

    'comma-spacing': ['error', { before: false, after: true }],

    'func-call-spacing': ['error', 'never'],

    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    camelcase: ['error', { properties: 'never' }],

    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    'no-underscore-dangle': ['error', {
      allow: ['_id'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    'eol-last': ['error', 'always'],
  },

};
