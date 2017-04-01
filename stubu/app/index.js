import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import { config } from './config';
import { Header } from './components/common';
import LoginScreen from './components/LoginScreen';

class App extends React.Component {

  render() {

    return (
        <View style={styles.container}>
          <Header title={'Stubu App'} style={styles.logo} />
          <LoginScreen />
        </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: 250
  },
  logo: {
    fontSize: 30
  }
});

export default App;
