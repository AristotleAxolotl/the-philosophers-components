/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [{ pattern: config.grep ? config.grep : 'test/ui/**/*.test.js', type: 'module' }],
    }),
  );
  return config;
};
