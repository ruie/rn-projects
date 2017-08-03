import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAToFfr0wRidoZCA_kA7gSDphJ3Z7WCvVw",
  authDomain: "stubu-c2033.firebaseapp.com",
  databaseURL: "https://stubu-c2033.firebaseio.com",
  projectId: "stubu-c2033",
  storageBucket: "",
  messagingSenderId: "648927996680"
};

firebase.initializeApp(config);

export const rootRef = firebase.database().ref();

export default firebase;

// {
// 	users: {
// 		ljaflksjf: {
// 			name: 'Ruie Pena',
// 			school: 'DLSU D',
// 			bio: 'I love math and sciences',
//			location: [1000,1000];
//      reviewAsTutor: 5,
//      reviewAsStudent: 5
// 		}
// 	},
//		reviews: {
//			ljaflksjf: {
//				byUserKey: 'jalkdjasldk',
//				byName: 'Ruie Pena',
//				review: 'aklsdjalkdj',
//				stars: 5,
//				created: '12321098',
//			}
//		},
//		chat: {
//			aklsdjalskdj: {}
//		},
		
// }