/* eslint-disable import/extensions */
import { utils } from './utils';

const NOOP_EVENT = () => ({
  on: () => true,
});

const NOOP_HOOK = hook => {
  const out = {};
  out[hook] = () => true;
  return out;
};

export const pluggable = superclass =>
  class extends superclass {
    constructor() {
      super();
      this._plugins = [];
    }

    firstUpdated() {
      this._plugins = utils
        .getDirectDecendants(this, '[plugin]')
        .sort((a, b) => a.getAttribute('order') - b.getAttribute('order'));

      this._plugins.forEach((plugin, index) => {
        if (typeof plugin.init === 'function') plugin.init(this);
        if (typeof plugin.load === 'function') {
          this._plugins[index] = plugin.load();
        }
      });
    }

    getPlugins() {
      return [...this._plugins];
    }

    getPluginsForHook(hook) {
      return this._plugins.filter(p => typeof p[hook] === 'function');
    }

    getPluginsForEvent(event) {
      return this._plugins.filter(p => p.canEmit && p.canEmit(event));
    }

    getPluginForEvent(event) {
      if (!this._plugins.length) return NOOP_EVENT();
      const p = this.getPluginsForEvent(event).shift();
      if (p) return p;
      throw new Error(`getPluginForEvent called: ${event} not defined.`);
    }

    getPluginForHook(hook) {
      if (!this._plugins.length) return NOOP_HOOK(hook);
      const p = this.getPluginsForHook(hook).shift();
      if (p) return p;
      throw new Error(`getPluginForHook called: ${hook} not defined.`);
    }

    executeAllHooks(hook, data) {
      return this.getPluginsForHook(hook).reduce(
        (previousData, plugin) => plugin[hook](previousData),
        data,
      );
    }

    executeHook(hook, data) {
      return this.getPluginForHook(hook)[hook](data);
    }

    bindToPlugin(event, handler) {
      this.getPluginForEvent(event).on(event, handler);
    }

    bindToAllPlugins(event, handler) {
      this.getPluginsForEvent(event).map(p => p.on(event, handler));
    }
  };
