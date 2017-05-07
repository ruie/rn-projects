import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

class RecipeInfoScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{ uri: 'https://image.ibb.co/mP4Bak/bg.jpg' }}
        >
          <Image
            source={{ uri: 'https://image.ibb.co/jGQOMQ/logo.png' }}
            style={styles.logo}
          />

        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 207,
    height: 119,
    resizeMode: 'center',
    marginTop: 130
  },
  top: {
    marginTop: 40
  },
  bottom: {
    marginTop: 35
  }
};

export default RecipeInfoScreen;
