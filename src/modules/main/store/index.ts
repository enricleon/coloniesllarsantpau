/**
 *  Vuex Module
 */
import { Module } from 'vuex';

import { State } from './state';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import { RootState } from '@/modules/core/store/root-state';

export const initialState: State = {};

export const store: Module<State, RootState> = {
  state: initialState,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default store;
