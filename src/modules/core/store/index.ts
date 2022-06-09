import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { RootState } from './root-state';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state: RootState = {};

export const store = new Store<RootState>({
  state,
  mutations,
  actions,
  getters,
});

export const initialState = state;

export default () => store;
