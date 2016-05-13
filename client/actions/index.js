import Axios from 'axios';

export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export function updateSearchTerm(searchTerm = null){
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  }
}
export const REQUEST_GIT = 'REQUEST_GIT';
export function searchGitHub(searchParams){
  var results = Axios.get('/search/repos', {
      params: {
        searchTerm: searchParams.searchTerm,
        language: searchParams.language
      }
  });
  return {
    type: REQUEST_GIT,
    payload: results
  }
}
export const UPDATE_NAV_BUTTON = 'UPDATE_NAV_BUTTON';
export function updateNavButton(navButton = null){
  return {
    type: UPDATE_NAV_BUTTON,
    navButton
  }
}
export const ORGVIS_REQUEST = 'ORGVIS_REQUEST';
export function getTrendingOrgs(){
  var orgs = Axios.get('/splash/orgs', {});
  return {
    type: ORGVIS_REQUEST,
    payload: orgs
  }
}
export const NEWREPOS_REQUEST = 'NEWREPOS_REQUEST';
export function getNewRepos(){
  var newRepos = Axios.get('/splash/newRepos', {});
  return {
    type: NEWREPOS_REQUEST,
    payload: newRepos
  }
}
export const NEWORGS_REQUEST = 'NEWORGS_REQUEST';
export function getNewOrgs(){
  var newOrgs = Axios.get('/splash/newOrgs', {});
  return {
    type: NEWORGS_REQUEST,
    payload: newOrgs
  }
}
export const GET_SPLASH_REPOS = 'GET_SPLASH_REPOS';
export function getSplashRepos(){
  var repos = Axios.get('/splash/repos',{});
  return{
    type: GET_SPLASH_REPOS,
    payload: repos
  }
}
export const COMMIT_DATA = 'COMMIT_DATA';
export function getCommitData(){
  // add searchTerm parameter if want to base results on this,
  // and also add searchTerm as a 'params' object
  var commits = Axios.get('/splash/commitData', {
      params: {
      }
  });
  return {
    type: COMMIT_DATA,
    payload: commits
  }
}
export const REQUEST_WIRED = 'REQUEST_WIRED';
export function searchWired(){
  var wiredResults = Axios.get('/splash/rsswired', {
      params: {
      }
  });
  return {
    type: REQUEST_WIRED,
    payload: wiredResults
  }
}
export const REQUEST_DATAFEED = 'REQUEST_DATAFEED';
export function searchData(){
  var dataResults = Axios.get('/splash/rssdata', {
      params: {

      }
  });
  return {
    type: REQUEST_DATAFEED,
    payload: dataResults
  }
}
export const REQUEST_HN = 'REQUEST_HN';
export function searchHN(){
  var hnResults = Axios.get('/splash/rsshn');
  return {
    type: REQUEST_HN,
    payload: hnResults
  }
}
export const SELECT_REPO = 'SELECT_REPO';
export function selectRepo(selectedRepo = null){
  return {
    type: SELECT_REPO,
    payload: selectedRepo
  }
}
export const GET_ISSUES = 'GET_ISSUES';
export function getIssues(selectedRepo){
  var issues = Axios.get('/learn/issues', {
      params: {
        issuesURL: selectedRepo
      }
  });
  return{
    type: GET_ISSUES,
    payload: issues
  }
}
