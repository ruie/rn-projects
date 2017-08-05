import firebase, {
   firebaseAuth,
   firebaseDatabase,
   getUserData,
   getUsersRef
} from './firebase';

export const createUser = () => {
   const usersRef = getUsersRef();
   const userData = getUserData();
   const data = {
      ...userData
   };
   usersRef.child(userData.uid).set(data);
}

export const updateUserLocation = () => {
   
}