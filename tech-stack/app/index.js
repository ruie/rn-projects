import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryView from './components/libraryView';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1}}>
        <Header title="Tech Stack" />
        <LibraryView />
      </View>
    </Provider>
  );
}

export default App;
