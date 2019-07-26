module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'sort-keys': 1,
    'sort-vars': 1,
    'import/named': 0,
    quotes: [2, 'single', 'avoid-escape'],
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'comma-dangle': 2,
    'sort-keys': 0,
    'react-native/no-inline-styles': 0,
  },
};
