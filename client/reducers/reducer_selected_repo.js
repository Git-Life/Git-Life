import {SELECT_REPO} from '../actions/index';

const initialState = {};

export default function(state = initialState, action) {
  switch(action.type){
    case SELECT_REPO:
      return Object.assign({}, state, {
        data: action.payload
      });
    case GET_ISSUES:
      return Object.assign({}, state, {
        issues: action.payload
      })
    default:
      return state;
  }
}
