import Expo from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Examples } from '@shoutem/ui'

class App extends Component {
  state = {
  fontsAreLoaded: false,
}

async componentWillMount() {
  await Expo.Font.loadAsync({
    'Rubik-Black': require('../node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
    'Rubik-BlackItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
    'Rubik-Bold': require('../node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
    'Rubik-BoldItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
    'Rubik-Italic': require('../node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('../node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
    'Rubik-LightItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
    'Rubik-Medium': require('../node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
    'Rubik-MediumItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
    'Rubik-Regular': require('../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
    'rubicon-icon-font': require('../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
  });

  this.setState({fontsAreLoaded: true});
}

  render() {
    if (!this.state.fontsAreLoaded) {
      return <View><Text>Loading font</Text></View>;
    }

    return (
      <Examples />
    );
  }
}

export default App;
