import {REQUEST_DATAFEED} from '../actions/index';
const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case REQUEST_DATAFEED:
      return action.payload.data;
    default:
      return state;
  }
}
