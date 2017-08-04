import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { Icon, List, ListItem, } from 'react-native-elements';
import Modal from 'react-native-modalbox';

import Backend from '../Backend';

export default class StudentScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: 'Stubu',
		headerLeft: <Icon name='book' type='font-awesome' color='#ffffff' onPress={() => refs.modal1.open()} />,
		headerRight: (
		<View style={{ flexDirection: 'row' }}>
			<Icon name='align-left' type='font-awesome' color='#ffffff' style={{ marginRight: 10 }} onPress={() => navigation.navigate('Filter')} />
			<Icon name='pencil-square-o' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('Post')} />
		</View>
		),
		tabBarIcon: ({ tintColor }) => (
		<Icon name='list-ul' type='font-awesome' color={tintColor} />
		),
	});

	state = {
		isOpen: false,
		isDisabled: false,
		swipeToClose: true,
		sliderValue: 0.3
	};

	componentWillMount() {
	}

	resetAction = (routeName) => NavigationActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({ routeName })
		]
	})

	render() {
		return <View>
			<Text>StudentScreen</Text>
			<Modal
				style={[styles.modal]}
				ref={"modal1"}
				swipeToClose={this.state.swipeToClose}
				onClosed={this.onClose}
				onOpened={this.onOpen}
				onClosingState={this.onClosingState}>
				<Text style={styles.text}>Basic modal</Text>
			</Modal>
		</View>;
	}
}

const styles = {
	wrapper: {
		paddingTop: 50,
		flex: 1
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		margin: 10,
		backgroundColor: "#3B5998",
		color: "white",
		padding: 10
	},
};