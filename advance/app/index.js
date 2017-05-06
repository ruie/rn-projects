import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import MainNavigator from './router';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
};

export default App;
