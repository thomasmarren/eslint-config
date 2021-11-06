module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:security/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: false,
    document: false,
    __BROWSER__: false,
    localStorage: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    curly: [2, "multi-line"],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['error', 'smart'],
    'eol-last': ['error', 'always'],
    indent: ['error', 2],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-shadow': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': ['error'],
    quotes: [1, 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
  },
}
