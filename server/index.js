const path = require('path');

const Server = require('../vsm-ui-server/server');

const server = new Server({
  path: process.env.DEV ? null : path.resolve('./dist/static'),
  port: process.env.PORT || 3001,
  session: true,
  base: '/api',
});

// eslint-disable-next-line no-console
console.log('Starting server for The Philosophers Components');

// eslint-disable-next-line no-console
if (process.env.DEV) console.log('*Running in DEV mode.*');

server.init();

server.listen();
