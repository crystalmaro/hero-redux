// import { ADD_ARTICLE } from '../constants/action-types';
import { GET_HEROES } from '../constants/action-types';

// export function addArticle(payload) {
// 	return { type: ADD_ARTICLE, payload };
// }

export function getHeroes() {
	return function(dispatch) {
		return fetch('https://hahow-recruit.herokuapp.com/heroes/').then((response) => response.json()).then((json) => {
			dispatch({ type: GET_HEROES, payload: json });
		});
	};
}
