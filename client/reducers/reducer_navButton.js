import {UPDATE_NAV_BUTTON} from '../actions/index';

const initialState = "";

export default function(state = initialState, action) {
  switch(action.type){
    case UPDATE_NAV_BUTTON:
      return action.navButton;
    default:
      return state;
  }
}
