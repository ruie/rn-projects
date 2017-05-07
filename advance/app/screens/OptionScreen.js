import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import Clarifai from 'clarifai';
import { connect } from 'react-redux';

import * as actions from '../actions';

const app = new Clarifai.App(
   'f9Yuf8R8ya_1uG45M8mseffbd2rajohrdBOw9Dgc',
   'dfXycYNdAE3XFOTZZgFuxMrPxihGhaFcmUsmuNbu'
 );

class OptionScreen extends Component {

  state = {
    image: null,
  }

  fetchAndPush = (tag) => {
    this.props.fetchRecipes(tag, () => {
      this.props.navigation.navigate('recipes');
    });
  }

  captureImageRecipe = () => {

    let url = this.state.image;

    app.models.predict(Clarifai.GENERAL_MODEL, url).then(
    function (res) {
      console.log('response:', JSON.stringify(res.data.outputs[0].data.concepts[0].name));
      console.log('response:', JSON.stringify(res.data.outputs[0].data.concepts[0].value));
      let tag = res.data.outputs[0].data.concepts[0].name;
      console.log(tag);
      // console.log('mydata:', JSON.stringify(myData));
      return tag;
    }).then((tag) => this.fetchAndPush(tag));
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
    console.log(this.state.image);
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

          <TextInput
            underlineColorAndroid="#fff"
            placeholder="Input Image URL Here"
            style={{ height: 50, width: 250, backgroundColor: '#fff', paddingLeft: 15, paddingRight: 15 }}
            onChangeText={(link) => this.setState({ image: link })}
            value={this.state.text}
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

export default connect(null, actions)(OptionScreen);
