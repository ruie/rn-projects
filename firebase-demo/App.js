import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';

import { fireabaseAuth } from './api/firebase';
import { test } from './api/auth';
import { Login, Feed } from './Navigator';

export default class App extends React.Component {

  state = {
    status: null
  }

  componentWillMount() {
    fireabaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ status: true });
      } else {
        this.setState({ status: false });
      }
    });
  }

  render() {
	  if (this.state.status) {
		  return (
        <View style={{ flex: 1 }}>
			    <Feed />
        </View>
		  )
	  }
	  else {
		  return (
        <View style={{ flex: 1 }}>
          <Login />
        </View>
      )
	  }
  }
}
