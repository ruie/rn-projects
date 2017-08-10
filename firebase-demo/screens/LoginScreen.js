import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppLoading } from 'expo';

import { LoginWithFacebook, test, logout } from '../api/auth';

class LoginScreen extends Component {

   state = {
      isLoading: false
   }

   renderStatus = () => {
      if(this.state.isLoading) {
         return <AppLoading />
      } else {
         return <Button
            title={'Login with Facebook'}
            onPress={() => {
               this.setState({ isLoading: true })
               LoginWithFacebook()
            }}
         />
      }
   }

   render() {
      return (
         <View style={styles.container}>
            {this.renderStatus()}
            <Button
               title={'Test'}
               onPress={() => test()}
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

export default LoginScreen;
    