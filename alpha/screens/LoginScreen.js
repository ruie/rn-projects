import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { DoubleBounce } from 'react-native-loader';
import { Button } from 'react-native-elements'

import * as actions from '../actions';

class LoginScreen extends Component {

  componentDidMount() {
    AsyncStorage.removeItem('fb_token');
    // this.props.facebookLogin();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.redirectScreen('StudentScreen');
    }
  }

  redirectScreen = route => this.props.navigation.dispatch(
    NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: route })] })
  );

  render() {
    if(this.props.isAuth) {
      return (
        <View>
          <DoubleBounce size={10} color="#52AB42" />
        </View>
      );     
    } else {
      return (
        <View>
          <Button
            onPress={() => this.props.facebookLogin()}         
            title='BUTTON'
          />
        </View>
      );
    }  
  }

}

function mapStateToProps({ auth }) {
   return { 
     token: auth.token,
     isAuth: auth.isAuth
    }
}

export default connect(mapStateToProps, actions)(LoginScreen);