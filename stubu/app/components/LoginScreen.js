import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import firebase from 'firebase';
import { config } from '../../app/config';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <SocialIcon
          title='Sign In With Facebook'
          button
          raised
          type='facebook'
          style={styles.loginButton}
          onPress={this.props.onPress}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: 250,
  },
  logo: {
    fontSize: 30
  }
});

export default LoginScreen;
