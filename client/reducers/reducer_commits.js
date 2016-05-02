import {COMMIT_DATA} from '../actions/index';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case COMMIT_DATA:
      // return Object.assign({}, state, {
      //   data: action.payload.data
      // });
      return action.payload.data;
    default:
      return state;
  }
}
