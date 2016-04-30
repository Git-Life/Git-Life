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
  var results = Axios.get('/splash/repos', {
      params: {
      searchTerm: searchTerm
      }
  });
  return {
    type: REQUEST_GIT,
    payload: results
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
