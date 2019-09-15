const { env, parserOptions } = require('eslint-config-singh')

module.exports = {
  extends: [
    'eslint-config-singh',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks',
    './react-overwrites'
  ].map(require.resolve),
  parserOptions,
  env
}
