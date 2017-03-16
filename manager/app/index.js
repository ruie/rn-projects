import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  View,
  Text
} from 'react-native';

const store = createStore(Reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>Sample</View>
      </Provider>
    );
  }
}

export default App;
