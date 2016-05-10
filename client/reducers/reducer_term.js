import {UPDATE_SEARCHTERM} from '../actions/index'

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type){
    case UPDATE_SEARCHTERM:
      return action.searchTerm;
    default:
      return state;
    }

}
