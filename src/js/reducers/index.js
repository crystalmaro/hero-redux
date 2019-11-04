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
	SET_ID,
} from '../constants/action-types';

const initialState = {
	fetchingHeroes: false,
	remoteHeroes: [],
	fetchingProfile: false,
	remoteProfile: {},
	// {
	// 	str: 0,
	// 	int: 0,
	// 	agi: 0,
	// 	luk: 0,
	// },
	currentHeroID: null,
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
				// currentHeroID: action.id,
			};
		case GET_PROFILE:
			return {
				...state,
				fetchingProfile: false,
				remoteProfile: action.payload,
				totalPoints: Object.values(action.payload).reduce((a, b) => a + b),
				// reset available point back to 0 when fetching different profile
				availablePoints: 0,
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
			state.remoteProfile[action.payload] = state.remoteProfile[action.payload] + 1;
			return {
				...state,
				availablePoints: state.availablePoints - 1,
				remoteProfile: state.remoteProfile,
				// teresa: action.payload,
				// remoteProfile: {...remoteProfile, state.remoteProfile[action.payload] + 1 }
			};
		case DEC_POWER:
			// console.log('OOOOOO' + state);
			state.remoteProfile[action.payload] = state.remoteProfile[action.payload] - 1;
			return {
				...state,
				availablePoints: state.availablePoints + 1,
				remoteProfile: state.remoteProfile,
			};
		case SET_ID:
			return {
				...state,
				currentHeroID: Number(action.payload),
			};
		default:
			return state;
	}
};

// const rootReducer = combineReducers({
// 	getHeroesReducer
// });

export default rootReducer;
