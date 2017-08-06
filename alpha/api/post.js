import { AsyncStorage } from 'react-native';
import firebase, {
   firebaseAuth,
   firebaseDatabase,
   getUserData,
   getPostRef,
   getStudentPostsRef,
} from './firebase';

export const createPost = async text => {
   let posts = getPostRef();
   let studentPost = getStudentPostsRef();
   let userData = getUserData();

   console.log('post', userData);
   const data = {
      content: text,
      date: firebase.database.ServerValue.TIMESTAMP,
      ...userData
   }

   posts.push(data);
   studentPost.push(data);

   // newPosts.set(data);
   // newStudentPost.set(data);
}