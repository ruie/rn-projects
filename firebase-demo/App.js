import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';

import { fireabaseAuth } from './api/firebase';
import { test } from './api/auth';
import { Login, Feed } from './Navigator';

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
      return <Feed />
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