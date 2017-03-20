import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { config } from './config';
import Router from './router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, applyMiddleware(Thunk));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
