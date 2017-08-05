import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { DoubleBounce } from 'react-native-loader';

import * as actions from '../actions';
import firebase, { firebaseAuth } from '../api/firebase';

class LoginScreen extends Component {

	componentWillMount() {
		// firebaseAuth.signOut();
		// AsyncStorage.removeItem('fb_token');
		this.props.willAuth(true);
		firebaseAuth.onAuthStateChanged(async (user) => {
			let hasToken = await AsyncStorage.getItem('fb_token');
			console.log("hastoken",hasToken);
			if (user || hasToken) {
				this.props.authState(true);
				this.redirectScreen('MainStack');
			} else {
				this.props.authState(false);
			}
		})
	}

	redirectScreen = route => this.props.navigation.dispatch(
		NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: route })] })
	);

	render() {
		console.log(this.props);
		if (this.props.loading) {
			return (
				<View>
					<DoubleBounce size={10} color="#52AB42" />
				</View>
			);
			
		} else {
			return (
				<View>
					<Button
						title={'Login FB'}
						onPress={() => {
							  this.props.LoginWithFacebook()  
						}}
					/>
				</View>
			);
		}
	}

}

function mapStateToProps({ auth }) {
	return { isAuth: auth.isAuth, auth: auth.auth, loading: auth.loading };
}

export default connect(mapStateToProps, actions)(LoginScreen);