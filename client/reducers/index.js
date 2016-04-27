import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults
});

export default rootReducer;
