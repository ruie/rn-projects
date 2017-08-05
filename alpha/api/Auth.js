import { Facebook } from 'expo';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import firebase, { 
   firebaseDatabase, 
   firebaseAuth
} from './firebase.js';

import * as Router from '../Router';

const authenticate = (token) => {
   const provider = firebase.auth.FacebookAuthProvider
   const credential = provider.credential(token)
   return firebaseAuth.signInWithCredential(credential)
}

export const getToken = async () => {

	const ADD_ID = '273131576444313'
	const options = {permissions: ['public_profile']}

	try {
		let { type, token } = await Facebook.logInWithReadPermissionsAsync(ADD_ID, options);
		if(type === 'cancel') {
			return 'cancel';
		} else {
			let { uid } = await authenticate(token);
			await AsyncStorage.setItem('fb_token', token);
			return { token, uid, type };
		}
	} catch(e) {
		console.log('LoginWithFacebook', e);
	}

}