import {NEWORGS_REQUEST} from '../actions/index';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case NEWORGS_REQUEST:
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}