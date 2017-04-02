import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Tabs from 'react-native-tabs';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from './ProfileScreen';
import ListScreen from './ListScreen';

class MainScreen extends Component {
  constructor(props){
    super(props);
  }

  state = {
    page: 'list'
  }

  componentWillMount() {
    this.setState( this.props.toProps );
  }

  renderTab() {
    switch(this.state.page) {
      case 'profile':
        return <ProfileScreen toProps={this.state}/>
      case 'list':
        return <ListScreen toProps={this.state}/>
      case 'setting':
        return <ListScreen toProps={this.state}/>
      default:
        return <ListScreen toProps={this.state}/>
    }
  }

  render() {
    console.log('MainScreen',this.state);
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{ alignSelf: 'stretch', backgroundColor:'white'}}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.screen})}>
          <Ionicons screen="first" name="ios-list" size={30} color="black" />
          <Ionicons screen="list" name="ios-filing-outline" size={30} color="black" />
          <Ionicons screen="profile" name="ios-contact" size={30} color="black" />
          <Ionicons screen="setting" name="ios-settings" size={30} color="black" />

        </Tabs>
        {this.renderTab()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 1,
  },
};

export default MainScreen;
