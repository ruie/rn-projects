import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  View
} from 'react-native';
import Reducers from './reducers';

import { Header } from './components/common';
import MovieScreen from './components/movieScreen';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(Reducers)} >
        <View style={{ flex: 1 }}>
          <Header />
          <MovieScreen />
        </View>
      </Provider>
    );
  }
}

export default App;
