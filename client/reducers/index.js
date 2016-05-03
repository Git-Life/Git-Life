import {combineReducers} from 'redux';
import ReducerResults from './reducer_results';
import ReducerTerm from './reducer_term';
import ReducerOrgVis from './reducer_orgvis';
import ReducerSplashRepos from './reducer_splash_repos';
import ReducerCommits from './reducer_commits';
import ReducerSplash from './reducer_splashTopics';
import ReducerData from './reducer_dataTopics';
import ReducerHN from './reducer_hnTopics';

const rootReducer = combineReducers({
  term: ReducerTerm,
  results: ReducerResults,
  splashRepos: ReducerSplashRepos,
  commitData: ReducerCommits,
  wiredResults: ReducerSplash,
  dataResults: ReducerData,
  hnResults: ReducerHN,
  orgs: ReducerOrgVis
});

export default rootReducer;
