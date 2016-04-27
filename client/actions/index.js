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
  return {
    type:  REQUEST_GIT,
    searchTerm
  }

}
