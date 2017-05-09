import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Navigator from './router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
};

export default App;
