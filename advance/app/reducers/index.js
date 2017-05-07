import { combineReducers } from 'redux';
import auth from './authReducer';
import recipes from './recipesReducer';
import nutrition from './nutritionReducer';

export default combineReducers({
  auth, recipes, nutrition
});
