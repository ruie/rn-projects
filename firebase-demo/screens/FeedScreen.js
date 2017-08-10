import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fireabaseAuth } from '../api/firebase';
import { Button } from 'react-native-elements';
import { LoginWithFacebook, test, logout } from '../api/auth';

class FeedScreen extends Component {

   render() {
      return (
         <View style={styles.container}>
            <Text>{FeedScreen}</Text>
            <Button
               title={'Test'}
               onPress={() => test()}
            />
            <Button
               title={'Logout'}
               onPress={() => logout()}
            />
         </View>
      );
   }
}

const styles = {
   container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
   },
};

export default FeedScreen;