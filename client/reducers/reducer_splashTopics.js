import {REQUEST_WIRED} from '../actions/index';
import {REQUEST_DATAFEED} from '../actions/index';
const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case REQUEST_WIRED:
      return action.payload.data;
    case REQUEST_DATAFEED:
      return action.payload.data;
    default:
      return state;
  }
}
