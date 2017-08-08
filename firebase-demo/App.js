import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';

import { fireabaseAuth } from './api/firebase';
import { test } from './api/auth';
import { Login, Feed } from './Navigator';

console.ignoredYellowBox = [
  'Setting a timer'
];

export default class App extends React.Component {

  _build = () => {
    let user = test();
    console.log('====================================');
    console.log('build', user);
    console.log('====================================');
    if(user ==! null) {
      return <Feed />;
    } else {
      return <Login />;
    }
  }

  render() {
    return <Login />;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
