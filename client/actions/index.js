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

export const COMMIT_DATA = 'COMMIT_DATA';
export function getCommitData(){
  // add searchTerm parameter if want to base results on this,
  // and also add searchTerm as a 'params' object
  var results = Axios.get('/splash/commitData', {
      params: {
      }
  });
  return {
    type: COMMIT_DATA,
    payload: results
  }
}
