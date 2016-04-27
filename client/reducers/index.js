import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';

const rootReducer = combineReducers({
  results: ReducerResults
});

export default rootReducer;
