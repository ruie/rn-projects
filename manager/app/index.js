import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  View,
  Text
} from 'react-native';

import Reducers from './reducers';

const store = createStore(Reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Text>Sample</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
