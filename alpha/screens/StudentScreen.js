import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { Icon, List, ListItem, } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'; 

import * as actions from '../actions';
import Backend from '../Backend';

class StudentScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {}} = navigation.state;
		return {
		headerTitle: 'Stubu',
		headerLeft: <Icon name='book' type='font-awesome' color='#ffffff' onPress={() => {
			params.switchStatus('tutor')
			params.redirectScreen('TutorScreen')
			}} />,
		headerRight: (
		<View style={{ flexDirection: 'row' }}>
				<Icon name='align-left' type='font-awesome' color='#ffffff' style={{ marginRight: 10 }} onPress={() => navigation.navigate('CategoryScreen')} />
			<Icon name='pencil-square-o' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('PostScreen')} />
		</View>
		),
		tabBarIcon: ({ tintColor }) => (
		<Icon name='list-ul' type='font-awesome' color={tintColor} />
		),
	}};

	state = {
	};

	componentWillMount() {
		console.log('Initial',this.props);
	}

	componentDidMount() {
		this.props.navigation.setParams({ 
			redirectScreen: this.redirectScreen,
			switchStatus: this.props.switchStatus
		});
	}

	redirectScreen = route => this.props.navigation.dispatch(
		NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: route })] })
	);

	render() {
		return <View>
			<Text>StudentScreen</Text>

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

const mapStateToProps = ({ status }) => {
	return {
		status: status.status
	}
}

export default connect(mapStateToProps, actions)(StudentScreen);