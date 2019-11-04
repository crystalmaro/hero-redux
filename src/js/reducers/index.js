// import { combineReducers } from 'redux';
import {
	GET_HEROES_REQUEST,
	GET_HEROES,
	GET_PROFILE_REQUEST,
	GET_PROFILE,
	PATCH_POWER_REQUEST,
	PATCH_POWER_COMPLETE,
	INC_POWER,
	DEC_POWER,
} from '../constants/action-types';

const initialState = {
	fetchingHeroes: false,
	remoteHeroes: [],
	currentHeroID: null,
	fetchingProfile: false,
	// remoteProfile:[],
	remoteProfile: {},
	// remoteProfile:null,
	totalPoints: 0,
	availablePoints: 0,
	patchingPower: false,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_HEROES_REQUEST:
			return {
				...state,
				fetchingHeroes: true,
			};
		case GET_HEROES:
			// return (
			//   Object.assign({}, state, {
			//     remoteHeroes: state.remoteHeroes.concat(action.payload),
			//   })
			// )
			// return {...state, remoteHeroes: action.payload}
			return {
				...state,
				fetchingHeroes: false,
				remoteHeroes: action.payload,
			};
		case GET_PROFILE_REQUEST:
			return {
				...state,
				fetchingProfile: true,
				currentHeroID: action.id,
			};
		case GET_PROFILE:
			// return Object.assign({}, state, {
			//   // remoteProfile: state.remoteProfile.concat(action.payload),
			//   remoteProfile: state.remoteProfile.concat(action.payload),
			//   fetchingProfile: false,
			//   totalPoints: Object.values(action.payload).reduce((a, b) => a + b)
			//  })
			return {
				...state,
				fetchingProfile: false,
				remoteProfile: action.payload,
				totalPoints: Object.values(action.payload).reduce((a, b) => a + b),
			};
		case PATCH_POWER_REQUEST:
			return {
				...state,
				patchingPower: true,
			};
		case PATCH_POWER_COMPLETE:
			return {
				...state,
				patchingPower: false,
			};
		case INC_POWER:
			return {
				...state,
				availablePoints: state.availablePoints - 1,
			};
		case DEC_POWER:
			return {
				...state,
				availablePoints: state.availablePoints + 1,
			};
		default:
			return state;
	}
};

// const rootReducer = combineReducers({
// 	getHeroesReducer
// });

export default rootReducer;
