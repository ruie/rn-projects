import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class SplashScreen extends Component {

  static navigationOptions = {
    tabBarVisible: false
  }

  state = {
    token: null
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('home');
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
      this.props.navigation.navigate('home');
    }
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{ uri: 'https://image.ibb.co/iur7Fk/bg.png' }}
        >
          <Button
            large
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
    backgroundColor: '#355089'
  }
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(SplashScreen);
