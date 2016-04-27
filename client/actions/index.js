export const REQUEST_SEARCHTERM = 'REQUEST_SEARCHTERM';

export function requestSearchTerm(searchTerm = ''){
  console.log(searchTerm);
  return {
    type: REQUEST_SEARCHTERM,
    searchTerm
  }
}
