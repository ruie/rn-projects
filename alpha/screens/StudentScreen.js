import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import firebase, { firebaseAuth } from '../api/firebase';

export default class StudentScreen extends Component {

	redirectScreen = route => this.props.navigation.dispatch(
		NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: route })] })
	);

	render() {
		return (
			<View>
				<Text>
					StudentScreen
            </Text>
			</View>
		);
	}
}