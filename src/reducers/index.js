import { combineReducers } from 'redux';
import * as ClockReducer from 'src/reducers/clockReducer';

export default combineReducers(Object.assign(ClockReducer));
