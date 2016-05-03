import {REQUEST_GIT} from '../actions/index';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case REQUEST_GIT:
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}