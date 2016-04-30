import {GET_SPLASH_REPOS} from '../actions/index';

const initialState = "";

export default function(state = initialState, action){
  console.log('were in reducer splash repos', action.payload);
  switch(action.type){
    case GET_SPLASH_REPOS:
      return action.payload.data;
    default:
      return state;
  }
};
