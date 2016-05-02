import {REQUEST_HN} from '../actions/index';
const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case REQUEST_HN:
      return action.payload.data;
    default:
      return state;
  }
}
