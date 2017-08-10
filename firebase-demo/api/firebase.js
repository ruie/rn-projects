import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyAToFfr0wRidoZCA_kA7gSDphJ3Z7WCvVw",
   authDomain: "stubu-c2033.firebaseapp.com",
   databaseURL: "https://stubu-c2033.firebaseio.com",
   projectId: "stubu-c2033",
   storageBucket: "stubu-c2033.appspot.com",
   messagingSenderId: "648927996680"
};

firebase.initializeApp(config);

export default firebase;
export const firebaseDatabase = firebase.database();
export const fireabaseAuth = firebase.auth();