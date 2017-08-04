import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, connect } from 'redux';
import { Provider } from 'react-redux';

import store from './store';
import Navigator from './Navigator';

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}

}