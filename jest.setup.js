import { config } from '@vue/test-utils';

const path = require('path');
const glob = require('glob');
const Vue = require('vue');
const Vuex = require('vuex');

// Mock Nuxt client-side component
config.stubs['client-only'] = { template: '<div><slot /></div>' };
config.stubs.apexchart = { template: '<div></div>' };

Vuex.Store.prototype.$i18n = {
  locale: 'en-US',
};

glob.sync(path.join(__dirname, './src/modules/**/components/**/*.vue')).forEach((file) => {
  const name = file.match(/([\w-]+)\.vue$/)[1];
  Vue.component(name, require(file).default);
});

global.Vue = Vue;
