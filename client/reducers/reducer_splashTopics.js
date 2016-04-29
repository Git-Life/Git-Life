import {REQUEST_WIRED} from '../actions/index';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case REQUEST_WIRED:
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}
