import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import firebase from 'firebase';

import { config } from './config';
import { Header } from './components/common';
import LoginScreen from './components/LoginScreen';

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

  renderStatus() {
    if(this.state.isLogin){
      return (
        <View>
          <Text>Welcome {this.state.user.name}</Text>
          <Image style={styles.picSize} source={{ uri: this.state.profile }}/>
        </View>
      );
    }
    return <LoginScreen onPress={ this.login.bind(this) }/>;
  }

  render() {
    return (
        <View style={styles.container}>
          <Header title={'Stubu App: Logo here'} style={styles.logo} />
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
    fontSize: 30
  },
  picSize: {
    width: 200,
    height: 200
  }
});

export default App;
