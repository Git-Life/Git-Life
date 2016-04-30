import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';
import ReducerCommits from './reducer_commits';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults,
  commitData: ReducerCommits
});

export default rootReducer;
