import Expo from 'expo';
import React, { Component } from 'react';
import firebase from 'firebase';

import { View } from 'react-native';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDdLbrbDOOBLlo3mM5QE4bm3GDM--wCNf4',
    authDomain: 'auth-1bd18.firebaseapp.com',
    databaseURL: 'https://auth-1bd18.firebaseio.com',
    storageBucket: 'auth-1bd18.appspot.com',
    messagingSenderId: '676369856263'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()} label={'Sign Out'} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }

}

Expo.registerRootComponent(App);
