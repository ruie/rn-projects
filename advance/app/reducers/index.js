import { combineReducers } from 'redux';
import auth from './authReducer';
import recipes from './recipesReducer';

export default combineReducers({
  auth, recipes
});
