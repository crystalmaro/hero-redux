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
import axios from 'axios';

export const setID = (e) => {
	return function(dispatch) {
		dispatch({
			type: SET_ID,
			payload: e.target.id,
		});
		dispatch({
			type: GET_PROFILE_REQUEST,
			// id: e,
		});
		axios.get(`https://hahow-recruit.herokuapp.com/heroes/${e.target.id}/profile/`).then((response) => {
			dispatch({ type: GET_PROFILE, payload: response.data });
		});
	};
};

export const getHeroes = () => {
	return function(dispatch) {
		dispatch({ type: GET_HEROES_REQUEST });
		axios.get('https://hahow-recruit.herokuapp.com/heroes/').then((response) => {
			dispatch({ type: GET_HEROES, payload: response.data });
		});
	};
};

export const incPower = (name) => {
	return {
		type: INC_POWER,
		payload: name,
	};
};

export const decPower = (name) => {
	return {
		type: DEC_POWER,
		payload: name,
	};
};

export const getProfile = (e) => {
	console.log(e);
	return function(dispatch) {
		dispatch({
			type: SET_ID,
			payload: e,
		});
		dispatch({
			type: GET_PROFILE_REQUEST,
			// id: e,
		});
		axios.get(`http://hahow-recruit.herokuapp.com/heroes/${e}/profile/`).then((response) => {
			dispatch({ type: GET_PROFILE, payload: response.data });
		});
	};
};

export const patchPower = (id, body) => {
	return function(dispatch) {
		dispatch({ type: PATCH_POWER_REQUEST });
		axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`, body).then(() => {
			dispatch({ type: PATCH_POWER_COMPLETE });
		});
	};
};
