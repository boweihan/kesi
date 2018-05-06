// @flow
import * as types from 'src/constants/actions';

export const addFastStat = (fastStat: Object) => (dispatch: Function) => {
  dispatch({
    type: types.ADD_FAST_STAT,
    fastStat,
  });
};
