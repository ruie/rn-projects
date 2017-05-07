import axios from 'axios';

import {
  FETCH_RECIPES
} from './types';

export const fetchRecipes = (search, callback) => async (dispatch) => {
  try {
    const url = "http://www.recipepuppy.com/api/?p=20&q=" + search;
    console.log(url);
    let { data } = await axios.get(url);
    console.log(data.results);
    dispatch({ type: FETCH_RECIPES, payload: data.results });
    callback();
  } catch (e) {
    console.error(e);
  }
};
