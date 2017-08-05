import { Facebook } from 'expo';
import { NavigationActions } from 'react-navigation';

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

export const LoginWithFB = async navigation => {

   // const ADD_ID = '273131576444313'
   // const options = {
   //    permissions: ['public_profile']
   // }

   // let { type, token } = await Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
   // let {uid} = authenticate(token);
   
   // if(type === 'success') {
   //    navigation.navigate('FeedStack');
   // }
      console.log('tapped');
      navigation.navigate('MainStack')
}