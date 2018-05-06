// @flow
import createReducer from 'src/helpers/createReducer';
import * as types from 'src/constants/actions';

const defaultStats = {
  previousFasts: [],
};

export const stats = createReducer((defaultStats: Object), {
  [types.ADD_FAST_STAT](state, action: { fastStat: Object }) {
    if (action.fastStat) {
      const updatedPreviousFasts = state.previousFasts;
      updatedPreviousFasts.push(action.fastStat);
      return Object.assign({}, state, { previousFasts: updatedPreviousFasts });
    }
    return state;
  },
});
