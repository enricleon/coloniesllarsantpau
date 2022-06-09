import { ActionTree } from 'vuex';

import Vue from 'vue/types/umd';
import { State } from './state';

import { RootState } from '@/modules/core/store/root-state';

const actions: ActionTree<State, RootState> = {
  async dummyAction({ commit, state }) {},
};

export default actions;
