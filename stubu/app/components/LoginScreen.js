import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import firebase from 'firebase';
import { config } from '../../app/config';

class LoginScreen extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  };

  login = async () => {
  	const ADD_ID = '273131576444313';
  	const options = {
  		permissions: ['public_profile', 'email'],
  	}
  	const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
  	if (type === 'success') {
  		const response = await fetch(`https://graph.facebook.com/me/picture/?access_token=${token}`);
  		console.log(await response.json());
      console.log(await response.json().picture);
  		this.authenticate(token);
  	} else {
      console.log(type);
    }
  };

  render() {
    return (
      <View>
        <Text>Open up main.js to start working on your app!</Text>
        <SocialIcon
          title='Sign In With Facebook'
          button
          raised
          type='facebook'
          style={styles.loginButton}
          onPress={this.login.bind(this)}
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
