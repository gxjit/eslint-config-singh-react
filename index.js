module.exports = {
  extends: [
    'eslint-config-singh',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks.js',
    './react-overwrites'
  ].map(require.resolve),
  parserOptions: require('eslint-config-singh').parserOptions
}
