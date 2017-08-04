import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import Backend from '../Backend';
import * as types from './types';


export const facebookLogin = () => async dispatch => {

   let token = await AsyncStorage.getItem('fb_token');

   if(token) {
      dispatch({ type: types.FACEBOOK_LOGIN_AUTH });
      
      const fields = ['id', 'first_name', 'last_name', 'picture'];
      const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
      const user = await response.json();
      const payload = {
         token: token,
         user
      }
      dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: payload });
   } else {
      doFacebookLogin(dispatch);
   }

}

const doFacebookLogin = async dispatch => {

   let { type, token } = await Facebook.logInWithReadPermissionsAsync('273131576444313', {
      permissions: ['public_profile'],
   });

   if(type === 'cancel') {
      return dispatch({ type: types.FACEBOOK_LOGIN_FAILED });
   }

   dispatch({ type: types.FACEBOOK_LOGIN_AUTH });

   await AsyncStorage.setItem('fb_token', token);
   const fields = ['id', 'first_name', 'last_name', 'picture'];
   const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
   const user = await response.json();
   const { uid } = await authenticate(token);
   createUser(uid, user);
   const payload = {
      token: token,
      uid,
      user
   }
   
   dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: payload });

}

const authenticate = (token) => {
   const provider = Backend.auth.FacebookAuthProvider;
   const credential = provider.credential(token)
   return Backend.auth().signInWithCredential(credential)
}

const createUser = (uid, userData) => {
   Backend.database().ref('users').child(uid).update(userData)
}
