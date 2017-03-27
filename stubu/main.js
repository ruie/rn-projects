import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import { config } from './app/config';
import Header from './app/components'

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  }

  login = async () => {
	const ADD_ID = '273131576444313';
	const options = {
		permissions: ['public_profile', 'email'],
	}
	const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
	if (type === 'success') {
		const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
		console.log(await response.json());
    console.log(await response.json().picture);
		this.authenticate(token);
	} else {
    console.log(type);
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Open up main.js to start working on your app!</Text>
        <Button
          raised
          onPress={this.login}
          icon={{name: 'cached'}}
          title='RAISED WITH ICON' />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
