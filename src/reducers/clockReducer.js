// @flow
import createReducer from 'src/helpers/createReducer';
import * as types from 'src/constants/actions';

const defaultClock = {
  startTime: null,
  endTime: null,
};

export const clock = createReducer((defaultClock: Object), {
  [types.SET_CLOCK_START_TIME](state, action: { time: number }) {
    if (action.time) {
      return Object.assign({}, state, {
        startTime: action.time,
      });
    }
    return state;
  },
  [types.SET_CLOCK_END_TIME](state, action: { time: number }) {
    if (action.time) {
      return Object.assign({}, state, {
        startTime: action.time,
      });
    }
    return state;
  },
});
