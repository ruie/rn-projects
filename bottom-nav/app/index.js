import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';

import { createStore } from 'redux';
import Provider from 'react-redux';

import { config } from './config';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

// import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (

        <View>
          <LoginScreen />
        </View>

    );
  }

}

export default App;
