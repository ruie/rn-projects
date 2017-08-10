import * as Constants from '../Constants';

import { firebase } from '../api/firebase';
import { getToken } from '../api/auth';

export const LoginWithFacebook = () => async dispatch => {
   try {
      dispatch({ type: Constants.AUTH_LOADING });
      let response = await getToken();
      if (response === 'cancel') {
         dispatch({ type: Constants.AUTH_DONE });
         dispatch({ type: Constants.FACEBOOK_LOGIN_FAILED });
      } else {
         console.log('Response:', response);
         dispatch({ type: Constants.AUTH_DONE });
         dispatch({ type: Constants.FACEBOOK_LOGIN_SUCCESS, payload: response });
      }
   } catch(e) {
      console.log('Action:', e);
   }
}

export const willAuth = (state) => dispatch => {
   if(state === true) {
      dispatch({ type: Constants.AUTH_LOADING });
   } else {
      dispatch({ type: Constants.AUTH_DONE });
   }
}

export const authState = (state) => dispatch => {
   if (state === true) {
      dispatch({ type: Constants.AUTH_STATE_TRUE });
   } else {
      dispatch({ type: Constants.AUTH_STATE_FALSE });
   }
}