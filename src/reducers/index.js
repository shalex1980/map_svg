import { combineReducers } from 'redux';
import {totalReducer} from './totalReducer';

const reducer = combineReducers({
  total: totalReducer,

});

export default reducer;