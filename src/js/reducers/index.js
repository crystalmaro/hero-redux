// import { ADD_ARTICLE } from "../constants/action-types";
import { GET_HEROES } from "../constants/action-types";


const initialState = {
  // articles: [],
  remoteHeroes: []
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return Object.assign({}, state, {
        remoteHeroes: state.remoteHeroes.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;