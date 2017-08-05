import * as Constants from '../Constants';

const INITIAL = {
	isAuth: null,
	auth: null,
	loading: false
}

export default function(state = {}, action) {
   switch(action.type) {
      case Constants.FACEBOOK_LOGIN_SUCCESS:
         return { isAuth: true, auth: action.payload }
      case Constants.FACEBOOK_LOGIN_FAILED:
            return { isAuth: false, auth: null }
      case Constants.AUTH_LOADING:
            return { loading: true }
      case Constants.AUTH_DONE:
            return { loading: false }
      case Constants.AUTH_STATE_FALSE:
            return { isAuth: false, loading: false }
      case Constants.AUTH_STATE_TRUE:
			return { isAuth: true, loading: false }
      default:
         return state;
   }
}