import { combineReducers } from 'redux';
import * as FastReducer from 'src/reducers/fastReducer';
import * as StatReducer from 'src/reducers/statReducer';

export default combineReducers(Object.assign({}, FastReducer, StatReducer));
