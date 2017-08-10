import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { fireabaseAuth } from './api/firebase';
import { test } from './api/auth';
import { Login, Main } from './Navigator';

console.ignoredYellowBox = [
  'Setting a timer'
]

export default class App extends React.Component {

  state = {
    isAuth: null
  }

  componentWillMount() {
    fireabaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isAuth: true });
      } else {
        this.setState({ isAuth: false });
      }
    });
  }

  renderRouter = () => {
    if (this.state.isAuth) {
      return <Main />
    }
    else {
      return <Login />
    }
  }

  render() {
	  return (
      <View style={{ flex: 1 }}>
        {this.renderRouter()}
      </View>
    )
  }
}