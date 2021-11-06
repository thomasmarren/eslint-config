# 🚿 ESLint Rules

## Base setup

1. Install the following `devDependencies` in your project

```bash
yarn add eslint --dev
yarn add eslint-plugin-security --dev
```

Add the following to package.json in `devDependencies`

```json
"eslint-config": "git://github.com/thomasmarren/eslint-config.git#main",
```

2. Extend the config in your `.eslintrc.js`

```js
module.exports = {
  extends: ['eslint-config'],
  ...
}
```

### Use with React

1. Follow step 1 of Base setup above
2. Install the following `devDependencies` in your project

```bash
yarn add eslint-plugin-react --dev
yarn add eslint-plugin-react-hooks --dev
```
3. Extend the configs in your `.eslintrc.js`

```js
module.exports = {
  extends: [
    'eslint-config',
    'eslint-config/react',
  ],
  ...
}
```

### Use with TypeScript

1. Follow step 1 of Base setup above
2. Install the following `devDependencies` in your project

```bash
yarn add @typescript-eslint/eslint-plugin@^2.16.0 --dev
yarn add @typescript-eslint/parser@^2.16.0 --dev
```
3. Extend the configs in your `.eslintrc.js`

```js
module.exports = {
  extends: [
    'eslint-config',
    'eslint-config/typescript',
  ],
  ...
}
```

## Overwrite rules

If you want to overwrite a rule in the config, just add to the rules object in your application's `.eslintrc.js`

```js
module.exports = {
  extends: ['eslint-config'],
  rules: {
    'eqeqeq': 'off',
  },
  ...
}
```
