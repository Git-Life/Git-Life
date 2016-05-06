import {GET_ISSUES} from '../actions/index';

const initialState = {};

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ISSUES:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}
