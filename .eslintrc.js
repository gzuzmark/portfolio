module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jsx-a11y/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['jsx-a11y'],
};
