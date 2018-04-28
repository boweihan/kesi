import * as types from 'src/constants/actions';

export const setClockStartTime = time => dispatch => {
  dispatch({
    type: types.SET_CLOCK_START_TIME,
    time,
  });
};

export const setClockEndTime = time => dispatch => {
  dispatch({
    type: types.SET_CLOCK_END_TIME,
    time,
  });
};
