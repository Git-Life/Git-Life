import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';
import ReducerSplash from './reducer_splashTopics';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults,
  wiredResults: ReducerSplash
});

export default rootReducer;
