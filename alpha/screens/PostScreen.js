import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Icon, FormLabel, FormInput } from 'react-native-elements';

import { createPost } from '../api/post';

export default class PostScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
    headerTitle: 'New Post',
    headerLeft: <Icon name='close' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
    headerRight: <Icon name='check' type='font-awesome' color='#ffffff' onPress={() => {
      let data = params.getPostText();
      params.createPost(data);
      navigation.goBack();
    }} />,
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list-ul' type='font-awesome' color={tintColor} />
    ),
  }};

  state = {
    postText: ""
  }

  componentDidMount() {
    this.props.navigation.setParams({
      createPost: createPost,
      getPostText: this.getPostText,
    });
  }

  getPostText = () => {
    return this.state.postText;
  }

  render() {
    return (

        <FormInput
        containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} 
        inputStyle={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'stretch',
          paddingLeft: 10,
          paddingRight: 10
        }} 
        placeholder={'Input your questions here'}
        onChangeText={(text) => this.setState({ postText: text })}
        value={this.state.postText}
        multiline />

    )
  }
}