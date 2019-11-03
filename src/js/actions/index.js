// import { ADD_ARTICLE } from '../constants/action-types';
import { GET_HEROES_REQUEST, GET_HEROES, GET_PROFILE_REQUEST, GET_PROFILE } from '../constants/action-types';
import axios from 'axios';

// export function addArticle(payload) {
// 	return { type: ADD_ARTICLE, payload };
// }

// export const getHeroes = () => {
// 	return function(dispatch) {
//     return fetch('https://hahow-recruit.herokuapp.com/heroes/')
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({ type: GET_HEROES, payload: json });
//       console.log('[action] getHeroes')
// 		});
// 	};
// }

export const getHeroes = () => {
  return function(dispatch) {
  dispatch({type: GET_HEROES_REQUEST})
  axios.get('https://hahow-recruit.herokuapp.com/heroes/')
    .then((response)=>{
      dispatch({type: GET_HEROES, payload: response.data})
    })
  }
}

// export const getProfile = (e) => {
//   return function(dispatch) {
//     return fetch(`http://hahow-recruit.herokuapp.com/heroes/${e.target.id}/profile/`)
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({ type: GET_PROFILE, payload: json });
//       console.log('[action] getProfile')
//     });
//   };
// }

export const getProfile = (e) => {
  return function(dispatch) {
  dispatch({type: GET_PROFILE_REQUEST, payload: e.target.id})
  axios.get(`http://hahow-recruit.herokuapp.com/heroes/${e.target.id}/profile/`)
    .then((response)=>{
      dispatch({type: GET_PROFILE, payload: response.data})
    })
  }
}

// http://hahow-recruit.herokuapp.com/heroes/1/profile