// @flow
import createReducer from 'src/helpers/createReducer';
import * as types from 'src/constants/actions';

const defaultFast = {
  length: 0,
  startTime: new Date(),
  currentTime: new Date(),
  timeLeft: '',
};

export const fast = createReducer((defaultFast: Object), {
  [types.SET_FAST](state, action: { fast: Object }) {
    if (action.fast) {
      return Object.assign({}, state, action.fast);
    }
    return state;
  },
  [types.SET_FAST_LENGTH](state, action: { hours: number }) {
    if (action.hours) {
      return Object.assign({}, state, {
        length: action.hours,
      });
    }
    return state;
  },
  [types.SET_FAST_START_TIME](state, action: { time: Date }) {
    if (action.time) {
      return Object.assign({}, state, {
        startTime: action.time,
      });
    }
    return state;
  },
  [types.SET_CURRENT_TIME](state, action: { time: Date }) {
    if (action.time) {
      return Object.assign({}, state, {
        currentTime: action.time,
      });
    }
    return state;
  },
  [types.SET_FAST_TIME_LEFT](state, action: { timeLeft: string }) {
    if (action.timeLeft) {
      return Object.assign({}, state, {
        timeLeft: action.timeLeft,
      });
    }
    return state;
  },
});
