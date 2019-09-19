const fetch = require('node-fetch');

module.exports = class Proxy {
  constructor() {
    this.url = '';
    this.mocks = {};
  }

  setUrl(url) {
    this.url = url;
  }

  addMock(method, data, filter) {
    if (typeof data === 'string') {
      this.mocks[method] = {
        file: data,
        filter,
      };
      return;
    }
    this.mocks[method] = {
      data,
      filter,
    };
  }

  _createUrl(url, params) {
    if (!params) return url;

    const newUrl = new URL(new fetch.Request(this.url).url);
    const search = new URLSearchParams(newUrl.search);

    Object.keys(params).map(key => search.set(key, params[key]));

    newUrl.search = search;

    return newUrl;
  }

  async _request(method, params, body) {
    if (!this.url) return Promise.reject(new Error('No URL configured for Proxy.'));

    if (!process.env.MOCK) {
      const url = this._createUrl(this.url, params);
      console.log('>> ', method, url.href);
      const r = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        body: body ? JSON.stringify(body) : null,
      });
      console.log('<< ', r.status, r.statusText);

      if (method === 'delete' || r.status !== 200) return null;

      return r.json();
    }

    if (this.mocks[method] || this.mocks.all) {
      const mock = this.mocks[method] || this.mocks.all;
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const data = mock.file ? require(mock.file) : mock.data;
      return typeof mock.filter === 'function' ? mock.filter(data) : data;
    }
    return null;
  }

  async get(params) {
    return this._request('get', params);
  }

  async post(body, params) {
    return this._request('post', params, body);
  }

  async put(body, params) {
    return this._request('put', params, body);
  }

  async patch(body, params) {
    return this._request('patch', params, body);
  }

  async delete(params) {
    return this._request('delete', params);
  }
};
