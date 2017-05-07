import axios from 'axios';

import {
  FETCH_RECIPES
} from './types';

export const fetchRecipes = (search, callback) => async (dispatch) => {
  try {
    const url = "http://food2fork.com/api/search?key=08052bb590612bcb4e264d504283ee80&sort=r&q=" + search;
    console.log(url);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_RECIPES, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};
