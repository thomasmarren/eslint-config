module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }], // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
      }
    }
  ],
}
