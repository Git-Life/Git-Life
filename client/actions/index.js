import Axios from 'axios';

export const UPDATE_SEARCHTERM = 'UPDATE_SEARCHTERM';
export function updateSearchTerm(searchTerm = null){
  console.log("term:", searchTerm);
  return {
    type: UPDATE_SEARCHTERM,
    searchTerm
  }
}

export const REQUEST_GIT = 'REQUEST_GIT';
export function searchGitHub(searchTerm){
console.log("inside searchGitHub", searchTerm)
  var request = Axios.get('/search/repos', {
      params: {
      searchTerm: searchTerm
      }
  });

  return {
    type: REQUEST_GIT,
    data: request
  }

}
