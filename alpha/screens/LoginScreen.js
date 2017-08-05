import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Button } from 'react-native-elements';

import { LoginWithFB } from '../api/Auth';

class LoginScreen extends Component {



	render() {
		return (
		<View>
			<Button 
				title={'Login FB'} 
					onPress={() => LoginWithFB(this.props.navigation)}
			/>
		</View>
		);
	}

}

export default LoginScreen;