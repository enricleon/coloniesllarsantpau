import { ActionTree } from 'vuex';

import { RootState } from './root-state';

const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit, dispatch, state }, { req, params, store, error, redirect }) {},
};

export default actions;
