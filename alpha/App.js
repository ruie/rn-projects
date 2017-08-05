import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'redux';
import { connect } from 'react-redux';

import store from './store';
import * as Router from './Router';


class App extends React.Component {

	render() {
		console.log(this.props);
		return (
			<Provider store={store}>
				<Router.AuthStack />
			</Provider>
		);

	}

}

export default App;