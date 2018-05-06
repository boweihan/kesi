import { combineReducers } from 'redux';
import * as FastReducer from 'src/reducers/fastReducer';
import * as StatReducer from 'src/reducers/statReducer';
import * as NotificationReducer from 'src/reducers/notificationReducer';

export default combineReducers(
  Object.assign({}, FastReducer, StatReducer, NotificationReducer),
);
