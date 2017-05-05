import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ball } from './components/ball';

class App extends Component {

  render() {
    return (
      <View>
        <Text>
          This is a ball
        </Text>
        <Ball />
      </View>
    );
  }

}

export default App;
