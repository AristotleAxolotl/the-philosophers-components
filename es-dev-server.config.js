const proxy = require('koa-proxies');
const url = require('url');

module.exports = {
  port: 3000,
  watch: true,
  nodeResolve: true,
  open: true,
  moduleDirs: ['node_modules'],
  middlewares: [
    function rewriteIndex(context, next) {
      if (context.url.match(/\/api/)) return next();
      if (context.url.match(/\/__/)) return next();
      if (context.url.match(/\/node_modules/)) return next();
      if (context.url.match(/\/vsm-ui-components/)) return next();
      if (context.url.match(/\/favicon.ico/)) return next();
      const stripped = context.url.substr(1);
      const newUrl = url.resolve('/src/', stripped);
      console.log(stripped, ' -> ', newUrl);
      context.url = newUrl;
      return next();
    },
    proxy('/api', {
      target: 'http://localhost:3001/',
    }),
  ],
};
