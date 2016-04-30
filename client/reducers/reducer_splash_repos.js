import {GET_SPLASH_REPOS} from '../actions/index';

const initialState = {
  data: []
}

export default function(state = initialState, action){
  switch(action.type){
    case REQUEST_GIFS:
    return {
      ...state, data: action.payload.body.data
    };
    default:
      return state;
  }
};
