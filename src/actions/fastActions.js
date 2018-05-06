// @flow
import * as types from 'src/constants/actions';

export const setFast = (fast: Object) => (dispatch: Function) => {
  dispatch({
    type: types.SET_FAST,
    fast,
  });
};

export const setFastLength = (hours: number) => (dispatch: Function) => {
  dispatch({
    type: types.SET_FAST_LENGTH,
    hours,
  });
  dispatch({
    type: types.SET_FAST_START_TIME,
    time: new Date(),
  });
};

export const setCurrentTime = (currentTime: number) => (dispatch: Function) => {
  dispatch({
    type: types.SET_CURRENT_TIME,
    time: currentTime,
  });
};

export const setFastTimeLeft = (timeLeft: string) => (dispatch: Function) => {
  dispatch({
    type: types.SET_FAST_TIME_LEFT,
    timeLeft,
  });
};
