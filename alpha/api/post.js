import firebase, {
   firebaseAuth,
   firebaseDatabase,
   getUserData,
   getPostRef,
   getStudentPostsRef
} from './firebase';

export const createPost = (text) => {
   let posts = getPostRef();
   let studentPost = getStudentPostsRef();
   let userData = getUserData();
   const data = {
      content: text,
      ...userData
   }
   posts.push(data);
   studentPost.push(data)
}