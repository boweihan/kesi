// @flow
import * as types from 'src/constants/actions';

export const setFastLength = (hours: number) => (dispatch: Function) => {
  dispatch({
    type: types.SET_FAST_LENGTH,
    hours,
  });
};
