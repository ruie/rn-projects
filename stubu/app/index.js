import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import firebase from 'firebase';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

import { config } from './config';
import { Header } from './components/common';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

class App extends React.Component {

  state = {
    loading: false,
    isLogin: false,
    user: {
    }
  }

  componentWillMount() {
    firebase.initializeApp(config);
  }

  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  };

  login = async () => {
  	const ADD_ID = '273131576444313';
  	const options = {
  		permissions: ['public_profile', 'email']
  	}

  	const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
  	if (type === 'success') {

  		const response = await fetch(`https://graph.facebook.com/me/?access_token=${token}`);
      this.setState({ user: await response.json(), isLogin: true });
      const profile = await fetch(`https://graph.facebook.com/v2.5/1477574278920457/picture?width=500&height=500&redirect=false&access_token=${token}`);
      const pic = await profile.json();
      this.setState({ profile: pic.data.url });
  		this.authenticate(token);
      console.log('state', this.state);
      console.log(this.state.profile)
  	} else {
      console.log(type);
    }
  };

    renderNav() {
      return (
        <View style={{ flex: 1}}>
          <Router>
            <Scene key="root">
              <Scene key="login" component={LoginScreen} title="Login" initial={true} />
              <Scene key="main" component={MainScreen} title="Main" />
            </Scene>
          </Router>
        </View>
      );
    }

  renderStatus() {
    switch (this.state.isLogin) {
      case true:
      return (
        <View style={{ zIndex: 99}}>
          <Header title={'Stubu Logo'} style={styles.logoMain} />
          <Text style={styles.welcome}>Hello! {this.state.user.name}</Text>
          <Image style={styles.picSize} source={{ uri: this.state.profile }}/>
          <MainScreen toProps={this.state} />
        </View>
      );
      case false:
      return (
        <View>
          <Ionicons screen="setting" name="ios-bookmarks" style={{ textAlign: 'center'}} size={60} color="#00328B" />
          <Header title={'Stubu'} style={styles.logoMain} />
          <LoginScreen onPress={ this.login.bind(this) }/>
        </View>);
      default:
        return <View />;
    }

  }

  render() {
    return (
        <View style={styles.container}>

          {this.renderStatus()}
        </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: 250
  },
  logo: {
    flexDirection: 'column',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  logoMain: {
    marginTop: 20,

    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center'
  },
  picSize: {
    width: 100,
    height: 100,
    textAlign: 'center'
  }
});

export default App;
