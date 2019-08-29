const path = require('path');

const tmp = path.resolve(__dirname, '.disttmp');
const createDefaultConfig = require('@open-wc/building-rollup/modern-config');

const finalConfig = createDefaultConfig({ input: './src/index.html' });

finalConfig.output.dir = path.resolve(tmp, 'static');

exports.default = finalConfig;
