import * as types from '../actions/types';

const INITIAL_STATE = {
	token: null,
	isAuth: false
}

export default function(state = INITIAL_STATE, action) {
   switch(action.type){
      case types.FACEBOOK_LOGIN_SUCCESS:
			return { isAuth: false, token: action.payload }
      case types.FACEBOOK_LOGIN_AUTH:
			return { isAuth: true }
      case types.FACEBOOK_LOGIN_FAILED:
			return { isAuth: false, token: null }
      default:
         return state;  
   }
}