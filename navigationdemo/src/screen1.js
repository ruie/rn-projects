import React, { Component } from 'react';
import {
	Text,
	View,
	Platform
} from 'react-native';
import NavBar from 'react-native-navbar';

export default class Screen1 extends Component {

	static navigationOptions = {
      headerTitle: <Text>Screen 1</Text>,
   }

	render() {
		return (
			<View style={{flex: 1}}>

				<View style={styles.top} >
					<Text style={styles.text} >Screen 1</Text>
				</View>
			</View>		
		);
	}
};

const styles = {
	top: {
		backgroundColor: '#000',
		padding: 0,
	},
	text: {
		color: '#fff'
	}
}

