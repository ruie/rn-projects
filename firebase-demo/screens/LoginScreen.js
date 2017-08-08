import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { LoginWithFacebook, test, logout } from '../api/auth';

class LoginScreen extends Component {
   state = {  }
   render() {
      return (
         <View style={styles.container}>
            <Button
               title={'Login with Facebook'}
               onPress={() => LoginWithFacebook()}
            />
            <Button
               title={'Test'}
               onPress={() => test()}
            />
            <Button
               title={'Logout'}
               onPress={() => logout()}
            />
            <Button
               title={'Next Page'}
               onPress={() => this.props.navigation.navigate('FeedScreen')}
            />
         </View>
      );
   }
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
};

export default LoginScreen;
    