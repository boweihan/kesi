// @flow
import * as types from 'src/constants/actions';

export const setClockStartTime = (time: number) => (dispatch: Function) => {
  dispatch({
    type: types.SET_CLOCK_START_TIME,
    time,
  });
};

export const setClockEndTime = (time: number) => (dispatch: Function) => {
  dispatch({
    type: types.SET_CLOCK_END_TIME,
    time,
  });
};
