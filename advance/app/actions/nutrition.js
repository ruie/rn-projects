import axios from 'axios';

import {
  FETCH_NUTRITION
} from './types';

export const fetchNutrition = (search, callback) => async (dispatch) => {
  try {
    const url = "https://api.edamam.com/api/nutrition-data?app_id=20fcac9c&app_key=33a54a10ac89fa69c9c5db892f7bfde5&ingr=1%20" + search;
    console.log(url);
    let { data } = await axios.get(url);
    console.log(data.totalDaily);
    dispatch({ type: FETCH_NUTRITION, payload: data.totalDaily });
    callback();
  } catch (e) {
    console.error(e);
  }
};
