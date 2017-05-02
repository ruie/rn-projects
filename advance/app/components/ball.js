import React, { Component } from 'react';
import {
  View,
  Animated
} from 'react-native';

export class Ball extends Component {

  render() {
    return (
      <View style={styles.ball} />
    );
  }
}

const styles = {
  ball: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};
