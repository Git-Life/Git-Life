import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';
import ReducerSplashRepos from './reducer_splash_repos';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults,
  splashRepos: ReducerSplashRepos
});

export default rootReducer;
