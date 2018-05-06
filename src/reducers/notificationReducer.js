// @flow
import createReducer from 'src/helpers/createReducer';
import * as types from 'src/constants/actions';

const defaultNotification = {
  token: '',
  notification: null,
};

export const notification = createReducer((defaultNotification: Object), {
  [types.SET_NOTIFICATION_TOKEN](state, action: { token: string }) {
    if (action.token) {
      return Object.assign({}, state, { token: action.token });
    }
    return state;
  },
  [types.SET_NOTIFICATION](state, action: { notification: Object }) {
    if (action.notification) {
      return Object.assign({}, state, { notification: action.notification });
    }
    return state;
  },
});
