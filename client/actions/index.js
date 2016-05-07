import Axios from 'axios';

export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export function updateSearchTerm(searchTerm = null){
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  }
}
export const REQUEST_GIT = 'REQUEST_GIT';
export function searchGitHub(searchTerm){
  var results = Axios.get('/search/repos', {
      params: {
        searchTerm: searchTerm
      }
  });
  return {
    type: REQUEST_GIT,
    payload: results
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
  var hnResults = Axios.get('/splash/rsshn', {
      params: {

      }
  });
  return {
    type: REQUEST_HN,
    payload: hnResults
  }
}
