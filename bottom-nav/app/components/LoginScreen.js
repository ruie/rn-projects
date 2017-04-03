import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import { config } from '../config';

class LoginScreen extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  }

  login = async () => {
    const ADD_ID = '273131576444313';
    const options = {
      permissions: ['public_profile', 'email'],
    };

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options);
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      console.log(await response.json());
      console.log(await response.json().picture);
      this.authenticate(token);
    } else {
      console.log(type);
    }
  }

  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }


}

export default LoginScreen;
