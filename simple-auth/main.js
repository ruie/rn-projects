import Expo from 'expo';
import React, { Component } from 'react';
import firebase from 'firebase';

import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  state = {};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDdLbrbDOOBLlo3mM5QE4bm3GDM--wCNf4',
    authDomain: 'auth-1bd18.firebaseapp.com',
    databaseURL: 'https://auth-1bd18.firebaseio.com',
    storageBucket: 'auth-1bd18.appspot.com',
    messagingSenderId: '676369856263'
    });
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        <LoginForm />
      </View>
    );
  }

}

Expo.registerRootComponent(App);
