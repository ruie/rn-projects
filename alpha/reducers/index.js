import { combineReducers } from 'redux';
import auth from './authReducer';
import status from './statusReducer';

export default combineReducers({
   auth,
   status

});