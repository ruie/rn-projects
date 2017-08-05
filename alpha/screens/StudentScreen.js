import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Icon, List, ListItem, Button } from 'react-native-elements';

import { createPost } from '../api/post';
import { createUser } from '../api/user';

export default class StudentScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
		headerTitle: 'Stubu',
		headerLeft: <Icon name='book' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('TutorScreen')} />,
		headerRight: (
			<View style={{ flexDirection: 'row' }}>
				<Icon name='align-left' type='font-awesome' color='#ffffff' style={{ marginRight: 10 }} onPress={() => navigation.navigate('FilterScreen')} />
				<Icon name='pencil-square-o' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('PostScreen')} />
			</View>
		),
		tabBarIcon: ({ tintColor }) => (
			<Icon name='list-ul' type='font-awesome' color={tintColor} />
		),
	}};

	render() {
		return (
			<View>
				<Text>Student</Text>
				<Button title={'Push'} onPress={() => {

					 createUser();
					 createPost();
					 console.log('pushed'); 
					}} />
			</View>
		);
	}
}