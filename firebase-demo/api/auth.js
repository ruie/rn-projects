import firebase, { firebaseDatabase, fireabaseAuth } from './firebase';
import { Facebook } from 'expo';

const authenticate = token => {
   const provider = firebase.auth.FacebookAuthProvider
   const credential = provider.credential(token)
   return firebase.auth().signInWithCredential(credential)
}

export const getCurrentUser = () => {
  const status = fireabaseAuth.currentUser;
  return status;
}


export const test = () => {
   const status = fireabaseAuth.currentUser;
   if (status === null ) {
      console.log('====================================');
      console.log('test: signout', status);
      console.log('====================================');
      return status;
   } else {
      let data = status.providerData;
      firebaseDatabase.ref('test').child(data[0].uid).push(data);
      console.log('====================================');
      console.log('test:', data);
      console.log('====================================');
      return status;
   }
}

export const logout = () => {
  fireabaseAuth.signOut();
}

export const onAuthState = async () => {
  fireabaseAuth.onAuthStateChanged(user => {
    if (user !== null) {
      return user;
      // unsubscribe();
    } else {
     return user;
      // unsubscribe();
    }
  });
}

export const LoginWithFacebook = async () => {
   const APP_ID = '273131576444313';
   const options = { permissions: ['public_profile'] }

   try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(APP_ID, options)
      const { displayName, providerData, providerId, uid } = await authenticate(token);
      const fields = ['id', 'name', 'cover']
      const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
      const data = await response.json();
      const picture = await `https://graph.facebook.com/${data.id}/picture?height=500`;

      console.log('FAcebook Auth', `${displayName} ${providerData} ${providerId} ${uid}` );
      console.log('FAcebook Response', `${data.id} ${data.name} ${picture} ${data.cover.source}` );

      firebaseDatabase.ref('users').child(uid).set({
         fbId: data.id,
         name: data.name,
         cover: data.cover.source,
         picture
      });
   } catch (error) {
    console.log('====================================');
    console.log('LoginWithFacebook', error);
    console.log('====================================');  
   }

}