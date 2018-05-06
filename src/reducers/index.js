import { combineReducers } from 'redux';
import * as FastReducer from 'src/reducers/fastReducer';

export default combineReducers(Object.assign({}, FastReducer));
