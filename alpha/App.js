import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'redux';
import { Provider } from 'react-redux';

import store from './store';
import * as Router from './Router';


class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<Router.Navigator />
			</Provider>
		);
	}

}

export default App;