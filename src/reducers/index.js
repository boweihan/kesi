import { combineReducers } from 'redux';
import * as ClockReducer from 'src/reducers/clockReducer';
import * as FastReducer from 'src/reducers/fastReducer';

export default combineReducers(Object.assign(ClockReducer, FastReducer));
