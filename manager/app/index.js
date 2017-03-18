import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import { config } from './config';
import { Header, } from './components/common';
import LoginScreen from './components/loginScreen';

const store = createStore(reducers);

class App extends Component {
  state = {

  }

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header title='Manager' />
          <LoginScreen />
        </View>
      </Provider>
    );
  }
}

export default App;
