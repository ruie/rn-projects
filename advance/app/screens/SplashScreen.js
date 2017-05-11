import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SplashScreen extends Component {

  state = {
    token: null
  }

  async componentWillMount() {
    // AsyncStorage.removeItem('fb_token');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('options');
      this.setState({ token });
    } else {
      this.setState({ token: null });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('options');
    }
  }

  replaceScreen = () => {
    const { location, position } = this.props.navigation.state.params;
    this.props.navigation.dispatch({
      type: 'ReplaceCurrentScreen',
      routeName: 'options',
      params: { location, position },
      key: 'options'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{ uri: 'https://image.ibb.co/iur7Fk/bg.png' }}
        >
          <Button
            large
            borderRadius={5}
            icon={{ name: 'facebook', type: 'font-awesome' }}
            title={'Login with Facebook'}
            onPress={() => this.props.facebookLogin()}
            buttonStyle={styles.buttonStyle}
          />
        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 150
  },
  buttonStyle: {
    backgroundColor: '#fff'
  }
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(SplashScreen);
