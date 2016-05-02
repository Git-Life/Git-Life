import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';
import ReducerSplashRepos from './reducer_splash_repos';
import ReducerCommits from './reducer_commits';
import ReducerSplash from './reducer_splashTopics';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults,
  splashRepos: ReducerSplashRepos
  commitData: ReducerCommits,
  wiredResults: ReducerSplash
});

export default rootReducer;
