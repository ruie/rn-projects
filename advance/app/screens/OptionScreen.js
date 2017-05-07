import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';

class OptionScreen extends Component {

  state = {
    image: null
  }

  captureImageRecipe = async () => {
    let result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.props.navigation.navigate('recipes');
      this.setState({ image: result.uri });
    }
  }

  captureImageNutrients= async () => {
    let result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.props.navigation.navigate('nutrients');
      this.setState({ image: result.uri });
    }
  }

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
          <Button
            buttonStyle={styles.top}
            borderRadius={5}
            fontWeight={'bold'}
            color={'#fff'}
            backgroundColor={'#8DCA58'}
            iconLeft
            icon={{ name: 'shopping-cart', type: 'font-awesome' }}
            title='Get Recipes'
            onPress={() => this.captureImageRecipe()}
          />
          <Button
            buttonStyle={styles.bottom}
            borderRadius={5}
            fontWeight={'bold'}
            color={'#fff'}
            backgroundColor={'#8DCA58'}
            iconLeft
            icon={{ name: 'lemon-o', type: 'font-awesome' }}
            title='Get Nutrition Details'
            onPress={() => this.captureImageNutrients()}
          />
          <Button
            buttonStyle={styles.bottom}
            borderRadius={5}
            fontWeight={'bold'}
            color={'#fff'}
            backgroundColor={'#8DCA58'}
            iconLeft
            icon={{ name: 'heart', type: 'font-awesome' }}
            title='View Saved Recipes'
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

export default OptionScreen;
