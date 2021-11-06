module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  settings: {
    "react": {
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 0,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
      },
    ],
    "react/jsx-no-target-blank": ['error'],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-one-expression-per-line': [0, { allow: 'single-child' }],
    'react/jsx-sort-props': [
      2,
      {
        reservedFirst: ['key'],
        shorthandFirst: true,
        noSortAlphabetically: false,
        callbacksLast: true,
      },
    ],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-wrap-multilines': 2,
    'react/no-children-prop': 2,
    'react/no-unused-state': 2,
    'react/prefer-stateless-function': 2,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'handlers', 'everything-else', 'rendering', 'analytics'],
        groups: {
          handlers: ['/^handle.+$/', '/^on.+$/'],
          rendering: ['/^render.+$/', 'render'],
          analytics: ['/^analytics.+$/', 'analytics'],
        },
      },
    ],
  }
}
