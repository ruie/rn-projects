import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Icon, List, ListItem, Button } from 'react-native-elements';

import { getStudentPostsRef } from '../api/firebase';
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

	state = {
		userPosts: [],
	}

	fetchUserPosts = () => {
		getStudentPostsRef().on('child_added', (data) => {
			this.setState({
				userPosts: [...this.state.userPosts, data.val()]
			})
		})
	}

	componentDidMount() {
		this.fetchUserPosts();
	}
	

	render() {
		return (
			<List
				containerStyle={{ marginTop: 0, flex: 1, borderBottomColor: '#eee', borderTopWidth: 1, borderBottomWidth: 0 }}>
				<FlatList
					data={this.state.userPosts}
					renderItem={({ item }) => (
						<ListItem
							containerStyle={{ borderBottomColor: '#F1F1F3' }}
							roundAvatar
							subtitleNumberOfLines={3}
	
							title={
								<View style={{ marginLeft: 10, flexDirection: "row" }} >
									<Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 7 }} >{`${item.displayName}`}</Text>
									
								</View>
							}
							subtitle={item.content}
							subtitleStyle={{ fontWeight: 'normal' }}
							
							
						/>
					)}
					keyExtractor={item => item.date}
				/>
			</List>
		);
	}
}