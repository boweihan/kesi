module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
