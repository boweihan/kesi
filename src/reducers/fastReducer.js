// @flow
import createReducer from 'src/helpers/createReducer';
import * as types from 'src/constants/actions';

const defaultFast = {
  length: null,
};

export const fast = createReducer((defaultFast: Object), {
  [types.SET_FAST_LENGTH](state, action: { hours: number }) {
    if (action.hours) {
      return Object.assign({}, state, {
        length: action.hours,
      });
    }
    return state;
  },
});
