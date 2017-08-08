import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fireabaseAuth } from '../api/firebase';
import { test, onAuthState, getCurrentUser } from '../api/auth';

class FeedScreen extends Component {
   
   state = {
      status: null
   } 

   componentWillMount() {
      fireabaseAuth.onAuthStateChanged((user) => {
         if (user) {
            this.setState({ status: true });
         } else {
            this.setState({ status: false });
         }
      });
      
   }

   render() {
      console.log('status', this.state.status);

      return (
         <View>
            <Text>{FeedScreen}</Text>
         </View>
      );
   }
}

export default FeedScreen;