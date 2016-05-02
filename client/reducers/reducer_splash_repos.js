import {GET_SPLASH_REPOS} from '../actions/index';

const initialState = "";

export default function(state = initialState, action){
  switch(action.type){
    case GET_SPLASH_REPOS:
      return action.payload;
    default:
      return state;
  }
};
