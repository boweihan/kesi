module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['flowtype', 'react', 'jsx-a11y', 'import'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'no-mixed-operators': 'off',
  },
};
