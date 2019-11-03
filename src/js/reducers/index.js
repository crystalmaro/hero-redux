// import { combineReducers } from 'redux';
import { GET_HEROES_REQUEST, 
  GET_HEROES, 
  GET_PROFILE_REQUEST, 
  GET_PROFILE 
} from "../constants/action-types";


const initialState = {
  fetchingHeroes: false,
  remoteHeroes: [],
  fetchingProfile: false,
  // remoteProfile:[],
  remoteProfile:{},
  // remoteProfile:null,
  profilePoints: 0,
  currentHeroID: 0,
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEROES_REQUEST:
      return {...state,
        fetchingHeroes: true
      }
      break;
    case GET_HEROES:
      // return (
      //   Object.assign({}, state, {
      //     remoteHeroes: state.remoteHeroes.concat(action.payload),
      //   })
      // )
      // return {...state, remoteHeroes: action.payload}
      return {...state,
        fetchingHeroes: false,
        remoteHeroes: action.payload
      }
      break;
    case GET_PROFILE_REQUEST:
      return {...state,
        fetchingProfile: true,
        currentHeroID: action.payload
      }
      break;
    case GET_PROFILE:
      // return Object.assign({}, state, {
      //   // remoteProfile: state.remoteProfile.concat(action.payload),
      //   remoteProfile: state.remoteProfile.concat(action.payload),
      //   fetchingProfile: false,
      //   profilePoints: Object.values(action.payload).reduce((a, b) => a + b)
      //  })
      return {...state,
        fetchingProfile: false,
        remoteProfile: action.payload,
        profilePoints: Object.values(action.payload).reduce((a, b) => a + b),
        }
      break;
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
// 	getHeroesReducer
// });


export default rootReducer;