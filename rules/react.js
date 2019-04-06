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

    'react/require-render-return': 'error',

    'react/jsx-indent-props': ['error', 2],

    'react/jsx-indent': ['error', 2],

    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    'react/jsx-uses-react': 'error',

    'react/jsx-uses-vars': 'error',

    'react/no-danger': 'warn',

    'react/no-deprecated': 'error',

    'react/no-did-update-set-state': 'error',

    'react/no-will-update-set-state': 'error',

    'react/no-unknown-property': 'error',

    'react/sort-comp': ['error', {
      order: [
        'type-annotations',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],

    'react/no-unused-state': 'error',

    'react/no-access-state-in-setstate': 'error',

    'react/destructuring-assignment': ['error', 'always'],

  },

  settings: {
    react: {
      version: '16.0',
    },
  },
};
