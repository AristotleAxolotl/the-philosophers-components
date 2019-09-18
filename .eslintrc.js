const sonarJsConfig = require('eslint-plugin-sonarjs').configs.recommended.rules;

module.exports = {
  plugins: ['sonarjs', 'no-only-tests'],
  extends: ['@open-wc/eslint-config', 'eslint-config-prettier'].map(require.resolve),
  rules: {
    ...sonarJsConfig,
    'no-only-tests/no-only-tests': 'error',
    'class-methods-use-this': ['error', { exceptMethods: ['render', 'emits'] }],
  },
};
