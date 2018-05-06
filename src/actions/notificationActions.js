// @flow
import * as types from 'src/constants/actions';

export const setNotificationToken = (token: string) => (dispatch: Function) => {
  dispatch({
    type: types.SET_NOTIFICATION_TOKEN,
    token,
  });
};

export const setNotification = (notification: Object) => (
  dispatch: Function,
) => {
  dispatch({
    type: types.SET_NOTIFICATION,
    notification,
  });
};
