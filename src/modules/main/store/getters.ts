import { GetterTree } from 'vuex';

import { State } from './state';
import { RootState } from '@/modules/core/store/root-state';

const getters: GetterTree<State, RootState> = {
  // With 3 parameters, you access the root state
  dummyGetter: (state, getters, rootState) => 'dummyGetter',
};

export default getters;
